import 'phaser'
import {gameMetaData, config} from '../RagnarokDungeonsGame';
import { map } from '../tilemaps/testMap';

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen');
    }

    preload() {
        this.load.image("placehold","assets/placeholder.png");

        this.load.image("pgmart", "assets/programmerart.png");
        this.load.tilemapTiledJSON("testMap",map);
    }

    create() {
    }

    changeScene() {
        gameMetaData.scene.switch("TitleScreen","TestScene");
    }
    
    update() {
        config.backgroundColor = "#AWAWAW";
        
        this.changeScene();
    }
}