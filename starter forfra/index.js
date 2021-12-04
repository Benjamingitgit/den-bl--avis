// her siger vi at der skal bruges express
const express = require('express');
//app er express()
const app = express();
//definerer porten til localhost og postman.
// Vi sætter også en console.log, så vi kan se om serveren/porten virker som den skal
const port = 2;
app.listen(port, ()=> console.log(`Vi online på: ${port}`));   
sds