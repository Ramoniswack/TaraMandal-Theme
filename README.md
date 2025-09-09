# TaraMandal Theme Collection

Welcome to TaraMandal - a collection of cosmic-inspired VS Code themes with stellar accents.

## Theme Variants

### 🌑 TaraMandal Classic

A deep space-inspired dark theme with stellar accents, designed for comfort during long coding sessions.

### ☀️ TaraMandal Light Cream

A warm, cream-colored light theme that's easy on the eyes with rich syntax highlighting.

### 🌈 TaraMandal Aurora

A vibrant green aurora theme with a starry night sky background. Inspired by the Northern Lights, this theme features emerald greens, teals, and subtle blues against a deep midnight background to create the perfect aurora borealis experience for your coding environment.

### ⚡ TaraMandal High Contrast

An accessibility-focused high contrast theme for maximum readability.

## Features

- **Thoughtful Color Design**: Colors chosen for optimal readability and reduced eye strain
- **Semantic Coloring**: Meaningful color assignments help you parse code faster
- **Beautiful UI Elements**: Cohesive styling across all VS Code interface components
- **Terminal Color Integration**: Proper terminal coloring that matches each theme

## Screenshots

### TaraMandal Aurora

![TaraMandal Aurora Theme Screenshot]

_The TaraMandal Aurora theme features vibrant emerald greens and teals against a starry night sky background, creating an immersive Northern Lights coding experience._

#### Aurora Theme Color Palette

| Element    | Color Sample                                                 | Hex Code | Element    | Color Sample                                                 | Hex Code |
| ---------- | ------------------------------------------------------------ | -------- | ---------- | ------------------------------------------------------------ | -------- |
| Background | ![#030C10](https://via.placeholder.com/15/030C10/030C10.png) | #030C10  | Foreground | ![#E2F3EA](https://via.placeholder.com/15/E2F3EA/E2F3EA.png) | #E2F3EA  |
| Functions  | ![#32F0B3](https://via.placeholder.com/15/32F0B3/32F0B3.png) | #32F0B3  | Keywords   | ![#9EBCFF](https://via.placeholder.com/15/9EBCFF/9EBCFF.png) | #9EBCFF  |
| Variables  | ![#67F0AE](https://via.placeholder.com/15/67F0AE/67F0AE.png) | #67F0AE  | Strings    | ![#85FFB8](https://via.placeholder.com/15/85FFB8/85FFB8.png) | #85FFB8  |
| Numbers    | ![#FFDA9E](https://via.placeholder.com/15/FFDA9E/FFDA9E.png) | #FFDA9E  | Comments   | ![#7B8C84](https://via.placeholder.com/15/7B8C84/7B8C84.png) | #7B8C84  |

[Add more screenshots of your themes here]

## Installation

### VS Code Marketplace

Once I publish my theme, you can install it easily:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "TaraMandal"
4. Click Install
5. Select "TaraMandal" from the theme dropdown (Ctrl+K Ctrl+T or Cmd+K Cmd+T)

### Manual Installation

If you prefer the manual way (like I sometimes do):

1. Download the .vsix file from my [releases page](https://github.com/ram0niswack/taramandal/releases)
2. In VS Code, go to Extensions view
3. Click the "..." menu in the top-right corner
4. Select "Install from VSIX..."
5. Navigate to the downloaded file and install

## Customization

Not happy with some color choices? Feel free to make it your own! Here's how to customize any theme in the `settings.json` file:

```json
"editor.tokenColorCustomizations": {
    "[TaraMandal]": {
        "comments": "#6B7394",
        "functions": "#3399FF",
        "keywords": "#FF3366",
        "strings": "#4AE54A",
        "types": "#9933FF",
        "variables": "#FFFFFF"
    },
    "[TaraMandal Aurora]": {
        "comments": "#7B8C84",
        "functions": "#32F0B3",
        "keywords": "#9EBCFF",
        "strings": "#85FFB8",
        "types": "#57E0C2",
        "variables": "#67F0AE"
    }
}
```

## Recommended Font

I personally love coding with these fonts:

- [Fira Code](https://github.com/tonsky/FiraCode) - my personal favorite
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - super clean and readable
- [Cascadia Code](https://github.com/microsoft/cascadia-code) - great ligatures!

## Contributing

Got ideas to make this theme even better? I'd love to hear them! Check out my [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on how to help.

## License

I'm sharing this under the [MIT License](LICENSE) - feel free to use it however you want!

## More Information

I've put together detailed documentation about customizing and extending these themes:

- General theme documentation: [THEME_DOCUMENTATION.md](docs/THEME_DOCUMENTATION.md)
- Aurora theme special features: [AURORA_THEME_DOCUMENTATION.md](docs/AURORA_THEME_DOCUMENTATION.md)
- Terminal color fixes: [TERMINAL_FIX.md](docs/TERMINAL_FIX.md)
- Changelog: [CHANGELOG.md](docs/CHANGELOG.md)
