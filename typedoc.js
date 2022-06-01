module.exports = {
    out: './docs',
    exclude: [
        '**/node_modules/**/*',
    ],
    excludeExternals: true,
    excludePrivate: true,
    plugin: "typedoc-plugin-markdown"
};