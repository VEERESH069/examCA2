const express = require('express');
const app = express();
const router = require('./Controllers/user')
const port = 3000; // mentioned in question not to create .env file

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',router);

const users = [{
    email:"veer@gmail.com",
    password:"password",
},
{email:"mm@gmail.com",
    password:"asdfghjk",
}]
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})


module.exports = users;