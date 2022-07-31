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
        this.load.image('box', 'container.png');
    }
    create() {
        //--------Container INIT-------
        this.cubix = this.add.image(300, 100, 'cubix')
        .setScale(0.7)
        .setDepth(2);
        this.box = this.add.image(200, 100, 'box');
        this.text = this.add.text(90, 90, 'SCORE', {fontSize: 30});
    
        const container = this.add.container(0, -300);
        container.add([
            this.box,
            this.cubix,
            this.text
        ]);
        this.add.tween({
            targets: [container],
            ease: 'Bounce',
            y: 10,
        });
          //--------Container END-------
        
    }
    update(time, delta) {
       
    }
}

export default Bootloader;