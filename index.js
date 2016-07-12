var gamePrompt = require('game-prompt');
var assistOffer = '"How can we assist you?" \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave';
var whereToMessage = '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)';

// Global veriables
var playerName;
var vehicleName;
var planets = {
	a: 10,
	m: 20,
	l: 50,
	k: 120,
	a: 25,
	c: 200,
	s: 400,
	g: 85,
};
var gallonsOfFuel = 1000;
var artifactCollection = [];

function startGame() {
	gamePrompt('S.R.S.V. Press ENTER to start.', intro);
}

function intro() {
	gamePrompt(['You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets. Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.',
		'A voice speaks over the intercom.'], collectInfo);
}

function collectInfo() {
	gamePrompt([
		'"Please state your name for identity verification."'
		], collectName);
}

function collectName(name) {
	playerName = name;

	// if (playerName = '') {
	// 	gamePrompt('"You must type your name."', collectInfo);
	// } else {
	// 	gamePrompt([
	// 		'"Thank you, Captain ' + playerName + ' ."',
	// 		'"Please state your vehicle name for identity verification."'
	// 	], collectVehicleName);
	// }

	gamePrompt([
		'"Thank you, Captain ' + playerName + '."',
		'"Please state your vehicle name for identity verification."'
	], collectVehicleName);
}

function collectVehicleName(name) {
	vehicleName = name;

	gamePrompt([
			'"Thank you, Captain ' + playerName + '."',
			'"' + vehicleName + ' has 1000 gallons of fuel.',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'
		], selectDestination);
}

function selectDestination(planet) {
	planetName = planet;

	var flyingMessage = 'Flying to ';
	var fuelMessage = 'You have ';
	var travelFunction;

	if (planet === 'e') {
		flyingMessage = flyingMessage + 'Earth';
		travelFunction = travelToEarth;
		gallonsOfFuel = gallonsOfFuel - 10;
	} else if (planet === 'm') {
		flyingMessage = flyingMessage + 'Mesnides';
		travelFunction = travelToMesnides;
		gallonsOfFuel = gallonsOfFuel - 20;
	} else if (planet === 'l') {
		flyingMessage = flyingMessage + 'Laplides';
		travelFunction = travelToLaplides;
		gallonsOfFuel = gallonsOfFuel - 50;
	} else if (planet === 'k') {
		flyingMessage = flyingMessage + 'Kiyturn';
		travelFunction = travelToKiyturn;
		gallonsOfFuel = gallonsOfFuel - 120;
	} else if (planet === 'a') {
		flyingMessage = flyingMessage + 'Aenides';
		travelFunction = travelToAenides;
		gallonsOfFuel = gallonsOfFuel - 25;
	} else if (planet === 'c') {
		flyingMessage = flyingMessage + 'Cramuthea';
		travelFunction = travelToCramuthea;
		gallonsOfFuel = gallonsOfFuel - 200;
	} else if (planet === 's') {
		flyingMessage = flyingMessage + 'Smeon T9Q';
		travelFunction = travelToSmeon;
		gallonsOfFuel = gallonsOfFuel - 400;
	} else if (planet === 'g') {
		flyingMessage = flyingMessage + 'Gleshan 7Z9';
		travelFunction = travelToGleshan;
		gallonsOfFuel = gallonsOfFuel - 85;
	} else {
		gamePrompt(
			'You must choose the first letter of the planet name in order to select a destination', selectDestination);
	}

	fuelMessage = fuelMessage + gallonsOfFuel + ' gallons of fuel remaining.';
	gamePrompt([flyingMessage, fuelMessage], travelFunction);
}

// travelTo functions
function travelToEarth() {}

function travelToMesnides() {
	gamePrompt(
		["You've arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.",
		"Welcome, traveler, to Mesnides.",
		assistOffer
		], selectActionMesnides)
}

