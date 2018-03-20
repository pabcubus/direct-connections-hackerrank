const fs 		= require('fs');
const rl 	= require('readline');

const ask           = (question, callback) => {
	var r = rl.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	r.question(question + '\n', (answer) => {
		r.close();
		callback(answer);
	});
}

const processFile   = (fileName) => {
	if (!fs.existsSync(fileName)) {
		console.log('The file does not exists');
		return;
	}

	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) throw err;

		data = data.split('\n');

		const NUMBER_OF_TESTS 	= data[0];

		for (let t = 0; t < NUMBER_OF_TESTS; t++) {
			const   CITIES 		= data[1 + (t*3)];
			const   COORDINATES	= data[2 + (t*3)].split(' ').map(item => parseInt(item));
			const   CABLES		= data[3 + (t*3)].split(' ').map(item => parseInt(item));
			let	    sum			= 0;

			for (let i = 0; i < (CITIES - 1); i++){
				for (let j = i + 1; j < CITIES; j++){
					let distance 	= COORDINATES[j] > COORDINATES[i] ? COORDINATES[j] - COORDINATES[i] : COORDINATES[i] - COORDINATES[j];
					let kmsMax		= CABLES[j] > CABLES[i] ? CABLES[j] : CABLES[i];
					let kmsCable 	= distance * kmsMax;

					sum += kmsCable;
				}
			}

			console.log(sum % 1000000007);
		}

	});
}

module.exports = {
    'ask' : ask,
    'processFile': processFile
}