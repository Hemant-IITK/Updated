const express = require('express');
const app = express();

// The React App is in Build Folder
app.use(express.static(__dirname + '/build'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(process.env.PORT || 3000,() => {
    console.log('App is Listening to ' + process.env.PORT || 3000);
})