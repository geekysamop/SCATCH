const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.send('some content');
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})