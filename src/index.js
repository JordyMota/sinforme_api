const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const publicDir = require('path').join(__dirname,'/../assets');

const app = express();
const server = require('http').Server(app);

mongoose.connect(
"mongodb://admin:xZtlko123@ds129233.mlab.com:29233/sinforme_teste",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		retryWrites: false,
	}
);

// app.use((req, res, next)=> {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((req, res, next)=>{
	return next();
});

app.use(cors());
app.use(express.json());
app.use(express.static(publicDir)); 
app.use(require('./routes'));

server.listen(3000,()=> {
	console.log('Server Started');
});