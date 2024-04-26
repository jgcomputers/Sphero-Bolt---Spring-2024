// Programmer: Jordan Gibbs
// Team Member: Aren Gay
// Bolt ID: B0D0
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752492/edit

async function startProgram() {
	await roll((getHeading() + 0), 60, 1.8);
	await delay(1);

	await roll((getHeading() + 90), 10, 2);
	await delay(1);

	await roll((getHeading() + 0), 50,1.4);
	await delay(1);

	await roll((getHeading() + 270), 10,2);
	await delay(1);

	await roll((getHeading() + 0), 50,1.2);
	await delay(1);

	//Aren CheckPoint 4 - PC 2 - Added color Change
	setMainLed({ r: 0, g: 200, b: 30});
	await roll((getHeading() + 270), 10, 2);
	await delay(1);
	await roll((getHeading() + 0), 60,1.4);
	await delay(1);

}

