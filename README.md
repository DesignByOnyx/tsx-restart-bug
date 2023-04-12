# TSX restart bug

```bash
npm install
npm start # this runs `tsx watch` on the services/worker directory

touch packages/utils/index.js
# notice TSX restarted even though we use --ignore **/packages/**

touch node_modules/pad-left/index.js
# notice TSX restarted when a node_module changed
```

TSX is supposed to ignore node_modules by default. However, in a monorepo local packages are being watched by TSX (possibly because the `realpath` of the dependency is outside of node_modules). Adding `--ignore **/packages/**` does not work either. While troubleshooting this bug, it appears as though TSX is neither ignoring node_modules or respecting any `--ignore` flags.
