import 'phaser'
import {gameMetaData, config} from '../RagnarokDungeonsGame';

export default class TestScene extends Phaser.Scene {
    constructor() {
        super('TestScene');
    }

    preload() {
        // load data
        this.load.image("placehold","assets/placeholder.png")
    }

    create() {
        // create things
        config.backgroundColor = "#OWOWOWO";
        this.add.image(120,80,"placehold");
    }
    
    update() {
        // update the frames
        config.backgroundColor = "#OWOWOWO"
    }
}