"use strict";

let Robot = function() {
	this.name = null;
	this.weapon = null;
	this.damage = null;
	this.health = null;
};

Robot.prototype.setName = (name) => {
	this.name = name;
};

let Drone = function() {
	this.name = "Drone";
};
Drone.prototype = new Robot();

let Bipedal = function() {
	this.name = "Bipedal";
};
Bipedal.prototype = new Robot();

let ATV = function() {
	this.name = "ATV";
};
ATV.prototype = new Robot();

let DroneOne = function() {
	this.name = "DroneOne";
	this.weapon = "Math";
	this.character = "aerial";
	this.damage = Math.floor(Math.random() * 10 + 20);
	this.health = Math.floor(Math.random() * 100 + 40);
};

DroneOne.prototype = new Drone();

let DroneTwo = function() {
	this.name = "DroneTwo";
	this.weapon = "Language Arts";
	this.character = "aerial";
	this.damage = Math.floor(Math.random() * 30 + 40);
	this.health = Math.floor(Math.random() * 120 + 30);
};

DroneTwo.prototype = new Drone();

let BipedalOne = function() {
	this.name = "BipedalOne";
	this.weapon = "Chemistry";
	this.character = "ground";
	this.damage = Math.floor(Math.random() * 40 + 40);
	this.health = Math.floor(Math.random() * 200 + 10);
};
BipedalOne.prototype = new Bipedal();

let BipedalTwo = function() {
	this.name = "BipedalTwo";
	this.weapon = "Physics";
	this.character ="ground";
	this.damage = Math.floor(Math.random() * 30 + 40);
	this.health = Math.floor(Math.random() * 100 + 60);
};

BipedalTwo.prototype = new Bipedal();

let ATVOne = function() {
	this.name = "ATV01";
	this.weapon = "History";
	this.character = "ground";
	this.damage = Math.floor(Math.random() * 30 + 10);
	this.health = Math.floor(Math.random() * 100 + 40);
};
ATVOne.prototype = new ATV();

let ATVTwo = function() {
	this.name = "ATVTwo";
	this.weapon = "Arts";
	this.character = "ground";
	this.damage = Math.floor(Math.random() * 50 + 40);
	this.health = Math.floor(Math.random() * 110 + 40);
};
ATVTwo.prototype = new ATV();

module.exports = {Robot, DroneOne, DroneTwo, BipedalOne, BipedalTwo, ATVOne, ATVTwo};




























