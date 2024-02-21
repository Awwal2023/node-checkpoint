const fs = require('fs');

// Write to a file
fs.writeFile('welcome.txt', 'Hello Node!!!😊', (err) => {
    if (err) throw err;
    console.log('File created successfully');
});

