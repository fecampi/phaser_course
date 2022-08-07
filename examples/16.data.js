class SceneA extends Phaser.Scene {
  constructor() {
    super("SceneA");
  }
  init(data) {
    console.log("ScenaA Pontos: ", data);
  }
  preload() {
    //Events
    // (2) Emitir o evento
    this.registry.events.emit("evento", 300);
  }
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
    //Events
    // (1)Escutar o evento
    this.registry.events.on("evento", (data) => {
      console.log("Bootloader: ", data);
    });
  }
  create() {
    //Passar parâmetros para a cena que iniciar
    this.scene.start("SceneA", 200);

    //-------Set--------
    this.data.set("life", 5);
    this.data.set("coins", 3);
    this.data.set("monsters", 3);

    //set de objeto que já exite
    this.data.setValue("life", 5);

    //------Get-------
    const life = this.data.get("life");
    console.log("life: ", life);
    // or
    const life2 = this.data.list.life;
    console.log("life2: ", life2);
    //Buscar por query
    console.log("moedas: ", this.data.query("mon"));
    //Obter todos
    console.log("Todos: ", this.data.getAll());

    //-------Remove-----
    this.data.remove("life");
    //Limpar persistências
    this.data.reset();
    console.log("Todos: ", this.data.getAll());
  }
  update(time, delta) {}
}

export { Bootloader, SceneA };
