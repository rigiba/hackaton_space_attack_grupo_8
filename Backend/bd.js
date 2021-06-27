const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://adminmongo:5Vv95hmdl0tjlSpK@clusterdatabases.nj2ti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("spaceattack").collection("spaceattack");
  // perform actions on the collection object
  client.close();
});

//5Vv95hmdl0tjlSpK