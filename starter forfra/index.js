// her siger vi at der skal bruges express
const { response } = require('express');
const express = require('express');
//app er express()
const app = express();
//definerer porten til localhost og postman.
// Vi sætter også en console.log, så vi kan se om serveren/porten virker som den skal
const port = 2;
app.listen(port, ()=> console.log(`Vi online på: ${port}`));   

//vi putter lige fs library på.
fs = require('fs');
// sætter lige sti til siderne
const SIDERNE_AF_HTML_MEN_OGSA_JAVASCRIPT = './html pages';
var http = require('http').Server(app);


 
app.use(express.json()); //makes json 

app.get('/', (req,res,next)=>{
    return(
    res.sendFile('./html pages/Front page.html', {root:__dirname}));
});