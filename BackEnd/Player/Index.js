let Node = require("../Utilities/NodeList.js");
class Player {
	constructor(name) {
		this.name = name;
		this.score = 0;
		this.dartsThrown = 0;
		this.prevThrow = new Node(null);
	}
	playerName() {
		return this.name;
	}
	playerScore() {
		return this.score;
	}
	addScore(value) {
		this.score += value;
	}
	throwDart(value) {
		let tempNode = new Node(value);
		tempNode.prev = this.prevThrow;
		this.prevThrow = tempNode;
		this.dartsThrown += 1;
	}
	getPrevDart() {
		if (this.prevThrow) {
			return this.prevThrow.value;
		} else {
			return "no darts thrown";
		}
	}
}

module.exports = Player;
