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
        zoom: 4,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: sceneList 
};

export let gameMetaData: Phaser.Game = new Phaser.Game(config);

export function PhaserColorFromHex(hex:string):Phaser.Display.Color {
    if (hex[0] == "#")
        hex = hex.substr(1);
    
    let colors: string[] = hex.match(/.{1,2}/g); //cursed string shit don't @ me
    
    let r:number = parseInt(colors[0],16);
    let g:number = parseInt(colors[1],16);
    let b:number = parseInt(colors[2],16);

    return new Phaser.Display.Color(r,g,b,255);
}

setTimeout(()=>{
    config.backgroundColor = "#OWOWOWO"
}, 400);