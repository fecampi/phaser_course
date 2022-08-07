class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader')
    }

    init() {
        console.log('Scene Bootloader')
    }

    preload() {
        //Forma 1
        // this.load.image('cubix_fondo', '.assets/cubix_fondo.png')

        //Forma 2
        this.load.path = './assets/'
        // this.load.image('cubix')

        //Forma 1
        this.load.image(['cubix', 'cubix_fondo'])
        console.log('preload')
    }


    create() {
        this.cubix = this.add.image(200, 200, 'cubix')
        this.cubix_fondo = this.add.image(200, 200, 'cubix_fondo')

        // --Origem da image para o x e y vai de 0.0 a 1.0   
        // this.cubix.setOrigin(0.5,0.5)

        //girar no heixo x
        this.cubix.flipX = true

        //girar no heixo y
        this.cubix.flipY = true

        //deixar visivel (0 e 1)
        this.cubix.setVisible(1)

        //Escala
        this.cubix.setScale(2, 1)

        //Transparencia 0 a 1 
        this.cubix.setAlpha(0.8)

        //colorir só funciona webGl
        this.cubix.setTint(0xff0000)

        //Mover
        this.cubix.x = 200
        this.cubix.y = 200

        //girar em graus
        this.cubix.angle = 10

        //girar em radianos
        this.cubix.rotation = 2

        //z-index
        this.cubix_fondo.setDepth(1)

    }


    update(time, delta) {
        // console.log(time, delta)

    }

}

export default Bootloader