//declaring variables

//store which points are empty/full
// /window.tetris = window.tetris || {
//   blubb: function() {}
// };

// window.tetris.blubb = funct

var block = {
  posY: 1,
  posX: 4
};




var newCell = null;
var t = null;

//startingPosition = ;

//transponieren
//function transpose(wellStatus) {}


//FUNKTIONIERT!
var well = {
  wellStatus:
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],

  block : {
    posY: 1,
    posX: 4
  },

  rowEmpty : [0, 0, 0],

  // rowFull : this.wellStatus.block.posY == [1, 1, 1],

  startingPosition : "41",

  draw : function() {
    for (y=this.wellStatus.length; y >= 0; y--) {
      var newCell = null;
      var t = null;

      for (x in this.wellStatus[y]) {
        var newCell = document.createElement("div");
        newCell.id = y.toString()+x.toString();
        newCell.className="free";
        var t = document.createTextNode(newCell.id);
        newCell.appendChild(t);
        
        document.getElementById("well").appendChild(newCell);
      }
    }
  },

//creating block object
  createBlock: function() {
    document.getElementById("41").className="block";
    // this.moveBlock();
  }
};

//       //moveDown
//   moveBlock: function () {
//     var freeBelow = wellStatus[block.posY+1][block.posX] == 0;
//     var freeLeft = wellStatus[block.posY][block.posX-1] == 0;
//     var freeRight = wellStatus[block.posY][block.posX+1] == 0;

//     setInterval(function(){
//       block.posY += 1;}, 1000);

//     if(!freeBelow) {clearInterval(),
//       this.blockArrived();
//     };

//     var lastKey = null;
//     document.addEventListener('keypress', (event) => {
//     lastKey = event.key;
//     });

//     if (lastKey == 'a' && freeLeft) {
//       block.posX -= 1;
//       lastKey = null;
//     }
//     if (lastKey == 'd' && freeRight) {
//       block.posX += 1;
//       lastKey = null;
//     }
//   },

//   blockArrived: function () {
//     wellStatus[block.posY][block.posX] = 1;
//     if (rowFull) {
//       this.removeRow(block.posY);
//     }
//     else {
//       this.createBlock();
//     }
//   },

//   removeRow: function (rowNo) {
//     wellStatus[rowNo] = [0, 0, 0];
//     this.gravity(rowNo);
//   },

// // TODO method which awards points & combo
//   awardPoints : function() {
//     return null;
//   },

//   gravity: function (rowNo) {
//     for (i = rowNo; Math.abs(i) < wellStatus.length; i--) {
//       if (wellStatus[i - 1] != rowEmpty) {
//         wellStatus[i] = wellStatus[i - 1];
//       }
//     }
//     this.createBlock();
//   }
// };
// };