class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        // https://gammafp.com/tools/
        // https://ttf2png.ga/
        this.load.image('fonteX', 'fonts/fonteX.png');
        this.load.json('fonteX_json', 'fonts/fonteX.json');
    }
    create() {

     
        const fonteXConfig = this.cache.json.get('fonteX_json');
        this.cache.bitmapFont.add('name_fontX', Phaser.GameObjects.RetroFont.Parse(this, fonteXConfig));
        this.texto = this.add.bitmapText(50, 100, 'name_fontX', 'PUNTOS 0', 30, 0).setTint(0xffee00);
        this.pontos = 0;

    }
    update(time, delta) {
        this.pontos++;
        this.texto.setText('SCORE ' + this.pontos);
       
    }
}

export default Bootloader;