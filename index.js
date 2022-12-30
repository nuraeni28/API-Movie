const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require('./src/routes/auth.routes');
const port = process.env.PORT_APP || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes);
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
});