import 'phaser'
import { TileLoader } from '../dataloaders/TileLoader'
import { config } from '../RagnarokDungeonsGame'
import { SceneManager } from './SceneManager'

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen')
    }

    preload() {
        TileLoader.dungeon()
        this.load.tilemapTiledJSON("testMap", "data/tilemaps/test.tilemap.json")
    }

    create() {
        // TODO: Much Stuff 
    }
    
    update() {
        config.backgroundColor = "#AWAWAW"
        SceneManager.changeScene("TitleScreen", "TestScene")
    }
}