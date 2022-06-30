import Phaser from "phaser";
import { SceneGame, ScenePreload } from "../constants";

export default class Preload extends Phaser.Scene {
  constructor() {
    super(ScenePreload);
  }

  preload() {}

  create() {
    console.log("Preload");
    this.scene.start(SceneGame);
  }

  update() {}
}
