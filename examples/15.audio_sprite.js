class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }
  init() {
    console.log("Scene Bootloader");
  }
  preload() {
    this.load.path = "./assets/";
    // https://gammafp.github.io/audio-sprite-gamma/
    this.load.audioSprite("fx", "AUDIO/spriteAudioGamma.json", [
      "AUDIO/spriteAudioGamma.ogg",
    ]);
  }
  create() {
    const cursor = this.input.keyboard.createCursorKeys();
    cursor.left.on("down", () => {
      console.log("clap");
      this.sound.playAudioSprite("fx", "clap");
    });
    cursor.up.on("down", () => {
      console.log("percusion");
      this.sound.playAudioSprite("fx", "percusion");
    });
    cursor.right.on("down", () => {
      console.log("pop");
      this.sound.playAudioSprite("fx", "pop");
    });
  }
  update(time, delta) {}
}

export default Bootloader;
