class TileManager extends cc.Component {
    onEnter() {
        super.onEnter();
    }

    Init() {
        this.TileLocations = [];
    }

    RemoveTile(xIndex, yIndex) {
        this.getOwner().removeChild(this.TileLocations[xIndex][yIndex]);
        this.AdjustBoard(xIndex, yIndex);
    }

    AdjustBoard(xIndex, yIndex) {
        for (var i = yIndex; i < 7; i++) {
            this.TileLocations[xIndex][i] = this.TileLocations[xIndex][i + 1];
            this.TileLocations[xIndex][i].movement.FallDown(1);
        }
        var newTile = new TileType(this.getOwner().width / 8 * xIndex + 48, Math.floor(Math.random() * 6) + 1);
        this.getOwner().addChild(newTile);
        this.TileLocations[xIndex][7] = newTile;
        newTile.CreatePiece();
        if (this.getOwner().matchChecker.clearedSomeTiles)
            newTile.movement.FallDown(1);
        else {
            this.getOwner().matchChecker.clearedSomeTiles = true;
            newTile.movement.FallDownWithWait(1);
        }
    }
}