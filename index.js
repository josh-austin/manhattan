var manhattan = require('./manhattan.js');

var userArgs = process.argv.slice(2);
if (userArgs.length > 0) {
  manhattan.parseFiles(userArgs);
} else {
  console.log('You have not supplied any files to parse.');
}
