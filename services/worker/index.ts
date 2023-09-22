import 'pad-left';

// Keep the process alive
const timer = setTimeout(() => {}, 99999999);
['SIGINT', 'SIGTERM'].forEach(signal => {
    process.once(signal, () => {
        console.log('Signal received', signal);
        clearTimeout(timer);
    });
});
