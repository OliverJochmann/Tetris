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
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ],

  Block : function(posY, posX) {
    this.posY = posY,
    this.posX = posX
  },

  newBlock : (0, 0),

  rowEmpty : [false, false, false],

  // rowFull : this.wellStatus.block.posY == [1, 1, 1],

  createWell : function() {
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

  drawWell : function(wStatus) {
    for (y=wStatus.length; y >= 0; y--) {
      
      for (x in wStatus[y]) {

        if (wStatus[y][x] == true) {
          document.getElementById(y.toString()+x.toString()).className="block";
        }
        else {
          document.getElementById(y.toString()+x.toString()).className="free";
        };
      }
    }
  },

  updateWell : function(Block) {
    this.wellStatus[Block.posY][Block.posX] = !this.wellStatus[Block.posY][Block.posX];
    this.drawWell(this.wellStatus);
  },

  createBlock: function() {
    this.newBlock = new this.Block(4, 1);
    this.updateWell(this.newBlock);
    // console.log(this.wellStatus);
    this.moveBlock(this.newBlock);
  },


      //moveDown
  moveBlock: function (Block) {
    // var freeBelow = this.wellStatus[Block.posY+1][Block.posX] == false;
    // var freeLeft = this.wellStatus[Block.posY][Block.posX-1] == false;
    // var freeRight = this.wellStatus[Block.posY][Block.posX+1] == false;

    setInterval(function(){
      well.updateWell(Block);
      Block.posY -= 1;
      well.updateWell(Block);
    }, 1000);
    

    // if(!freeBelow) {clearInterval(),
    //   this.blockArrived();
    // };
  }

    // var lastKey = null;
    // document.addEventListener('keypress', (event) => {
    // lastKey = event.key;
    // });

    // if (lastKey == 'a' && freeLeft) {
    //   this.updateWell(this.newBlock);
    //   this.newBlock.posX -= 1;
    //   this.updateWell(this.newBlock);
    //   lastKey = null;
    // }
    // if (lastKey == 'a' && freeRight) {
    //   this.updateWell(this.newBlock);
    //   this.newBlock.posX += 1;
    //   this.updateWell(this.newBlock);
    //   lastKey = null;
    // }

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
};