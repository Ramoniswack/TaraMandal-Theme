# Publishing My TaraMandal Theme

I've created this document as a reminder to myself about the steps needed to publish my VS Code theme to the Visual Studio Code Marketplace.

## Prerequisites I'll Need

1. My Microsoft account
2. An Azure DevOps organization
3. A Personal Access Token (PAT) with "Marketplace > Manage" scope - I'll need to create this

## Installation Steps

1. Install the VS Code Extension Manager (vsce):
   ```bash
   npm install -g vsce
   ```

## Publishing Process

### 1. Create a Publisher

If you don't have a publisher account yet:

1. Go to https://marketplace.visualstudio.com/manage
2. Sign in with your Microsoft account
3. Create a publisher

### 2. Get a Personal Access Token (PAT)

1. Go to https://dev.azure.com/
2. Sign in with your Microsoft account
3. Click on your profile picture in the top-right corner
4. Select "Personal access tokens"
5. Click "New Token"
6. Name your token (e.g., "vsce-publishing")
7. Set the organization to "All accessible organizations"
8. Under "Scopes," select "Custom defined" and then check "Marketplace > Manage"
9. Click "Create" and copy the token (you'll only see it once)

### 3. Login to vsce

```bash
vsce login [your-publisher-name]
```

When prompted, paste your Personal Access Token.

### 4. Package Your Extension

```bash
cd /home/ram0niswack/RootProjects/Nebula-Ink
vsce package
```

This will create a `.vsix` file in your directory.

### 5. Test Your Package

Before publishing, you can test your packaged extension:

1. In VS Code, go to the Extensions view (Ctrl+Shift+X)
2. Click the "..." menu in the top-right corner
3. Select "Install from VSIX..."
4. Navigate to your `.vsix` file and install it
5. Verify that your theme works correctly

### 6. Publish Your Extension

```bash
vsce publish
```

If this is your first version, use:

```bash
vsce publish -p [your-personal-access-token]
```

## Updating Your Extension

1. Update the version number in `package.json`
2. Make your changes
3. Run `vsce publish` again

## Managing Your Extension

You can manage your published extension at:
https://marketplace.visualstudio.com/manage

From there, you can:

- View download statistics
- Update extension details
- Unpublish if needed
- Respond to reviews

## Troubleshooting

If you encounter issues while publishing:

1. Make sure your `package.json` has all required fields
2. Check that your PAT hasn't expired
3. Verify you're using the correct publisher name
4. Check the vsce documentation for more help: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
