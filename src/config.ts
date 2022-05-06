import Preload from "./scenes/Preload";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: [Preload],
};

export default config;
