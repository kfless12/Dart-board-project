class Node {
	constructor(value) {
		if (typeof value === "object") {
			this.value = value;
			this.prev = null;
		} else {
			throw new Error("input is invalid");
		}
	}
	getPrev() {
		return this.prev;
	}
}

module.exports = Node;
