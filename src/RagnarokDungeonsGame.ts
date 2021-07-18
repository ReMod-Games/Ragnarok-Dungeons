import TestScene from "./scenes/TestScene";
import TitleScreen from "./scenes/TitleScreen";

export var gameMetaData: Phaser.Game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: '#A55A55',
    width: 240,
    height: 160,
    scale: {
        zoom: 4,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: sceneList 
})

export var sceneList = []
sceneList.push(TitleScreen, TestScene)