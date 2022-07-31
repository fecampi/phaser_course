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
        //Criando uma timeline em partes
        // this.cubix = this.add.image(100, 100, 'cubix');
        // this.timeline = this.tweens.createTimeline();
        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 300,
        //     scale:10
        // });
        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 200
        // });
        // this.timeline.play();

        //Criando uma timeline de uma vez
        this.cubix = this.add.image(100, 100, 'cubix');
        this.timeline = this.tweens.timeline({
            targets: [this.cubix],
            duration: 1000,
            totalDuration: 4000,
            paused: true,
            //excutar duas vezes
            loop: 2,
            tweens: [
                {
                    x: 300,
                    duration: 1500
                },
                {
                    y: 300,
                    offset: "-=500"
                },
                {
                    x: 100
                },
                {
                    y: 100
                },
            ]
        });
        this.timeline.play();
    }
    update(time, delta) {

    }
}

export default Bootloader;