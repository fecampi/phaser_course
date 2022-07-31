class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }
    create() {

        //Set interative, deixa o objeto interativo
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(100, 200, 'cubix_fondo').setInteractive();

        //-----Eventos de Mouse---
        const events = Phaser.Input.Events;
        console.log(events)

        //----Ao clicar em canvas---
        this.input.on(events.POINTER_DOWN, (evento) => {
            console.log("clicou com o mouse canvas");
            console.log(evento);
        });

        //-----Ao soltar-----
        // this.input.on(events.POINTER_UP, (evento) => {
        //     console.log("soltou o click do mouse");
        // });

        //-------Pegar o valor da localização do mouse e mover o objeto
        // this.input.on(events.POINTER_MOVE, (event) => {
        //     if (event.isDown) {
        //         this.cubix.x = event.worldX;
        //         this.cubix.y = event.worldY;
        //     }
        // });

        //-- Quando mouse entrou no canvas
        // this.input.on(events.GAME_OVER, () => {
        //     console.log('Mouse entrou no canvas');
        // });

        // //-- Quando mouse saiu do canvas
        // this.input.on(events.GAME_OUT, () => {
        //     console.log('Mouse saiu do canvas');
        // });

        // //-- Quando cicou fora do canvas
        // this.input.on(events.POINTER_DOWN_OUTSIDE, () => {
        //     console.log('clicou fora');
        // });
        // this.input.on(events.POINTER_UP_OUTSIDE, () => {
        //     console.log('desclicou fora');
        // });

        // Quando clicar em algum objeto do canvas
        // this.input.on(events.GAMEOBJECT_DOWN, (pointer, gameObject) => {
        //     gameObject.setTint(0x00ff00);
        // });
        // this.input.on(events.GAMEOBJECT_UP, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });


         // Quando clicar em qualquer objeto do canvas
        //Quando entrar pinta
        // this.input.on(events.GAMEOBJECT_OVER, (pointer, gameObject) => {
        //     gameObject.setTint(0x0000ff);
        // });
        // //Quando sai volta o normal
        // this.input.on(events.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });

        // Quando clicar em um objeto especifico (não pode ser arrow function)
        // this.cubix_fondo.on(events.POINTER_DOWN, function() {
        //     this.setTint(0x00ff00);
        // });
        // this.cubix_fondo.on(events.POINTER_UP, function() {
        //     this.clearTint();
        // });
    }
    update(time, delta) {
       
    }
}

export default Bootloader;