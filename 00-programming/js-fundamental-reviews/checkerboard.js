var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

function setSquare(player, row, col) {
    checkerboard[row][col] = player;
}

function getPieceAt(row, col) {
    return checkerboard[row][col];
}

function clearBoard() {
  for (var x = 0; x < checkerboard.length; x++) {
    for (var y = 0; y < checkerboard[x].length; y++) {
      checkerboard[x][y] = null;
    }
  }
}

function setUpEven(player, row_num) {
  var row = checkerboard[row_num];
  for (var i=0; i<row.length; i+=2) {
    row[i] = player;
  }
}

function setUpOdd(player, row_num) {
  var row = checkerboard[row_num];
  for (var i=1; i<row.length; i+=2) {
    row[i] = player;
  } 
}

function setUpRed() {
  setUpEven('R', 0);
  setUpOdd('R', 1);
  setUpEven('R', 2);
}

function setUpBlack() {
  var rows = checkerboard.length;
  setUpOdd('B', rows-3);
  setUpEven('B', rows-2);
  setUpOdd('B', rows-1);
}

setUpRed();
setUpBlack();
var pieces = {
  red: [],
  black: []
};

for (var x = 0; x < checkerboard.length; x++) {
  for (var y = 0; y < checkerboard[x].length; y++) {
    var player = checkerboard[x][y];
    if (player == 'R') {
      pieces['red'].push([x,y]);
    }
    if (player == 'B') {
      pieces['black'].push([x,y]);
    }
  }
}

var red = pieces['red'].map(function(piece){
  var row = piece[0];
  var col = piece[1];
  return checkerboard[row][col] === 'R';
});
console.log(red);


var black = pieces['black'].map(function(piece){
  var row = piece[0];
  var col = piece[1];
  return checkerboard[row][col] === 'B';
});
console.log(black);


