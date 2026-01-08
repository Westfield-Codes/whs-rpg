class Location {
	static lastIndex = 0;
	constructor() {
		this.index = lastIndex + 1;
		this.locName = locName;
		this.coords = coords;
		// this.actions = actions;
		// this.text = text;
		// this.npcs = npcs;
		// this.dialogue = dialogue
		// this.getCurrentCoords = this.getCurrentCoords.bind(this);
  	}
  getCurrentName(){
	return this.locName;
  }
}
/* Store locations constructor and all locations objects here */
const coords = [0,0];

function goStore() {
    update(locations[1]);
}

function goTown() {
    update(locations[0]);
}

function goCave() {
    update(locations[2]);
}

const locations = [
	{
		index: 1,
	 	locName: "Main Entrance",
		coords: [0,0],
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: "You are in the main entrance. You've just been let into the school when the receptionist tells you: \n \"We need your help, and quickly too.\" "
	},
	{
		index: 2,
	 	locName: "Front Office",
		coords: [0,1],
		"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		"button functions": [buyHealth, player.buyWeapon, goTown],
		text: "The receptionist's stare, waiting for you to do something."
	},
	{
		index: 5,
	 	locName: "Stairwell",
		coords: [1,0],
		"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You enter the stairwell, the lights have been cut off and you hear terrible, monstrous groans."
	},
	{
		index: 2,
	 	locName: "Library",
		coords: [1,1],
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You're attacked as you enter the library."
	},
	{
		index: 3,
	 	locName: "Gymnasium",
		"button text": ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, easterEgg],
		text: 'The dragon has made the gym it\'s new home, are you ready to cast it away?'
	},
	{
		index: 4,
	 	locName: "Admin Office",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "The dragon exiles you to the principal's office, good luck explaining your way out of this one... you lose. 💀"
	},
	{
		index: 6,
	 	locName: "Guidance Office",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You defeated the dragon and saved the school! YOU WIN THE GAME! 🎉"
	},
	{
		index: 7,
	 	locName: "Nurse's Office",
		"button text": ["2", "8", "Go to town square?"],
		"button functions": [pickTwo, pickEight, goTown],
		text: "As you enter the nurse's office you that the nurse's are playing a secret game. They invite you to join: \n \"Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!\""
	}
	]