function travelToLaplides() {
	gamePrompt(
		["You enter orbit around Laplides. Looking down at the planet, you see signs of atomic war and realize there is no option but to turn around.",
		'"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination)
}

function travelToKiyturn() {
	gamePrompt(
		["You've arrived at Kiyturn. At first, it is difficult to find a representative of the Kiyturn people. They are a shy people.",
		"At last, you find one of the more curious Kiyturns, who is somewhat willing to answer your questions.",
		'"Hello, what brings you to Kiyturn? You are not here to cause trouble are you?" \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave'
		], selectActionKiyturn)
}

function travelToAenides() {
	gamePrompt(
		["You discover upon arrival to Aenides that they are a hostile people. You attempt to land, but they begin to fire upon your S.R.S.V. and you are forced to retreat.",
		'"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination)
}

function travelToCramuthea() {
	gallonsOfFuel = gallonsOfFuel + 500;
	gamePrompt(
		['You now have ' + gallonsOfFuel + ' gallons of fuel.',
		"Cramuthea has been abandoned due to global environmental disaster, but there are remnants of the people that left. You are able to refuel your ship (+500 gallons) and read a beacon signal that tells you the Cramuthean people have migrated to Smeon T9Q.",
		'"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination)
}

function travelToSmeon() {
	gallonsOfFuel = gallonsOfFuel + 100;
	gamePrompt(
		['You now have ' + gallonsOfFuel + ' gallons of fuel.',
		"The Cramuthean people, living on Smeon T9Q, are a friendly people that give you some fuel (+100 gallons) when you arrive.",
		assistOffer
		], selectActionSmeon)
}

function travelToGleshan() {
	gamePrompt(
		["You've arrived at Gleshan 7Z9. As you land, a representative of the Gleshan people is there to greet you.",
		"Welcome, traveler, to Gleshan 7Z9.",
		assistOffer
		], selectActionGleshan)
}
// END travelTo functions

// selectAction functions
function selectActionEarth(action) {
	if (action === 'a') {
		gamePrompt(
			['The Mesnidian says, "Here, take this Myoin Horn, an ancient Mesnidian instrument."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Mesnidian says, "Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Mesnides. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}

function selectActionMesnides(action) {
	if (action === 'a') {
		artifactCollection.push('Myoin Horn');
		gamePrompt(
			['The Mesnidian says, "Here, take this Myoin Horn, an ancient Mesnidian instrument."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Mesnidian says, "Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Mesnides. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}

function selectActionLaplides(action) {
	if (action === 'a') {
		gamePrompt(
			['The Kiyturn says, "Here, take this Myoin Horn, an ancient Kiyturn instrument."',
			assistOffer], selectActionLaplides);
	} else if (action === 'p') {
		gamePrompt(
			['The Kiyturn says, "I am sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."',
			assistOffer], selectActionLaplides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Mesnides. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionLaplides);
	}
}

function selectActionKiyturn(action) {
	if (action === 'a') {
		artifactCollection.push('Kiyturn Glass Bowl');
		gamePrompt(
			['The Kiyturn says, "Here, take this Kiyturn Glass Bowl, a symbol of our civilization."',
			assistOffer], selectActionKiyturn);
	} else if (action === 'p') {
		gamePrompt(
			['The Kiyturn says, "I am sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."',
			assistOffer], selectActionKiyturn);
	} else if (action === 'l') {
		gamePrompt(
			['Farewell, strange visitor to Kiyturn.',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionKiyturn);
	}
}

function selectActionAenides(action) {
	if (action === 'a') {
		gamePrompt(
			['The Mesnidian says, "Here, take this Myoin Horn, an ancient Mesnidian instrument."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Mesnidian says, "Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Mesnides. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}

function selectActionCramuthea(action) {
	if (action === 'a') {
		gamePrompt(
			['The Mesnidian says, "Here, take this Myoin Horn, an ancient Mesnidian instrument."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Mesnidian says, "Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Mesnides. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}

function selectActionSmeon(action) {
	if (action === 'a') {
		artifactCollection.push('Cramun Flower');
		gamePrompt(
			['The Cramuthean says, "Here, take this dried Cramun Flower, a symbol of our once great civilization."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Cramuthean says, "Well, the people of Aenides once tried to take over our home planet by force. You would do well to avoid it on your journey."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Smeon T9Q. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}

function selectActionGleshan(action) {
	if (action === 'a') {
		gamePrompt(
			['The Gleshanian says, "We are but a poor people with little resources to spare to outsiders. We hope you understand our predicament."',
			assistOffer], selectActionMesnides);
	} else if (action === 'p') {
		gamePrompt(
			['The Gleshanian says, "The people of Cramuthea once visited us. They were quite wealthy and helpful. Surely if you visit their world you would find them to be hospitable and generous."',
			assistOffer], selectActionMesnides);
	} else if (action === 'l') {
		gamePrompt(
			['Thank you for visiting Gleshan 7Z9. We hope you will come by again',
			'"So! ' + '"Where to, Captain ' + playerName + '?" \n(E)arth (10 lightyears) \n(M)esnides (20 lightyears) \n(L)aplides (50 lightyears) \n(K)iyturn (120 lightyears) \n(A)enides (25 lightyears) \n(C)ramuthea (200 lightyears) \n(S)meon T9Q (400 lightyears) \n(G)leshan 7Z9 (85 lightyears)'], selectDestination);
	} else {
		gamePrompt(
			'"You must select one of these three actions." \nAsk about (A)rtifact \nAsk about other (P)lanets \n(L)eave', selectActionMesnides);
	}
}
// END selectAction functions


startGame();