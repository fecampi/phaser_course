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
        this.cubix = this.add.image(100, 100, 'cubix').setScale(2);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor.space.on('down', () => {
            this.cubix.setTint(0xff0000);
        });
        this.cursor.space.on('up', () => {
            this.cubix.setTint(0xffffff);
        });
    }
    update(time, delta) {
        if (this.cursor.up.isDown) {
            this.cubix.y -= 2;
        }
        if (this.cursor.down.isDown) {
            this.cubix.y += 2;
        }
        if (this.cursor.right.isDown) {
            this.cubix.x += 2;
        }
        if (this.cursor.left.isDown) {
            this.cubix.x -= 2;
        }
    }
}

export default Bootloader;