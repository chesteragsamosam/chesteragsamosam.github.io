export class TicTacToe {
	constructor(board = "         ", player = "X") {
		this.board = board;
		this.player = player;
	}
	generateChildren() {
		const children = [];
		const arrBoard = this.board.split("");
		if (this.isTerminate()) return children;
		for (let i = 0; i < 9; i++) {
			if (arrBoard[i] === " ") {
				const newBoard = arrBoard.slice();
				newBoard[i] = this.player;
				children.push(
					new TicTacToe(newBoard.join(""), this.player === "X" ? "O" : "X")
				);
			}
		}
		return children;
	}
	getOutcome() {
		const currentBoard = this.board.split("");
		for (let y = 0; y < 9; y += 3) {
			if (
				currentBoard[y] != " " &&
				currentBoard[y] === currentBoard[y + 1] &&
				currentBoard[y] === currentBoard[y + 2]
			) {
				return currentBoard[y];
			}
		}
		for (let x = 0; x < 3; x++) {
			if (
				currentBoard[x] != " " &&
				currentBoard[x] === currentBoard[x + 3] &&
				currentBoard[x] === currentBoard[x + 6]
			) {
				return currentBoard[x];
			}
		}
		if (
			currentBoard[0] != " " &&
			currentBoard[0] === currentBoard[4] &&
			currentBoard[0] === currentBoard[8]
		)
			return currentBoard[0];
		if (
			currentBoard[2] != " " &&
			currentBoard[2] === currentBoard[4] &&
			currentBoard[2] === currentBoard[6]
		)
			return currentBoard[2];
		if (currentBoard.indexOf(" ") === -1) return "draw";
		return "unfinished";
	}
	isTerminate() {
		return ["draw", "X", "O"].includes(this.getOutcome());
	}
	getScore(player) {
		if (this.isTerminate()) return this.getOutcome() === player ? 1 : 0;
		const children = this.generateChildren();
		let score = 0;
		for (let child of children) {
			if (child.getOutcome() !== player) score += child.getScore(player);
		}
		return score;
	}
	getScore(player) {
		if (this.isTerminate()) return this.getOutcome() === player ? 1 : 0;
		const children = this.generateChildren();
		let score = 0;
		for (let child of children) {
			if (child.getOutcome() !== player) score += child.getScore(player);
		}
		return score;
	}
	getBestChild(player) {
		const children = this.generateChildren();
		let score = -Infinity;
		let bestScore = -Infinity;
		let bestChild = null;
		for (let child of children) {
			score = child.getScore();
			if (score > bestScore) {
				bestScore = score;
				bestChild = child;
			}
		}
		return bestChild;
	}
}

// let newBoard = new TicTacToe()
// console.log(newBoard)
// console.log('generateChildren', newBoard.generateChildren())
// console.log('getOutcome', newBoard.getOutcome())
// console.log('board', newBoard.board)
// console.log(newBoard.isTerminate())

// const drawboard = new TicTacToe('XOXXXO O ')
// console.log('generateChildren', drawboard.generateChildren())
// console.log('getOutcome', drawboard.getOutcome())
// console.log('board', drawboard.board)
// console.log(drawboard.isTerminate())
// console.log(drawboard.isTerminate())

// let currentBoard = newBoard
// console.log(newBoard.getScore('X'))
