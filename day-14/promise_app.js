const fs = require('fs').promises;
fs.readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

fs.writeFile('data.txt', 'Hello from Promises')
  .then(() => console.log('Written'))
  .catch(err => console.error(err));