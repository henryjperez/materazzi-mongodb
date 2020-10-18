const { MongoClient } = require('mongodb');


async function connection(URI = "mongodb://localhost:27017/",) {
	const mongoClient = new MongoClient (URI,{
		useUnifiedTopology: true,
		auto_reconnect: true,
	});
	console.log(mongoClient);
	
	try {
		const p = await mongoClient.connect();
		console.log("funciona!");
		
		const result = await mongoClient.db("test").collection("j").insertOne({q: "perro"});
		//const databasesList = await mongoClient.db().admin().listDatabases();
		console.log(result)
		
	} catch(err) {
		console.log("fail");
		console.error(err);
	} finally {
		mongoClient.close();
	}
}

module.exports = connection;
