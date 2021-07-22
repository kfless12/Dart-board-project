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
	test("Player1 should accept an object as thrown dart", () => {
		expect(player1.throwDart({ 25: 2 }));
	});
	test("Player1 should fail if the format is not correct", () => {
		expect(() => player1.throwDart("error")).toThrow("input is invalid");
	});
	test("Player1 should have thrown a dart", () => {
		expect(player1.getPrevDart()).toStrictEqual({ 25: 2 });
	});
});
