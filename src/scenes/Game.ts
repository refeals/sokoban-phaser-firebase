import Phaser from "phaser";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import {
  imgCrate,
  imgEndPoint,
  imgGround,
  imgPlayerDown,
  imgWall,
  SceneGame,
} from "../constants";

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneGame);
  }

  // init(data: Object) {
  //   this.vars = { ...data };
  // }

  async create() {
    // console.log(this.vars);
    const level = localStorage.getItem("level1");

    if (level) {
      this.buildLevel(level);
    } else {
      const stagesRef = doc(db, "stages", "1");
      const stagesSnap = await getDoc(stagesRef);

      if (stagesSnap.exists()) {
        const { data } = stagesSnap.data();
        localStorage.setItem("level1", data);
        this.buildLevel(data);
      }
    }
  }

  update() {}

  private buildLevel(data: string) {
    const spacing = 32;
    let x = spacing / 2;
    let y = spacing / 2;
    let canDrawFloor = false;

    data.split("").forEach((c) => {
      if (c === "@") {
        this.add.image(x, y, imgGround);
        this.add.image(x, y - 10, imgPlayerDown);
        canDrawFloor = true;
      }

      if (c === "#") {
        this.add.image(x, y, imgWall);
        canDrawFloor = true;
      }

      if (c === ".") {
        this.add.image(x, y, imgGround);
        const endpoint = this.add.image(x, y, imgEndPoint);
        endpoint.setScale(0.5, 0.5);
        canDrawFloor = true;
      }

      if (c === "$") {
        this.add.image(x, y, imgGround);
        this.add.image(x, y, imgCrate);
        canDrawFloor = true;
      }

      if (c === " ") {
        if (canDrawFloor) {
          this.add.image(x, y, imgGround);
        }
      }

      x += spacing;

      if (c === "L") {
        x = spacing / 2;
        y += spacing;
        canDrawFloor = false;
      }
    });
  }
}
