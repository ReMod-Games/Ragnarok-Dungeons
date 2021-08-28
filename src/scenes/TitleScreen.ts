import 'phaser'
import {gameMetaData, config} from '../RagnarokDungeonsGame';
import { map } from '../tilemaps/testMap';
import * as placeholder from "./../assets/placeholder.png"  
import * as programmerart from "./../assets/programmerart.png" 

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen');
    }

    preload() {
        this.load.image("placehold", placeholder);

        this.load.image("pgmart", programmerart);
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