import 'phaser'

export default class TestScene extends Phaser.Scene {
    constructor() {
        super('TestScene')
    }

    preload() {
        // load data
    }

    create() {
        let testMap = this.make.tilemap({key:"testMap"})
        let tiles = testMap.addTilesetImage("programmerArtTileset","pgmart")
        testMap.createLayer("Ground",tiles)
        testMap.createLayer("Walls",tiles)
        this.input.on('pointerdown', this.changeScene)
    }

    changeScene() {
        //
    }
    
    update() {
        // 
    }
}