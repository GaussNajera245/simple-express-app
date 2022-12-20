const express = require('express');
const cors = require('cors');
const app = express();
const https = require('http').createServer( app );
const PORT=8080;

app.use(cors());

app.get("/", function(req, res){
    res.json({
        title: "Single File upload",
        message: "try a different route",
        switch: {
            'case true':  "console.log('true')",
            'case false': "console.log('false')",
            default:      "console.log('null')"
        }
    })
});

https.listen(PORT, ()=>{
    console.log(`\x1b[1;34m🚀 [${(new Date).toISOString()}]\x1b[0m: Photo-server ready!! ${PORT} 🚀`)
});
