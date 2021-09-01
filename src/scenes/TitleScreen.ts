import 'phaser'
import { config } from '../RagnarokDungeonsGame'
import { SceneManager } from './SceneManager'

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen')
    }

    preload() {
        this.load.image("placehold", "assets/placeholder.png")
        this.load.image("pgmart", "assets/programmerart.png")
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