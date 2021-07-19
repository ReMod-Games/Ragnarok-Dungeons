import 'phaser'
import {gameMetaData, config} from '../RagnarokDungeonsGame';

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen');
    }

    preload() {
    }

    create() {
        this.input.on('pointerdown', this.changeScene);
    }

    changeScene() {
        gameMetaData.scene.switch("TitleScreen","TestScene");
    }
    
    update() {
        config.backgroundColor = "#AWAWAW";
    }
}