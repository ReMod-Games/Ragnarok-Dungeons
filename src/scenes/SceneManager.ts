import { gameMetaData } from  "./../RagnarokDungeonsGame"

export class SceneManager {
    static changeScene(fromScene, toScene) {
        gameMetaData.scene.switch(fromScene, toScene)
    }
}