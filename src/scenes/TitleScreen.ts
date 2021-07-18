import 'phaser'
import { config} from '../RagnarokDungeonsGame';

export default class TitleScreen extends Phaser.Scene
{
    constructor() {
        super('TitleScreen');
    }

    preload() {
        // load data
    }

    create() {
        // create things
        // Reflect.set(config, "backgroundColor", "#T1T500")
    }
    
    update() {
        // update the frames
        // let cursors: Phaser.Input.Mouse.MouseManager
        // if (cursors.onMouseMove) {
            // setTimeout(function () {
            //     this.scene.start("TestScene")
            // }, 400)
        // } 
        // this.scene.start("TestScene")
        config.backgroundColor = "#AWAWAW"
        this.scene.switch("TestScene")
    }
}