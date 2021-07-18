document.addEventListener("keydown", key => {changeKey(key, true)});
document.addEventListener("keyup",   key => {changeKey(key,false)});

const pressedKeys: boolean[] = [];

function changeKey(key:KeyboardEvent, pressed:boolean):void {
    let code = key.keyCode;
    pressedKeys[code] = pressed;
}

export function isKeyPressed(keyCode:number):boolean {
    if (pressedKeys[keyCode] == null || pressedKeys[keyCode] == undefined)
        return false;
    
    return pressedKeys[keyCode];
}