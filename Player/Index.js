class Player {
	constructor(name) {
		this.name = name;
		this.score = 0;
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
}

module.exports = Player;
