import Phaser from "phaser";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { SceneGame } from "../constants";

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneGame);
  }

  preload() {}

  create() {
    console.log("Game");

    getDocs(collection(db, "stages/1/data"))
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        })
      )
      .catch((err) => console.log(err));
  }

  update() {}
}
