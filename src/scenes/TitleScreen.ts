import 'phaser'

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
    }
    
    update() {
        // update the frames
        this.scene.start("TestScene")
    }
}