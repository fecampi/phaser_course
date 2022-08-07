class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }
  init() {
    console.log("Scene Bootloader");
  }
  preload() {
    this.load.path = "./assets/";
    //Pode receber mais de um arquivo
    this.load.audio("8bits", ["8bits.ogg"]);
  }
  create() {
    const miaudio = this.sound.add("8bits");
    const cursor = this.input.keyboard.createCursorKeys();

    // Pausar quando sair
    this.sound.pauseOnBlur = true;

    cursor.up.on("down", () => {
      this.sound.pauseAll();
      // Fade OUT no audio
      // this.tweens.add({
      //     targets: [miaudio],
      //     duration: 2000,
      //     volume: 0,
      //     ease: 'Power1'
      // });
      // Diminuir o volume de 0 a 1
      // miaudio.volume -= 0.1;

      // Mutar
      // miaudio.mute = true;

      // Mudar o tune
      // miaudio.detune += 100;

      // Velocidade
      // miaudio.rate -= 0.1;

      // miaudio.pause();
    });
    cursor.down.on("down", () => {
      this.sound.resumeAll();
      // Aumentar o volume de 0 a 1
      // miaudio.volume = 1;

      // Não mutar
      // miaudio.mute = false;

      // Mudar o tune
      // miaudio.detune = 1;

      //Velocidade
      // miaudio.rate = 1;

      // miaudio.resume();
    });
    cursor.left.on("down", () => {
      // miaudio.stop();

      // Parar todos
      this.sound.stopAll();
    });
    cursor.right.on("down", () => {
      miaudio.play();
    });
  }
  update(time, delta) {}
}

export default Bootloader;
