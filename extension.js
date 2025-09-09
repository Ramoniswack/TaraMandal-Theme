const vscode = require('vscode');

// Store the original terminal settings to restore later
let originalTerminalSettings = null;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('TaraMandal theme activated');
    
    // Store original terminal settings when extension is first loaded
    const config = vscode.workspace.getConfiguration();
    originalTerminalSettings = config.get('workbench.colorCustomizations') || {};
    
    // Set up configuration watcher
    let disposable = vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('workbench.colorTheme')) {
            const currentTheme = config.get('workbench.colorTheme');
            if (currentTheme.includes('TaraMandal')) {
                applyTerminalColors();
            } else {
                restoreOriginalColors();
            }
        }
    });
    
    context.subscriptions.push(disposable);
    
    // Apply immediately if a TaraMandal theme is active
    const currentTheme = config.get('workbench.colorTheme');
    if (currentTheme.includes('TaraMandal')) {
        applyTerminalColors();
    }
}

function applyTerminalColors() {
    const config = vscode.workspace.getConfiguration();
    const currentTheme = config.get('workbench.colorTheme');
    
    console.log(`Applying terminal colors for ${currentTheme}`);
    
    // If we don't have the original settings stored yet, store them now
    if (!originalTerminalSettings) {
        originalTerminalSettings = config.get('workbench.colorCustomizations') || {};
    }
    
    const colorCustomizations = config.get('workbench.colorCustomizations') || {};
    let themeSpecificSettings = {};
    
    // Set for light theme
    if (currentTheme.includes('Light')) {
        themeSpecificSettings = {
            "[TaraMandal Light Cream]": {
                "terminal.background": "#F0E6D4",
                "terminal.foreground": "#2D2D5F"
            }
        };
    } 
    // Set for dark theme
    else if (!currentTheme.includes('High')) {
        themeSpecificSettings = {
            "[TaraMandal]": {
                "terminal.background": "#1a1a2e",
                "terminal.foreground": "#e6e6fa"
            }
        };
    }
    // Set for high contrast theme if needed
    else {
        themeSpecificSettings = {
            "[TaraMandal High Contrast]": {
                "terminal.background": "#000000",
                "terminal.foreground": "#ffffff"
            }
        };
    }
    
    // Merge with existing settings, preserving user customizations
    const newCustomizations = { ...colorCustomizations, ...themeSpecificSettings };
    config.update('workbench.colorCustomizations', newCustomizations, vscode.ConfigurationTarget.Global);
    
    // Set minimum contrast ratio to ensure colors are visible
    config.update('terminal.integrated.minimumContrastRatio', 1, vscode.ConfigurationTarget.Global);
}

function restoreOriginalColors() {
    console.log('Restoring original terminal colors');
    const config = vscode.workspace.getConfiguration();
    
    // Remove our theme-specific terminal settings but keep other customizations
    const currentCustomizations = config.get('workbench.colorCustomizations') || {};
    const cleanedCustomizations = { ...currentCustomizations };
    
    // Remove our theme-specific settings
    if (cleanedCustomizations['[TaraMandal]']) {
        delete cleanedCustomizations['[TaraMandal]'];
    }
    if (cleanedCustomizations['[TaraMandal Light Cream]']) {
        delete cleanedCustomizations['[TaraMandal Light Cream]'];
    }
    if (cleanedCustomizations['[TaraMandal High Contrast]']) {
        delete cleanedCustomizations['[TaraMandal High Contrast]'];
    }
    
    // Update with cleaned settings
    config.update('workbench.colorCustomizations', cleanedCustomizations, vscode.ConfigurationTarget.Global);
}

function deactivate() {
    // When extension is deactivated, restore original terminal colors
    restoreOriginalColors();
}

module.exports = { activate, deactivate };