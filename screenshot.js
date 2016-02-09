var page = require('webpage').create(),
    system = require('system'),
    t, address;

if(system.args.length === 1){
    console.log('Usage: screenshot.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];

page.open(address, function(status){
    console.log('Status: ' + status);
    if(status === 'success'){
        page.render(encodeURIComponent(address) + '.png');
        t = Date.now() - t;
        console.log('Loading ' + address);
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});
