import { Game } from "phaser";
import TestScene from "./scenes/TestScene";
import TitleScreen from "./scenes/TitleScreen";

export var sceneList = [];
sceneList.push(TitleScreen, TestScene);

export var config = {
    type: Phaser.AUTO,
    backgroundColor: "#EAEAEA",
    width: 240,
    height: 160,
    scale: {
        zoom: 1,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: sceneList 
};

export let gameMetaData: Phaser.Game = new Phaser.Game(config);

setTimeout(()=>{
    config.backgroundColor = "#OWOWOWO"
}, 400);