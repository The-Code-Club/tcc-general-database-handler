function connection()
{

const { MongoClient } = require('mongodb');
const admin = require('./ADMIN.json')

const uri = `mongodb+srv://${admin.role}:${admin.password}@${admin.cluser_name}.mongodb.net/myFirstDatabase?retryWrites=${admin.retryWrites}&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


}

connection.ex