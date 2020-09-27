class TileManager extends cc.Component {//Manages what tile types are where in the board
    onEnter() {
        super.onEnter();
    }
    //initializes the array for use in the BoardMaker
    Init() {//[col][row] double array format. This holds the type that is currently at the coordinates since the sprites at that location do not hold them
        this.TileLocations = [];
    }
    //Removes the tile from the board
    RemoveTile(xIndex, yIndex) {
        this.getOwner().removeChild(this.TileLocations[xIndex][yIndex]);
        this.AdjustBoard(xIndex, yIndex);
    }
    //When tiles are removed, causes all tiles above to fall down and create a new tile in the column the tile was removed from
    AdjustBoard(xIndex, yIndex) {
        for (var i = yIndex; i < 7; i++) {
            this.TileLocations[xIndex][i] = this.TileLocations[xIndex][i + 1];
            this.TileLocations[xIndex][i].movement.FallDown(1);
        }
        var newTile = new TileType(this.getOwner().width / 8 * xIndex + 48, Math.floor(Math.random() * 6) + 1);
        this.getOwner().addChild(newTile);
        this.TileLocations[xIndex][7] = newTile;
        newTile.CreatePiece();
        if (this.getOwner().matchChecker.clearedSomeTiles)//if this is not the first newly generated tile, just fall without triggering anything
            newTile.movement.FallDown(1);
        else {//if this is the first newly generated tile, trigger the Match3Checker to recheck the board at the end of its fall animation
            this.getOwner().matchChecker.clearedSomeTiles = true;
            newTile.movement.FallDownWithWait(1);
        }
    }
}