import 'phaser'
import { GameManager } from '..';

export class TestScene extends Phaser.Scene{
  constructor() {
    super({
      key: 'TestScene'
    })
  }
  init() {
    console.log("TestScene init");
  }
  preload() {
    console.log("TestScene preload");
    console.log(this);
    console.log(GameManager.getInstance());
  }
}