import 'phaser'
import {PhaserColorFromHex, config} from '../RagnarokDungeonsGame';

export default class TestScene extends Phaser.Scene {
    testSprite!: Phaser.Physics.Arcade.Sprite;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super('TestScene');
    }

    preload() {
        // load data
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        // create things
        config.backgroundColor = "#OWOWOWO";
        
        let testMap = this.make.tilemap({key:"testMap"});
        let tiles = testMap.addTilesetImage("programmerArtTileset","pgmart");

        testMap.createLayer("Ground",tiles);
        let collide = testMap.createLayer("Walls",tiles);
        collide.setCollisionByProperty({collides:true});
        
        let testGraphic = this.add.graphics().setAlpha(0.75);
        collide.renderDebug(testGraphic, {
            tileColor: null,
            collidingTileColor: PhaserColorFromHex("#00FF00"),
            faceColor: PhaserColorFromHex("#008800")
        });
        this.input.on('pointerdown', this.changeScene);

        this.testSprite = this.physics.add.sprite(30,30,"placehold_sml");
        
    }

    changeScene() {
        //gameMetaData.scene.switch("TestScene","TitleScreen");
    }
    
    update() {
        // update the frames
        config.backgroundColor = "#OWOWOWO";
        
        let xOff = this.cursors.left? -1: this.cursors.right? 1: 0;
        let yOff = this.cursors.up? -1: this.cursors.down? 1: 0;

        let angle = Math.atan2(yOff,xOff);
        this.testSprite.setAngle(angle);
    }
}