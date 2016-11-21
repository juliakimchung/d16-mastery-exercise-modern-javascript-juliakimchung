"use strict";
let robotBattle = require("./battle");
let $ = require('jquery');
let robot = require("./robotInfo");

let $robot1 = $("#robot1");
let $robot2 = $("#robot2");
let $attack = $("#attack");
let $typeRobot1 = $("#typeRobot1");
let $typeRobot2 = $("#typeRobot2");
let robotNameOne;
let robotNameTwo;
let robotHealthOne;
let robotHealthTwo;

$attack.click(function(event) {

	if ($robot1.val() !== "" || $typeRobot1.val() !== null || $robot2.val() !== "" || $typeRobot2.val() !== null) {
		
	$("#robotMaker").hide();

	let robot1Name = $robot1.val();
	let robot1Type = $typeRobot1.val();
	let robot2Name = $robot2.val();
	let robot2Type = $typeRobot2.val();

	let pickOne = [robot1Name, robot1Type];
	let pickTwo = [robot2Name, robot2Type];
	

	robotBattle.robotBattle(pickOne, pickTwo);
	}
});

