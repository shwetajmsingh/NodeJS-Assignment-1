const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
    // dont chnage function name
	fs.writeFile("Text.txt", "Text", (err)=>{
		console.log(err);
	});
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile("./Text.txt", "utf-8", (err, data)=>{
		console.log(err);
		console.log(data);
	})

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.appendFile("./Text.txt"," Written", (err)=>{
		console.log(err);
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("./Text.txt", (err)=>{
		console.log(err)
	} )
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }