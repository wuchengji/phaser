import 'phaser'
import { TestScene } from './scene/Test'
export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "box",
  backgroundColor: '#ccc',
  scene: [
    TestScene
  ]
}