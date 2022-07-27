module.exports = {
	branch: "stable",
	contents: 'dist',
    cleanup: true, // Cleanup node_modules
    tests: true, // Run npm test
    yolo: false, // Skip cleanup and tests
    publish: true, // Publish to npm
    tag: "latest", // NPM tag of the published version
    yarn: true, // Use Yarn if possible
    contents: ".", // Subdirectory to publish to
    releaseDraft: true, // Open Github relase draft after relasing
    "2fa": false, // Enable 2FA on new packages
    message: true, // The commit message used for the relase (%s will be replaced with the version (v%s for yarn use))
    contents: true,
};