class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "SceneA" });
  }
  init() {
    console.log("Scene SceneA");
  }
  create() {
    this.add.image(100, 100, "imgA");
  }
  update(time, delta) {
    // console.log(time);
  }
}

class SceneB extends Phaser.Scene {
  constructor() {
    super({ key: "SceneB" });
  }
  init() {
    console.log("Scene SceneB");
  }
  create() {
    this.add.image(100, 100, "imgB");
  }
  update(time, delta) {}
}

class SceneC extends Phaser.Scene {
  constructor() {
    super({ key: "SceneC" });
  }
  init() {
    console.log("Scene SceneC");
  }
  create() {
    this.add.image(100, 100, "imgC");
    // this.scene.stop();
  }
  update(time, delta) {}
}

class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }
  init() {
    console.log("Scene Bootloader");
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image(["imgA", "imgB", "imgC"]);
  }
  create() {
    //Carregar as cena que foi iniciadas no main
    this.scene.start("SceneA");
    // Desligue esta cena e execute a cena B
    this.scene.start("SceneB");
    // Carregue em paralelo e cena A
    this.scene.launch("SceneA");
    // Iniciar cena de import
    this.scene.add("SceneC", SceneC);
    this.scene.start("SceneC");
    //mover a cena c um passo para atrás
    this.scene.moveDown("SceneC");
    //mover a cena c um passo para Frente
    this.scene.moveUp("SceneA");
    //Intercambiar as posições das cenas
    this.scene.swapPosition("SceneB", "SceneA");
    //Trazer a cena para frente de todas
    this.scene.bringToTop("SceneC");
    //Colocar a cena A na frente da cena A
    this.scene.moveAbove("SceneC", "SceneA");
    //Colocar a cena A na Atrás da cena A
    this.scene.moveBelow("SceneA", "SceneC");
    //Colocar a cena C atrás de todos
    this.scene.sendToBack("SceneC");
    //Encerrar a cena C
    this.scene.stop("SceneC");
    //Remover a cena C
    this.scene.remove("SceneC");
    // Pausar a cena A(para o update)
    this.scene.pause("SceneA");
    //Voltar a cena A (resume o update)
    this.scene.resume("SceneA");
    //Dormir A
    this.scene.sleep("SceneA");
    //Acordar A
    this.scene.wake("SceneA");

    console.log(this.scene.manager.scenes.map((x) => x.scene.key));
  }
  update(time, delta) {}
}

const config = {
  title: "Phaser",
  url: "http://..",
  version: "0.0.1",

  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "conteiner",
  pixelArt: true,
  backgroundColor: "#34495e",

  banner: {
    hidePhaser: false,
    text: "#fff00f",
    background: ["#16a085", "#2ecc71", "#e74c3c", "#000000"],
  },

  //Main Carregar
  scene: [Bootloader, SceneA, SceneB],
};

const game = new Phaser.Game(config);
