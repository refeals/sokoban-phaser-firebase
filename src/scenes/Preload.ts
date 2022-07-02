import Phaser from "phaser";
import * as c from "../constants";
import PlayerUp from "../assets/images/Character7.png";
import PlayerDown from "../assets/images/Character4.png";
import PlayerLeft from "../assets/images/Character1.png";
import PlayerRight from "../assets/images/Character2.png";
import Wall from "../assets/images/Wall_Brown32.png";
import Crate from "../assets/images/Crate_Blue32.png";
import Ground from "../assets/images/Ground_Grass32.png";
import EndPoint from "../assets/images/EndPoint_Beige.png";

export default class Preload extends Phaser.Scene {
  constructor() {
    super(c.ScenePreload);
  }

  preload() {
    this.load.image(c.imgPlayerUp, PlayerUp);
    this.load.image(c.imgPlayerDown, PlayerDown);
    this.load.image(c.imgPlayerLeft, PlayerLeft);
    this.load.image(c.imgPlayerRight, PlayerRight);
    this.load.image(c.imgWall, Wall);
    this.load.image(c.imgCrate, Crate);
    this.load.image(c.imgGround, Ground);
    this.load.image(c.imgEndPoint, EndPoint);
  }

  create() {
    this.scene.start(c.SceneGame, { stage: 1 });
  }
}
