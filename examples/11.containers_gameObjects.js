class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
    }
}

class ImageContainer extends Phaser.GameObjects.Container {
    constructor(scene, name) {
        super(scene);
        this.scene = scene;
        this.name = name
        this.scene.load.path = './assets/'
        this.scene.load.image(name)
        this.border = 10
    }


    create(x, y) {
        const imageMovie = this.scene.add.image(0,0, this.name)
        const rectangle = this.scene.add.rectangle(-this.border/2, 0, imageMovie.width+this.border, imageMovie.height+this.border, 0x6666ff);
        const container = this.scene.add.container(x, y);
        container.add([
            rectangle,
            imageMovie
        ]);
        this.timeline = this.scene.tweens.timeline({
            targets: [container],
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



class add {
    static button(x, y, label, scene, callback) {
        return new Button(x, y, label, scene, callback)
    }

    static imageContainer(scene, name) {
        return new ImageContainer(scene, name);
    }
}





class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.image = add.imageContainer(this, 'movies/Rectangle0');

    }
    create() {
        this.button = add.button(500, 200, 'Iniciar', this, () => console.log('Iniciar'))
        this.image.create(200, 200)

    }
    update(time, delta) {

    }
}

export default Bootloader;