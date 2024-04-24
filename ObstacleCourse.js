// Programmer: Jordan Gibbs
// Team Member: Aren Gay
// Bolt ID: B0D0
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752492/edit

async function startProgram() {
	await roll((getHeading() + 0), 60, 1.9);
	await delay(1);
}