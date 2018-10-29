//declaring variables

//store which points are empty/full
// /window.tetris = window.tetris || {
//   blubb: function() {}
// };

// window.tetris.blubb = funct

//transponieren
//function transpose(wellStatus) {}



var well = {
  wellStatus:
  [
    [false, false, false],
    [false, true, false],
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ],

  Block : function(posY, posX) {
    this.posY = posY,
    this.posX = posX
  },

  newBlock : null,

  rowEmpty : [0, 0, 0],

  allIds : [],

  // rowFull : this.wellStatus.block.posY == [1, 1, 1],

  createWell : function() {
    for (y=this.wellStatus.length; y >= 0; y--) {
      var newCell = null;
      var t = null;
      // console.log(this.wellStatus[y]);

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

  drawWell : function() {
    for (y=this.wellStatus.length; y >= 0; y--) {
      
      for (x in this.wellStatus[y]) {

        if (this.wellStatus[y][x] == true) {
          document.getElementById(y.toString()+x.toString()).className="block";
        }
        else {
          document.getElementById(y.toString()+x.toString()).className="free";
        };
      }
    }
  },

    // for (let id in this.allIds) {
    //   if (document.getElementById(id) == true) {
    //     document.getElementById(id).className="block";
    //   }
    //   else if (document.getElementById(id) == false) {
    //     document.getElementById(id).className="free";
    //   }
    // };
      
      
  //     for (x in this.wellStatus[y]) {
  //       if (this.wellStatus[y].x) {
  //         this.wellStatus[y].x.className="block";
  //       }
  //       else {
  //         this.wellStatus[y].x.className="free";
  //       }
  //     }
  //   }
  // },

  updateWell : function(posY, posX) {
    this.wellStatus[posY][posX] = !this.wellStatus[posY][posX];
    this.drawWell();
  },

  createBlock: function() {
    var newBlock = new this.Block(4, 1);
    this.updateWell(newBlock);
    // this.moveBlock();
  },

  

//creating block object
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