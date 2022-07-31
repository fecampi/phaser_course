class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {

        //Modo 1: spriteSheet 'colados'
        this.load.path = './assets/';
        // this.load.image(['cubix', 'cubix_fondo']);
        // this.load.spritesheet('tomato', 'tomato/tomato.png', {
        //     frameWidth: 16,
        //     frameHeight: 25,
        // })

        //modo 2: spriteSheet 'espaçados'
        // this.load.spritesheet('tomato_spacing', 'tomato_spacing/tomato_spacing.png', {
        //     frameWidth: 16,
        //     frameHeight: 25,
        //     margin: 1,
        //     spacing: 2
        // })


        //modo 5: comm atlas
        // https://gammafp.com/tool/atlas-packer/
        //0 - inport
        //1 - Selecionar todos
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato/tomato_anim.json');


    }
    create() {
        //Modo 1: spriteSheet 'colados'
        // this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4)


        //modo 2: spriteSheet 'espaçados'
        // this.tomato_spacing = this.add.sprite(100, 200, 'tomato_spacing').setScale(4)

        //Modo 3: Ir para quadro especifico
        // this.tomato = this.add.sprite(100, 100, 'tomato_spacing', 4).setScale(4)

        // Modo 4: Criar animação
        // this.tomato = this.add.sprite(100, 100, 'tomato_spacing', 4).setScale(4)
        // this.anims.create({
        //     key: 'tomato_walk',
        //     frames: this.anims.generateFrameNames('tomato_spacing', {
        //         start: 0,
        //         end: 7
        //     }),
        //     repeat: -1,
        //     frameRate:15
        // })
        // //Play
        // this.tomato.anims.play('tomato_walk')
        // // or
        // // this.anims.play('tomato_walk', this.tomato)


        // //Modo 5: escolher os frames da animação
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4)
        this.tomato.anims.play('tomato_walk')
    }
    update(time, delta) {

    }
}

export default Bootloader;