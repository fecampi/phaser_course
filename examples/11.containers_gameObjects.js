class ImageContainer extends Phaser.GameObjects.Container {
    constructor(scene, name, nameLocation) {
        super(scene);
        this.scene = scene;
        this.name = name
        this.nameLocation = nameLocation
        this.scene.load.path = './assets/'
        this.scene.load.image([name, nameLocation])
    }


    create(x, y) {
        this.cubix = this.scene.add.image(x, y, this.name)
        this.timeline = this.scene.tweens.timeline({
            targets: [this.cubix],
            duration: 1000,
            totalDuration: 4000,
            paused: true,
            loop: 2,
            tweens: [
                {
                    x: 300,
                },
                {
                    x: 100
                },
            ]
        });
        this.timeline.play();
    }
}


class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader')
    }

    init() {
        console.log('Scene Bootloader')
    }

    preload() {
        this.image = new ImageContainer(this, 'cubix', 'cubix_fondo');

    }


    create() {
        this.image.create(200, 200)

    }


    update(time, delta) {
        // console.log(time, delta)

    }

}

export default Bootloader