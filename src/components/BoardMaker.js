class BoardMaker extends cc.Component {
    onEnter() {
        super.onEnter();
    }

    CreateGrid() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var block = new Match3Block(this.getOwner().width / 8 * j + 48, this.getOwner().height / 8 * i + 45, j, i);
                block.setName("block" + i * 8 + j);
                this.getOwner().addChild(block);
            }
        }
    }

    FillWithTiles() {
        for (var i = 0; i < 8; i++) {
            var eachRow = [];
            for (var j = 0; j < 8; j++) {
                var newTile = new TileType(this.getOwner().width / 8 * i + 48, Math.floor(Math.random() * 6) + 1);
                this.getOwner().addChild(newTile);
                newTile.CreatePiece();
                newTile.movement.FallDown(8 - j);
                eachRow.push(newTile);
            }
            this.getOwner().tileManager.TileLocations.push(eachRow);
        }
    }
}