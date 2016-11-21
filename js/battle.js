"use strict";

let $ = require("jquery");
let robot = require("./robotInfo");
let pickOne;
let pickTwo;
let robotNameOne;
let robotNameTwo;
let robotHealthOne;
let robotHealthTwo;
let $robot1 = $("#robot1");
let $robot2 = $("#robot2");




$("#card").show();

let robotBattle = (pickOne, pickTwo) => {
	Object.create(pickOne).health -= Math.ceil(pickTwo[0].damage * Math.random());
	Object.create(pickTwo).health -=Math.ceil(pickOne[0].damage * Math.random());

	outputDom();
};

function outputDom() {

}




module.exports = {robotBattle};























