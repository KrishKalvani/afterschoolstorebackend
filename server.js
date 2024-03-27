const express = require('express');
const app = express();


app.use((req,res,next)=>{ //used for the CORS error
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows all domains to access the server 
    res.setHeader("Access-Control-Allow-Origin-Credentials", "true"); //used to tell browsers to expose the response to front-end JavaScript code when credentials are included in requests.
    res.setHeader("Access-Control-Allow-Origin-Methods", "GET,HEAD,OPTIONS,POST,PUT"); //lists the HTTP methods allowed when accessing the resource
    res.setHeader("Access-Control-Allow-Origin-Headers", "Access-Control-Allow-Origin-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    //specifies the headers that can be used when making the actual request
    next();
})

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;


let db;
MongoClient.connect('mongodb+srv://krishKal:lionking@cluster0.hykpngx.mongodb.net', (err, client) => {
    db = client.db('afterSchool');
});

app.get('/lessons', (req, res) => {
    db.collection('lessons').find({}).toArray((err, results) => {
        if (err) {
            console.error('Error fetching lessons:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
