import { Scene } from "phaser"

export class TileLoader {
    static dungeon() {
        // Tiles
        const loader = new Phaser.Loader.File.prototype.load
        loader.image("placehold", "assets/placeholder.png")
        loader.image("pgmart", "assets/programmerart.png")
    }
}