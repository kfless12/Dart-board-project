class Game {
	constructor() {
		this.players = {};
		this.turnCount = 0;
		this.totalDarts = 0;
		this.turnDartsCount = 0;
	}
	setPlayerOrder(players) {
		if (!players.length) {
			throw new Error("no players Registered");
		} else if (this.players.player1) {
			throw new Error("player order already set");
		}
		for (let i = 0; i < players.length; i++) {
			this.players[`player${i + 1}`] = players[i];
		}
		return this.players;
	}
}

module.exports = Game;
