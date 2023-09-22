# TSX restart bug

```bash
npm install
npm start # this runs `tsx watch` on the services/worker directory

touch node_modules/pad-left/index.js
# notice TSX restarted when a node_module changed
```

TSX is supposed to ignore node_modules by default. However, in a monorepo node_modules of child packages are being watched by TSX (possibly because the `realpath` of the dependency is outside of CWD for the TSX process??).
