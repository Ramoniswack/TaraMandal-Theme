#!/bin/bash

# Install the required dependencies
npm install vscode@^1.1.37 --no-save

# Link the extension for development
echo "Installing and linking the TaraMandal theme extension..."
code --install-extension .

# Apply terminal settings
echo "Applying terminal settings..."
mkdir -p ~/.vscode/
cat > ~/.vscode/settings.json << EOL
{
    "workbench.colorCustomizations": {
        "terminal.background": "#FAF5ED",
        "terminal.foreground": "#2D2D5F"
    },
    "terminal.integrated.minimumContrastRatio": 1,
    "terminal.integrated.persistentSessionReviveProcess": "never"
}
EOL

echo "Installation complete. Please restart VS Code."
