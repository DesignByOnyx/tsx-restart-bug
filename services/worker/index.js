import 'pad-left';

// Keep the process alive
const timer = setTimeout(() => {}, 99999999);
['SIGINT', 'SIGTERM'].forEach(signal => {
    process.once(signal, () => {
        console.log('Signal received', signal);
        clearTimeout(timer);
    });
});

console.log('Program started... please modify a node_module (touch node_modules/pad-left/index.js).')
