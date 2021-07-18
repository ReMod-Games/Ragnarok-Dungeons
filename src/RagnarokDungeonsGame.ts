import TestScene from "./scenes/TestScene";
import TitleScreen from "./scenes/TitleScreen";

export var sceneList = []
sceneList.push(TitleScreen, TestScene)

export var config = {
    type: Phaser.AUTO,
    backgroundColor: "#EAEAEA",
    width: 240,
    height: 160,
    scale: {
        zoom: 4,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: sceneList 
}

let gameMetaData: Phaser.Game = new Phaser.Game(config)

setTimeout(function(){
    config.backgroundColor = "#OWOWOWO"
}, 400)