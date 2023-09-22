# TSX restart bug

Repo to reproduce bug: https://github.com/esbuild-kit/tsx/issues/221

```bash
npm install
```

For each test scenario, run the watch script and then modify a node_module (`touch node_modules/pad-left/index.js`)

```bash
# Test 1 - WORKS - The top-level file imports services/worker/index.js which imports `pad-left` 
# cwd === root folder
npx tsx watch --clear-screen=false top-level.js

# Test 2 - WORKS - Runs the services/worker/index.js directly from the root directory 
# cwd === root folder
npx tsx watch --clear-screen=false services/worker/index.js

# Test 3 - BROKEN - Watches the same file as the previous test, but from a different working directory 
# cwd === services/worker
cd services/worker && npx tsx watch --clear-screen=false index.js
```

**Synopsis:** TSX (chokadir) is not ignoring node_modules located outside of the current working directory.
