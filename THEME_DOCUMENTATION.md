# TaraMandal Theme - My Comprehensive Documentation

I've put together this guide to help me (and anyone else who's interested) customize, develop, and publish my TaraMandal VS Code theme.

## Table of Contents

1. [Theme Structure](#theme-structure)
2. [UI Colors Customization](#ui-colors-customization)
3. [Syntax Highlighting Customization](#syntax-highlighting-customization)
4. [Testing My Theme](#testing-your-theme)
5. [Publishing My Theme](#publishing-your-theme)
6. [Maintenance and Updates](#maintenance-and-updates)

## Theme Structure

A VS Code theme consists of several files:

- `package.json`: Extension manifest that defines theme metadata
- `themes/taramandal-color-theme.json`: The main theme file with UI and syntax color definitions
- `.vscode/launch.json`: Configuration for testing your theme in development mode
- `README.md`: Documentation for users
- `.vscodeignore`: Specifies files to exclude when packaging

### package.json

The `package.json` file defines your theme extension:

```json
{
  "name": "taramandal",
  "displayName": "TaraMandal",
  "version": "0.0.1",
  "description": "A cosmic-inspired dark theme for VS Code with stellar accents",
  "engines": {
    "vscode": "^1.70.0"
  },
  "categories": ["Themes"],
  "contributes": {
    "themes": [
      {
        "label": "TaraMandal",
        "uiTheme": "vs-dark",
        "path": "./themes/taramandal-color-theme.json"
      }
    ]
  },
  "keywords": ["theme", "dark theme", "cosmic", "stellar", "space"],
  "license": "MIT"
}
```

Key fields:

- `name`: Your extension's unique identifier (no spaces)
- `displayName`: The name shown in the marketplace
- `contributes.themes`: Defines each theme variant you provide
- `uiTheme`: Can be "vs" (light), "vs-dark" (dark), or "hc-black" (high contrast)

## UI Colors Customization

The `colors` section in your theme file controls the VS Code interface appearance. Here are the main customizable areas:

### Editor

| Property                            | Description                      |
| ----------------------------------- | -------------------------------- |
| `editor.background`                 | Main editor background color     |
| `editor.foreground`                 | Default text color in the editor |
| `editor.selectionBackground`        | Highlighted text background      |
| `editor.lineHighlightBackground`    | Current line highlighting        |
| `editorLineNumber.foreground`       | Line number color                |
| `editorLineNumber.activeForeground` | Current line number color        |
| `editorCursor.foreground`           | Cursor color                     |
| `editorWhitespace.foreground`       | Whitespace characters if shown   |
| `editorIndentGuide.background`      | Indentation guides               |
| `editorBracketMatch.background`     | Matching brackets background     |

### Workbench UI

| Component    | Properties                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------- |
| Activity Bar | `activityBar.background`, `activityBar.foreground`, `activityBarBadge.background`                  |
| Side Bar     | `sideBar.background`, `sideBar.foreground`, `sideBarTitle.foreground`                              |
| Title Bar    | `titleBar.activeBackground`, `titleBar.activeForeground`                                           |
| Status Bar   | `statusBar.background`, `statusBar.foreground`, `statusBar.noFolderBackground`                     |
| Tabs         | `tab.activeBackground`, `tab.activeForeground`, `tab.inactiveBackground`, `tab.inactiveForeground` |
| Panels       | `panel.background`, `panelTitle.activeForeground`, `panelTitle.inactiveForeground`                 |

### Terminal Colors

Terminal colors follow the ANSI color standard:

```json
"terminal.background": "#16162C",
"terminal.foreground": "#E0E0FF",
"terminal.ansiBlack": "#121224",
"terminal.ansiRed": "#FF6D92",
"terminal.ansiGreen": "#A4E8C9",
"terminal.ansiYellow": "#FFEB99",
"terminal.ansiBlue": "#7BE0FF",
"terminal.ansiMagenta": "#D6C5FD",
"terminal.ansiCyan": "#60DBFB",
"terminal.ansiWhite": "#E0E0FF",
```

Each color also has a "Bright" variant (e.g., `terminal.ansiBrightRed`).

### Notifications, Menus, and Other UI Elements

```json
"notificationCenter.border": "#FF6D92",
"notificationToast.border": "#FF6D92",
"notifications.background": "#1A1A2E",
"notifications.foreground": "#E0E0FF",
"menu.background": "#16162C",
"menu.foreground": "#E0E0FF",
"menu.selectionBackground": "#232340",
"menu.selectionForeground": "#E0E0FF",
"quickInput.background": "#16162C",
"quickInput.foreground": "#E0E0FF",
"widget.shadow": "#0A0A14",
"dropdown.background": "#16162C",
"dropdown.foreground": "#E0E0FF",
"input.background": "#16162C",
"input.foreground": "#E0E0FF",
"input.placeholderForeground": "#7A7AAF",
"button.background": "#FF6D92",
"button.foreground": "#FFFFFF",
"button.hoverBackground": "#FF8CA8",
```

## Syntax Highlighting Customization

Syntax highlighting is controlled by the `tokenColors` array. Each entry applies styles to specific code elements:

```json
{
  "name": "Comment",
  "scope": ["comment", "punctuation.definition.comment"],
  "settings": {
    "foreground": "#5F5F87",
    "fontStyle": "italic"
  }
}
```

### Common Token Scopes

| Element     | Scopes                                            |
| ----------- | ------------------------------------------------- |
| Comments    | `comment`, `punctuation.definition.comment`       |
| Strings     | `string`, `string.template`, `string.quoted`      |
| Numbers     | `constant.numeric`, `constant.language.boolean`   |
| Keywords    | `keyword`, `keyword.control`, `storage.modifier`  |
| Functions   | `entity.name.function`, `support.function`        |
| Classes     | `entity.name.class`, `entity.name.type`           |
| Variables   | `variable`, `support.variable`                    |
| Tags        | `entity.name.tag`, `entity.other.attribute-name`  |
| Punctuation | `punctuation.separator`, `punctuation.terminator` |

### Font Styles

You can apply these font styles:

- `"fontStyle": "italic"`
- `"fontStyle": "bold"`
- `"fontStyle": "underline"`
- Combine them: `"fontStyle": "italic bold"`

### Custom Scope Examples

| Language   | Element             | Scope                                |
| ---------- | ------------------- | ------------------------------------ |
| JavaScript | Arrow Function      | `storage.type.function.arrow`        |
| JavaScript | Object Property     | `variable.other.property`            |
| HTML       | Tags                | `entity.name.tag.html`               |
| CSS        | Property Names      | `support.type.property-name.css`     |
| Markdown   | Headings            | `markup.heading`                     |
| Python     | Function Parameters | `variable.parameter.function.python` |

## Testing Your Theme

### Development Preview

1. Press F5 to open a new window with your theme applied
2. In the new window, press `Ctrl+K` then `Ctrl+T` to open the theme picker
3. Select your theme from the list
4. Make edits to your theme file in the original window
5. Use "Developer: Reload Window" in the preview window to see changes

### Finding Token Scopes

To identify which scope applies to specific code:

1. In VS Code, press `Ctrl+Shift+P`
2. Type and select "Developer: Inspect Editor Tokens and Scopes"
3. Click on any code element to see its scopes

### Testing in Different Files

Test your theme with:

- JavaScript/TypeScript (`.js`, `.ts`)
- HTML/CSS (`.html`, `.css`)
- Python (`.py`)
- Markdown (`.md`)
- JSON (`.json`)
- Shell scripts (`.sh`)

### Color Tools

- [Adobe Color](https://color.adobe.com/create/color-wheel) - Create color schemes
- [Coolors](https://coolors.co/) - Generate color palettes
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Test readability

## Publishing Your Theme

### Preparation

1. Ensure your `package.json` has all required fields:

   - `publisher`: Your publisher name (register on marketplace first)
   - `repository`: Link to your GitHub repository
   - `bugs`: Issue tracker URL
   - `homepage`: Documentation URL

2. Create a good README.md with:

   - Screenshots of your theme
   - Features and selling points
   - Installation instructions

3. Create an icon.png (128x128) for your theme

### Publishing Steps

1. Install vsce (VS Code Extension Manager):

   ```bash
   npm install -g vsce
   ```

2. Create a Personal Access Token (PAT) on Azure DevOps:

   - Go to https://dev.azure.com/
   - Sign in with your Microsoft account
   - Create a new organization if needed
   - Go to Personal Access Tokens and create a new token
   - Set the scope to "Marketplace > Manage"

3. Login to the publisher:

   ```bash
   vsce login <publisher-name>
   ```

4. Package your extension:

   ```bash
   vsce package
   ```

   This creates a `.vsix` file.

5. Publish your extension:
   ```bash
   vsce publish
   ```

### Version Updates

When making updates:

1. Update the version in `package.json` (follow semantic versioning)
2. Run `vsce publish` again

## Maintenance and Updates

### Changelog

Keep a CHANGELOG.md file to track changes:

```markdown
# Change Log

## [0.0.1] - 2025-09-09

- Initial release with dark theme variant
```

### Collecting Feedback

- Add issue templates to your GitHub repo
- Monitor marketplace reviews
- Consider adding a feedback link in your README

### Testing Theme Updates

Before publishing updates:

1. Test in VS Code Insiders
2. Check compatibility with latest VS Code features
3. Verify improvements across different file types
4. Test both dark and light variants (if applicable)

### Common Theme Issues to Watch For

- Contrast issues (text difficult to read)
- Inconsistent token coloring
- Missing UI element customizations
- Poor distinction between similar syntax elements

## Additional Resources

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Grammar Scopes](https://macromates.com/manual/en/language_grammars)
- [VS Code Extension API](https://code.visualstudio.com/api)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
