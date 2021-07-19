import 'phaser'
import {gameMetaData, config} from '../RagnarokDungeonsGame';

export default class TestScene extends Phaser.Scene {
    constructor() {
        super('TestScene');
    }

    preload() {
        // load data
    }

    create() {
        // create things
        config.backgroundColor = "#OWOWOWO";
        
        let testMap = this.make.tilemap({key:"testMap"});
        let tiles = testMap.addTilesetImage("tile","pgmart");

        testMap.createLayer("Tile Layer 1",tiles);

        this.input.on('pointerdown', this.changeScene);
    }

    changeScene() {
        //gameMetaData.scene.switch("TestScene","TitleScreen");
    }
    
    update() {
        // update the frames
        config.backgroundColor = "#OWOWOWO"
    }
}