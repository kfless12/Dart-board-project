const Player = require("../BackEnd/Player/Index.js");
const Game = require("../BackEnd/Game/Game.js");

describe("Testing the game module", () => {
	let player1 = new Player("Kevin");
	let player2 = new Player("Mike");
	let player3 = new Player("John");
	let player4 = new Player("Tim");
	let players = [player1, player2, player3, player4];

	let testGame = new Game();
	test("should not set an order if there are no players in the que", () => {
		expect(() => testGame.setPlayerOrder([])).toThrow("no players Registered");
	});
	let playerOrder = testGame.setPlayerOrder(players);
	test("test player Order", () => {
		expect([
			playerOrder["player1"].name,
			playerOrder["player2"].name,
			playerOrder["player3"].name,
			playerOrder["player4"].name,
		]).toStrictEqual(["Kevin", "Mike", "John", "Tim"]);
	});
	test("should lock in player order if it is already set", () => {
		expect(() => testGame.setPlayerOrder(players)).toThrow(
			"player order already set"
		);
	});
});
