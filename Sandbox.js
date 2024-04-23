// Programmer: Jordan Gibbs
// Team Member: Aren Gay
// Bolt ID: B0D0
// Date: 4.16.2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700416/edit

/*
async function startProgram() { 
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/

/*
async function startProgram() {
	setMainLed({ r: 255, g: 255, b: 255 });
	await speak("Ima eat you", true);
	await delay(1);
	for (var Square = 0; Square < 4; Square++) {
		setMainLed(getRandomColor());
		await Sound.Menu.Loading.play(true);
		await roll((getHeading() + 90), 40, 2);
		await delay(1);
	}
}
*/

async function startProgram() {
	await roll(0, 60, 2)
	await roll(20, 10, 3)
	stopRoll()

}