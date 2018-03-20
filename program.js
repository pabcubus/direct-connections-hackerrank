const functions	= require('./functions');

functions.ask('Give me the name of the file:', (answer) => {
	functions.processFile(answer);
});