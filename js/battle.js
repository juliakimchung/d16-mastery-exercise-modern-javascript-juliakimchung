"use strict";

let $ = require("jquery");
let robot = require("./robotInfo");
let $robot1 = $("#robot1");
let $robot2 = $("#robot2");
let $output = $("#output");

$("#card").show();

let robotBattle = (pickOne, pickTwo) => {
	console.log("test",robot.DroneOne );
	let test = new robot.DroneOne();
	console.log("test",test );
	console.log("damageTest",test.damage );
	console.log("pickOne", pickOne );
	console.log("pickOne[0]",pickOne[0] );
	
	let toy = robot[pickOne[1]];
	let newToy = new robot[pickOne[1]]();

	console.log("newToy",newToy );
	let anotherToy = new robot[pickTwo[1]]();
	let realDamage1 = newToy.health - anotherToy.damage;
	console.log("newToy.health",newToy.health );
	console.log("newToy.damage",newToy.damage );
	console.log("anotherToy.health",anotherToy.health );
	console.log("anotherToy.damage",anotherToy.damage );
	let realDamage2 = anotherToy.health - newToy.damage;
	console.log("realDamage1", realDamage1);
	console.log("realDamage2", realDamage2 );

if(newToy.damage > anotherToy.damage || anotherToy.damage < 0) {
		$output.html(`<p>${newToy.name} has Won by ${realDamage1} health points</p>` );
	} else if (anotherToy.damage > newToy.damage || newToy.damage <0) {
		$output.html(`<p>${anotherToy.name} has WON
		by ${realDamage2} health points</p>`);
	}

};

module.exports = {robotBattle};























