class PongLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(0,100,0,255), 800, 700);

        //let paddle = new Paddle(100, 50);
        //paddle.setName("paddle");
        //this.addChild(paddle);
        this.CreateGrid();
        this.addComponent(new GameLayerResizer());

        this.TileLocations = [];
        this.FillWithTiles();

        this.selectedTileX = 0;
        this.selectedTileY = 0;
        this.isSwappingTiles = false;
        this.clearedSomeTiles = false;
    }

    CreateGrid() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                //var block = new Match3Block(this.width / 8 * i, this.height / 8 * j, this.width / 8 - 10, this.height / 8 - 10);
                var block = new Match3Block(this.width / 8 * j + 48, this.height / 8 * i + 45, j, i);
                block.setName("block" + i * 8 + j);
                this.addChild(block);
            }
        }
    }

    FillWithTiles() {
        for (var i = 0; i < 8; i++) {
            var eachRow = [];
            for (var j = 0; j < 8; j++) {
                var newTile = new TileType(this.width / 8 * i + 48, Math.floor(Math.random() * 6) + 1);
                this.addChild(newTile);
                newTile.CreatePiece();
                newTile.FallDown(8 - j);
                eachRow.push(newTile);
            }
            this.TileLocations.push(eachRow);
        }
    }

    RemoveTile(xIndex, yIndex) {
        this.removeChild(this.TileLocations[xIndex][yIndex]);
        this.AdjustBoard(xIndex, yIndex);
    }

    AdjustBoard(xIndex, yIndex) {
        for (var i = yIndex; i < 7; i++) {
            this.TileLocations[xIndex][i] = this.TileLocations[xIndex][i + 1];
            this.TileLocations[xIndex][i].FallDown(1);
        }
        var newTile = new TileType(this.width / 8 * xIndex + 48, Math.floor(Math.random() * 6) + 1);
        this.addChild(newTile);
        this.TileLocations[xIndex][7] = newTile;
        newTile.CreatePiece();
        if (this.clearedSomeTiles)
            newTile.FallDown(1);
        else {
            this.clearedSomeTiles = true;
            newTile.FallDownWithWait(1);
        }
    }

    SelectTile(xIndex, yIndex) {
        if (!this.isSwappingTiles) {
            this.selectedTileX = xIndex;
            this.selectedTileY = yIndex;
            this.isSwappingTiles = true;
        }
        else {
            this.isSwappingTiles = false;

            if ((xIndex == this.selectedTileX && (yIndex == this.selectedTileY + 1 || yIndex == this.selectedTileY - 1)) ||
                (yIndex == this.selectedTileY && (xIndex == this.selectedTileX + 1 || xIndex == this.selectedTileX - 1))) {
                if (this.selectedTileX < xIndex) {
                    this.TileLocations[xIndex][yIndex].MoveLeft();
                    this.TileLocations[this.selectedTileX][this.selectedTileY].MoveRight();
                }
                else if (this.selectedTileX > xIndex) {
                    this.TileLocations[xIndex][yIndex].MoveRight();
                    this.TileLocations[this.selectedTileX][this.selectedTileY].MoveLeft();
                }
                else {
                    if (this.selectedTileY < yIndex) {
                        this.TileLocations[xIndex][yIndex].MoveDown();
                        this.TileLocations[this.selectedTileX][this.selectedTileY].MoveUp();
                    }
                    else {
                        this.TileLocations[xIndex][yIndex].MoveUp();
                        this.TileLocations[this.selectedTileX][this.selectedTileY].MoveDown();
                    }
                }

                var temp = this.TileLocations[xIndex][yIndex];
                this.TileLocations[xIndex][yIndex] = this.TileLocations[this.selectedTileX][this.selectedTileY];
                this.TileLocations[this.selectedTileX][this.selectedTileY] = temp;
            }
        }
    }

    CheckForMatches() {
        var matchedBlocks = [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false]];

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var type = this.TileLocations[j][i].type;

                if (this.CheckLowerLeftToUpperRightDiagonal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - Math.max(j, i) && this.TileLocations[j + k][i + k].type == type; k++) {
                        matchedBlocks[j + k][i + k] = true;
                    }
                }

                if (this.CheckUpperLeftToLowerRightDiagonal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= Math.min(j, 7 - i) && this.TileLocations[j - k][i + k].type == type; k++) {
                        matchedBlocks[j - k][i + k] = true;
                    }
                }

                if (this.CheckHorizontal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - j && this.TileLocations[j + k][i].type == type; k++) {
                        matchedBlocks[j + k][i] = true;
                    }
                }

                if (this.CheckVertical(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - i && this.TileLocations[j][i + k].type == type; k++) {
                        matchedBlocks[j][i + k] = true;
                    }
                }
            }
        }

        this.clearedSomeTiles = false;
        for (var i = 7; i > -1; i--) {
            for (var j = 7; j > -1; j--) {
                if (matchedBlocks[i][j]) {
                    this.RemoveTile(i, j);
                }
            }
        }
    }
    
    CheckLowerLeftToUpperRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (Math.max(xIndex, yIndex) < 7) {
            for (var i = 1; i <= 7 - Math.max(xIndex, yIndex) && this.TileLocations[xIndex + i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckUpperLeftToLowerRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (Math.min(xIndex, 7 - yIndex) > 0) {
            for (var i = 1; i <= Math.min(xIndex, 7 - yIndex) && this.TileLocations[xIndex - i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckHorizontal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (xIndex < 7) {
            for (var i = 1; i <= 7 - xIndex && this.TileLocations[xIndex + i][yIndex].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckVertical(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (yIndex < 7) {
            for (var i = 1; i <= 7 - yIndex && this.TileLocations[xIndex][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    /*CheckLowerLeftToUpperRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (Math.min(xIndex, yIndex) > 0) {
            for (var i = 1; i <= Math.min(xIndex, yIndex) && this.TileLocations[xIndex - i][yIndex - i].type == type; i++) {
                matchCount++;
            }
        }
        if (Math.max(xIndex, yIndex) < 7) {
            for (var i = 1; i <= 7 - Math.max(xIndex, yIndex) && this.TileLocations[xIndex + i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckUpperLeftToLowerRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (Math.min(xIndex, 7 - yIndex) > 0) {
            for (var i = 1; i <= Math.min(xIndex, 7 - yIndex) && this.TileLocations[xIndex - i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }
        if (Math.max(xIndex, yIndex) < 7) {
            for (var i = 1; i <= 7 - Math.max(xIndex, 7 - yIndex) && this.TileLocations[xIndex + i][yIndex - i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckHorizontal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (xIndex > 0) {
            for (var i = 1; i <= xIndex && this.TileLocations[xIndex - i][yIndex].type == type; i++) {
                matchCount++;
            }
        }
        if (xIndex < 7) {
            for (var i = 1; i <= 7 - xIndex && this.TileLocations[xIndex + i][yIndex].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckVertical(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.TileLocations[xIndex][yIndex].type;

        if (yIndex > 0) {
            for (var i = 1; i <= yIndex && this.TileLocations[xIndex][yIndex - i].type == type; i++) {
                matchCount++;
            }
        }
        if (yIndex < 7) {
            for (var i = 1; i <= 7 - yIndex && this.TileLocations[xIndex][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }*/
}