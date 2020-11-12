// use require method to load fs -> file system
var fs = require('fs')

fs.readFile('./test.txt',function(error,data){
	// byte array
	console.log(data)
	console.log(data.toString())
})
