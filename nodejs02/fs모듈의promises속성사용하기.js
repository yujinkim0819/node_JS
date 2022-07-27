const fs = require('fs').promises
fs.readFile('./sam.txt')
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.log(err);
});