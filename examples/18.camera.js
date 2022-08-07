class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }

  preload() {
    this.load.setPath("./assets/");
    this.load.image("bomb");
    this.load.image("life");
    this.load.image("tomato_item");
  }

  create() {
    this.add.image(10, 10, "bomb").setOrigin(0);
    const tomato_item = this.add.image(60, 60, "tomato_item");
    const life = this.add.image(200, 200, "life");

    this.cameras.main
      //localização e tamanho
      .setViewport(0, 0, 100, 100)
      //mudar o tamanho
      //   .setSize(50, 50)
      .setBackgroundColor(0x00ff00);

    // FadeIn
    const camera1 = this.cameras
      .add(100, 0, 100, 100)
      .setBackgroundColor(0xff0000)
      //Adicionar o fadeIn
      .fadeIn(2000)
      //Adicionar o zoom
      .setZoom(2);
    camera1.scrollX = -20;
    camera1.scrollY = -20;
    camera1.on(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => {
      console.log("Fim do zoom da camera1");
    });

    // FadeOut
    const camera2 = this.cameras
      .add(200, 0, 100, 100)
      .setBackgroundColor(0xff0000)
      .fadeOut(2000);
    camera2.on(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.cameras.remove(camera2);
    });

    // flash
    const camera3 = this.cameras
      .add(300, 0, 100, 100)
      .setBackgroundColor(0xfff00f)
      .flash(2000)
      //Rotacionar a camera
      .setRotation(90);

    // shake
    const camera4 = this.cameras.add(0, 100, 100, 100);
    camera4.setBackgroundColor(0x00fff0).shake(2000, 0.03);

    // Centralizar
    const camera5 = this.cameras
      .add(100, 100, 100, 100)
      .setBackgroundColor(0xff0055);
    setTimeout(() => {
      camera5.centerOnX(life.x);
      camera5.centerOnY(life.y);
    }, 2000);

    // // -------Pegar o valor da localização do mouse e mover o objeto
    // const events = Phaser.Input.Events;
    // this.input.on(events.POINTER_MOVE, (event) => {
    //   if (event.isDown) {
    //     const camera6 = this.cameras
    //       .add(200, 100, 100, 100)
    //       .centerOn(event.worldX, event.worldY)
    //       .setBackgroundColor(0xff0055);
    //   }
    // });

    //Pan
    const camera7 = this.cameras
      .add(200, 100, 100, 100)
      .setBackgroundColor(0x5500ff);
    setTimeout(() => {
      camera7.pan(life.x, life.y, 3000, "Sine.easeInOut");
    }, 2000);
    //Ao terminar de mover dar o zoom
    camera7.on(Phaser.Cameras.Scene2D.Events.PAN_COMPLETE, () => {
      camera7.zoomTo(3, 1000, "Sine.easeInOut");
    });

    //Não renderizar o objeto
    const camera8 = this.cameras
      .add(300, 100, 100, 100)
      .setBackgroundColor(0xfff0ff)
      .ignore(tomato_item);
  }
}

const config = {
  title: "Camara",
  type: Phaser.AUTO,
  scale: {
    parent: "phaser_container",
    width: 400,
    height: 200,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#c7ecee",
  pixelArt: true,
  scene: [Bootloader],
};

new Phaser.Game(config);
