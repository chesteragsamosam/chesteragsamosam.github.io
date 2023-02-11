class TicTacToeNode {
  constructor(grid = [['','',''],['','',''],['','','']], player = 'X') {
    this.grid = grid;
    this.player = player;
  }
  clone() {
    let newNode = new TicTacToeNode();
    newNode.grid = this.grid.slice();
    newNode.player = this.player;
    return newNode;
  }

  // Method to generate all possible next states (child nodes)
  generateChildren() {
    let children = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j] === '') {
          let newGrid = JSON.parse(JSON.stringify(this.grid));
          newGrid[i][j] = this.player;
          children.push(new TicTacToeNode(newGrid, this.player === 'X' ? 'O' : 'X'));
        }
      }
    }
    return children;
  }
  getOutcome() {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2]) {
        return this.grid[i][0];
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
        return this.grid[0][i];
      }
    }

    // check diagonals
    if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
      return this.grid[0][0];
    }
    if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
      return this.grid[0][2];
    }

    // check for a draw
    if (this.grid.join().indexOf(" ") === -1) {
      return "draw";
    }

    // game is not over yet
    return "undetermined";
  }

  // Method to check if the game is over (i.e. a win or draw)
  isTerminal() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2] && this.grid[i][0] !== '') {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i] && this.grid[0][i] !== '') {
        return true;
      }
    }

    // Check diagonals
    if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2] && this.grid[0][0] !== '') {
      return true;
    }
    if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0] && this.grid[0][2] !== '') {
      return true;
    }

    // Check for draw
    let emptySpaces = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j] === '') {
          emptySpaces++;
        }
      }
    }
    return emptySpaces === 0;
  }
}
// Initialize the current node with an empty grid and X as the starting player
let currentNode = new TicTacToeNode();

// Number of simulations to run for each move
let numSimulations = 1000;

while (!currentNode.isTerminal()) {
  // Generate all possible next states (child nodes)
  let children = currentNode.generateChildren();

  // Initialize the best child node and its score
  let bestChild = null;
  let bestScore = -Infinity;

  // Run simulations for each child node
  for (let child of children) {
    let score = runSimulations(child, numSimulations);

    // Update the best child node and score if a better one is found
    if (score > bestScore) {
      bestChild = child;
      bestScore = score;
    }
  }

  // Make the best child node the current node
  currentNode = bestChild;

  // Print the current grid state
  console.log(currentNode.grid);
}
function runSimulations(node, numSimulations) {
  let totalScore = 0;

  for (let i = 0; i < numSimulations; i++) {
    let simulationNode = node.clone(); // create a copy of the node to simulate from
    let currentPlayer = simulationNode.player;

    // Play the game to completion
    while (!simulationNode.isTerminal()) {
      let children = simulationNode.generateChildren();
      let randomChild = children[Math.floor(Math.random() * children.length)];
      simulationNode = randomChild;
    }

    // Update the total score based on the outcome of the simulation
    let outcome = simulationNode.getOutcome();
    if (outcome === currentPlayer) {
      totalScore++;
    } else if (outcome === "draw") {
      totalScore += 0.5;
    }
  }
  // Return the average score
  return totalScore / numSimulations;
}