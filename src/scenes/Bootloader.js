class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader')
    }

    init() {
        console.log('Scene Bootloader')
    }

    preload() {
        console.log('preload')
    }


    create() {
        console.log('create')
    }

    update(time, delta) {
        // console.log(time, delta)
    }

}

export default Bootloader