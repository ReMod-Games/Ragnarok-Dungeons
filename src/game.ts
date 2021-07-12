import 'phaser';
import { Scale } from 'phaser';

export default class TitleScreen extends Phaser.Scene
{
    constructor() {
        super('TitleScreen');
    }

    preload() {
        
    }

    create() {
        
    }
}

const scale = 4
const config = {
    type: Phaser.AUTO,
    backgroundColor: '#FF00FF',
    autoCenter: true,
    width: 240 * scale,
    height: 160 * scale,
    scene: TitleScreen
};

const game = new Phaser.Game(config);