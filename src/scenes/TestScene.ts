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
    }
    
    update() {
        // update the frames
        config.backgroundColor = "#OWOWOWO"
    }
}