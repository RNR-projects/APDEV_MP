class BoardInteractibility extends cc.Component {
    onEnter() {
        super.onEnter();
    }

    Init() {
        this.selectedTileX = 0;
        this.selectedTileY = 0;
        this.isSwappingTiles = false;
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
                    this.getOwner().tileManager.TileLocations[xIndex][yIndex].movement.MoveLeft();
                    this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY].movement.MoveRight();
                }
                else if (this.selectedTileX > xIndex) {
                    this.getOwner().tileManager.TileLocations[xIndex][yIndex].movement.MoveRight();
                    this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY].movement.MoveLeft();
                }
                else {
                    if (this.selectedTileY < yIndex) {
                        this.getOwner().tileManager.TileLocations[xIndex][yIndex].movement.MoveDown();
                        this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY].movement.MoveUp();
                    }
                    else {
                        this.getOwner().tileManager.TileLocations[xIndex][yIndex].movement.MoveUp();
                        this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY].movement.MoveDown();
                    }
                }

                var temp = this.getOwner().tileManager.TileLocations[xIndex][yIndex];
                this.getOwner().tileManager.TileLocations[xIndex][yIndex] = this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY];
                this.getOwner().tileManager.TileLocations[this.selectedTileX][this.selectedTileY] = temp;
            }
        }
    }
}