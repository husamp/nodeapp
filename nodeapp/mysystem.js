var os = require('os');

var message = 'Here is your system information.';

var sys_array = new Array('Type: ' + os.type(),
						  'Node version: ' + process.version,
                          'Platform: ' + os.platform(),
                          'Hostname: ' + os.hostname(),
                          'Total Memory: ' + os.totalmem(),
                          'Free Memory: ' + os.freemem(),
                          'Uptime: ' + os.uptime()
						);

console.log(message);

var arraylen = sys_array.length;

i = 0;
while(i < arraylen) {
	console.log(sys_array[i]);
	i++;
}