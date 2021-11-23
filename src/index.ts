import 'phaser'
import { config } from './config';

export class GameManager extends Phaser.Game{
  private static instance: GameManager = new GameManager()
  constructor() {
    super(config);
  }
  static getInstance(): GameManager {
    if(!this.instance) {
      this.instance = new GameManager();
    }
    return this.instance;
  }
}
