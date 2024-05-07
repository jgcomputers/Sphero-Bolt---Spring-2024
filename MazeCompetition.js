// Programmer: Jordan Gibbs
// Team Member: Aren Gay
// Bolt ID: B0D0
// Date: 4.30.2024
// Program: Maze Competition
// Program URL: https://edu.sphero.com/program/16788352/edit

async function startProgram() {
	// Programmer: Aren Gay - Start Text & Audio Commit - Date: 4.30.24
	await scrollMatrixText ("program started", {r: 66, g: 56, b: 255}, 30, true)
	await speak("program started", true);



	//Programmer: Aren Gay  - Blue LED Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() + 0), 68, 2.3);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 255 });

	//Programmer: Aren Gay    - Sound One Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() + 90), 70, 1.6);
	await Sound.Animal.Alligator.play(true);


	//Programmer: Jordan Gibbs         - Red LED Checkpoint Commit - Date: 5.2.2024
	await roll((getHeading() + 90), 60, 1.3);
	await delay(1);
	await roll((getHeading() + 33), 60, 1.2);
	setMainLed({ r: 255, g: 0, b: 0 });

	//Programmer: Aren Gay    - Sound Two Checkpoint Commit - Date: 5.2.2024
	await roll((getHeading() + 270), 60, 0.9);
	await delay(1);
	await roll((getHeading() + 270), 60, 1.5);
	await Sound.Animal.Lion.play(true);



	//Programmer: Jordan Gibbs - Green LED Checkpoint Commit - Date: 5.3
	await roll((getHeading() + 90), 60, .6);
	await roll((getHeading() + 33), 60, 1);
	await delay(1);
	await roll((getHeading() - 65), 60, .8);
	setMainLed({ r: 0, g: 255, b: 0 });

	//Programmer:   Aren Gay    - Purple LED & Sound Three Checkpoint Commit - Date:5.7
	await roll((getHeading() + 270), 60, 1.3);
	await delay(1);
	await roll((getHeading() - 55), 60, 1.2);
	await Sound.Animal.Bear.play(true);
	setMainLed({ r: 255, g: 0, b: 255 });

	//Programmer: Jordan Gibbs          - Finish Text & Audio Commit - Date:qwwsdeseee
	await roll((getHeading() + 55), 60, 1.5);
	await scrollMatrixText ("program ended", {r: 66, g: 56, b: 255}, 30, true)
	await speak("program started", true);


}