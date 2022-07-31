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
        // Modo 0 Adicionar fontes
        //     <style>
        //     @font-face {
        //         font-family: 'IndieFlower';
        //         src: url('./IndieFlower.ttf');
        //     }
        //     #fuente {
        //         font-family: 'IndieFlower';
        //         position: absolute;
        //         top: -200px;
        //     }
        // </style>

        // Modo1: Adicionando texto
        const text = 'Maecenas quis \n maximus massa, \nvitae venenatis.'
        const style = {
            fontFamily: 'IndieFlower',
            color: '#000000',
            fontSize: 30,
            backgroundColor: '#ffffff',
            fontStyle: 'Italic',
            padding: {
                top: 20,
                bottom: 20,
                right: 20,
                left: 20,
            },
            align: 'center'
        }
        this.add.text(100, 0, text, style)

        //Modo2: Adicionando texto e estilo
        const textAndStyle = {
            x: 100,
            y: 200,
            text,
            style,
        }
      
        this.make.text(textAndStyle);

        // Modo2: criando um novo texto e setando um texto
        textAndStyle.flipX = true;
        textAndStyle.alpha = 0.5;
        textAndStyle.x = 100;
        textAndStyle.y = 400;
        
        this.nuevoTexto = this.make.text(textAndStyle);
        this.nuevoTexto.setText('Novo texto');


    }
    update(time, delta) {
    }
}

export default Bootloader;