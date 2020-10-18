const mongoose = require('mongoose');

function mongoConnection(mongodb_uri) {
	mongoose
		.connect(mongodb_uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
	
		})
		.then(() => console.log('Database connected on => ' + mongodb_uri))
		.catch(error => console.log('ERROR DATABASE ===> ', error, ' <=== ERROR DATABASE'));

	mongoose.connection.once('open', () => {
		console.log('MaterazziDB is on the House');
	
	});
}

module.exports = mongoConnection;
