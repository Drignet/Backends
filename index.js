const express = require('express');
const mongoose = require('mongoose');
const personalContcts = require('./routes/contacts.route.js')


const app = express();
const port = 3000;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/contacts', personalContcts)

mongoose.connect("mongodb+srv://Drignet:Maduka1986@contactcluster.hhzed.mongodb.net/CONTACTS?retryWrites=true&w=majority&appName=contactCluster")
.then(() => {
  console.log("Successfully connected to Database")
  app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
}).catch((err) => {
  console.error(`Failed to connect to Database : ${err}`)
})

