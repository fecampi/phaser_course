// Em main.js acionar a física e o debug
// physics: {
//   default: "arcade",
//   arcade: {
//     gravity: {
//       y: 800,
//     },
//     debug: true,
//   },
// },

class Bootloader extends Phaser.Scene {
  constructor() {
    super("Bootloader");
  }
  init() {
    console.log("Scene Bootloader");
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image(["cubix", "cubix_fondo"]);
  }
  create() {
    //---colocar a Fisica----
    //Forma 1, imagem já com física
    this.cubix = this.physics.add.image(100, 100, "cubix");
    //Forma 2, Colocar fisica em imagem já existente
    this.evil_cubix = this.add.image(300, 100, "cubix_fondo");
    this.physics.add.existing(this.evil_cubix);
    //caso queira uma física estática como uma plataforma
    // this.physics.add.existing(this.evil_cubix, true);
    //-----

    //Não deixar sair do mundo
    this.cubix.body.setCollideWorldBounds(true);
    this.evil_cubix.body.setCollideWorldBounds(true);

    //Controles
    this.cursor = this.input.keyboard.createCursorKeys();
    this.cursor.right.on("down", () => {
      // Acelerar de forma constante
      // this.cubix.setVelocity(800);
      //Movimento acelerado
      this.cubix.body.setAcceleration(800);
    });

    this.cursor.right.on("up", () => {
      // Acelerar de forma constante
      // this.cubix.setVelocity(800);
      //Movimento acelerado
      this.cubix.body.setAcceleration(800);
    });

    this.cursor.left.on("down", () => {
      this.cubix.body.setAcceleration(-800);
    });

    this.cursor.up.on("down", () => {
      this.evil_cubix.body.setVelocityY(-400);
    });

    //Limitar a velocidade
    this.cubix.body.maxVelocity.x = 100;

    this.cursor.up.on("down", () => {
      this.evil_cubix.body.setVelocityY(-400);
    });

    //Física de colisão
    this.physics.add.collider(this.cubix, this.evil_cubix, () => {
      console.log("Existiu a colisão");
      this.cubix.body.setVelocity(0);
      this.cubix.body.setAcceleration(0);
    });

    //Adicionar a massa
    this.cubix.body.setMass(10);

    //Tamanho da colisão(do quadrado)
    this.evil_cubix.body.setSize(30, 30);

    //mover o quadrado da colisão
    this.evil_cubix.body.setOffset(30, 50);

    //Colisão redonda
    this.cubix.body.setCircle(40);

    //Adicionar quicar
    this.evil_cubix.body.setBounce(0.5);
  }
  update(time, delta) {}
}

export default Bootloader;
