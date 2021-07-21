const Player = require("../Player/Index.js");

describe("Testing the Player Method of", () => {
	let player1 = new Player("Player1");
	test("Should create a player with name player1", () => {
		expect(player1.playerName()).toBe("Player1");
	});
	test("Player1 should start with a score of 0", () => {
		expect(player1.playerScore()).toBe(0);
	});
	test("Player1 should take in scores and add them together", () => {
		player1.addScore(15);
		player1.addScore(5);

		expect(player1.playerScore()).toBe(20);
	});
});
