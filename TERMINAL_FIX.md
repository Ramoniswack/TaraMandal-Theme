# TaraMandal Terminal Fix Guide

If you're experiencing issues with the terminal background color not matching the theme (showing black background), here are several solutions:

## Solution 1: Use the Extension's Built-In Terminal Fix

Our extension includes code to fix the terminal colors automatically. After installing the theme:

1. Make sure to restart VS Code completely
2. If using the "TaraMandal Light Cream" theme, the terminal should use a cream background

## Solution 2: Manual Settings Override

If Solution 1 doesn't work, you can manually override the terminal colors:

1. Open VS Code Settings (Ctrl+,)
2. Search for "terminal background"
3. Click "Edit in settings.json"
4. Add these lines:

```json
"workbench.colorCustomizations": {
    "terminal.background": "#FAF5ED",
    "terminal.foreground": "#2D2D5F"
}
```

## Solution 3: Use the Installation Script

We've included an installation script that will set up everything correctly:

1. Open a terminal in the extension folder
2. Run: `chmod +x install.sh && ./install.sh`
3. Restart VS Code

## Solution 4: Install in Development Mode

To use the theme in development mode with all fixes applied:

1. Press F5 to launch a new VS Code window with the extension loaded
2. In the new window, select the TaraMandal Light Cream theme
3. Open a terminal to verify the background color

## Why Does This Happen?

VS Code's integrated terminal has its own configuration system that can sometimes override theme settings. This is a known issue with VS Code themes, where terminal colors may not fully apply from the theme file.
