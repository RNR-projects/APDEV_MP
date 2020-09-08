class Match3Checker extends cc.Component {
    onEnter() {
        super.onEnter();
        this.clearedSomeTiles = false;
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
                var type = this.getOwner().tileManager.TileLocations[j][i].type;

                if (this.CheckLowerLeftToUpperRightDiagonal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - Math.max(j, i) && this.getOwner().tileManager.TileLocations[j + k][i + k].type == type; k++) {
                        matchedBlocks[j + k][i + k] = true;
                    }
                }

                if (this.CheckUpperLeftToLowerRightDiagonal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= Math.min(j, 7 - i) && this.getOwner().tileManager.TileLocations[j - k][i + k].type == type; k++) {
                        matchedBlocks[j - k][i + k] = true;
                    }
                }

                if (this.CheckHorizontal(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - j && this.getOwner().tileManager.TileLocations[j + k][i].type == type; k++) {
                        matchedBlocks[j + k][i] = true;
                    }
                }

                if (this.CheckVertical(j, i)) {
                    matchedBlocks[j][i] = true;
                    for (var k = 1; k <= 7 - i && this.getOwner().tileManager.TileLocations[j][i + k].type == type; k++) {
                        matchedBlocks[j][i + k] = true;
                    }
                }
            }
        }

        this.clearedSomeTiles = false;
        for (var i = 7; i > -1; i--) {
            for (var j = 7; j > -1; j--) {
                if (matchedBlocks[i][j]) {
                    this.getOwner().tileManager.RemoveTile(i, j);
                    this.getOwner().getParent().updateScores()
                }
            }
        }
    }

    CheckLowerLeftToUpperRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.getOwner().tileManager.TileLocations[xIndex][yIndex].type;

        if (Math.max(xIndex, yIndex) < 7) {
            for (var i = 1; i <= 7 - Math.max(xIndex, yIndex) && this.getOwner().tileManager.TileLocations[xIndex + i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckUpperLeftToLowerRightDiagonal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.getOwner().tileManager.TileLocations[xIndex][yIndex].type;

        if (Math.min(xIndex, 7 - yIndex) > 0) {
            for (var i = 1; i <= Math.min(xIndex, 7 - yIndex) && this.getOwner().tileManager.TileLocations[xIndex - i][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckHorizontal(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.getOwner().tileManager.TileLocations[xIndex][yIndex].type;

        if (xIndex < 7) {
            for (var i = 1; i <= 7 - xIndex && this.getOwner().tileManager.TileLocations[xIndex + i][yIndex].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }

    CheckVertical(xIndex, yIndex) {
        var matchCount = 1;
        var type = this.getOwner().tileManager.TileLocations[xIndex][yIndex].type;

        if (yIndex < 7) {
            for (var i = 1; i <= 7 - yIndex && this.getOwner().tileManager.TileLocations[xIndex][yIndex + i].type == type; i++) {
                matchCount++;
            }
        }

        return matchCount >= 3;
    }
}