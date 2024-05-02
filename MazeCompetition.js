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
	await roll((getHeading() + 0), 65, 2.4);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 255 });

	//Programmer:              - Sound One Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() + 90), 70, 1.45);
	await Sound.Animal.Alligator.play(true);


	//Programmer: Jordan Gibbs - Red LED Checkpoint Commit - Date:
	


	//Programmer:          - Sound Two Checkpoint Commit - Date:




	//Programmer:          - Green LED Checkpoint Commit - Date:



	//Programmer:          - Purple LED & Sound Three Checkpoint Commit - Date:



	//Programmer:          - Finish Text & Audio Commit - Date:




}