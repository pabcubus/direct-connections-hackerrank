const functions	= require('./functions');

functions.ask('*****************************************\n*                                       *\n*   DIRECT CONNECTIONS (HACKERRANK)     *\n*                                       *\n*****************************************\n\nGive me the name of the file:', (answer) => {
	functions.processFile(answer);
});
