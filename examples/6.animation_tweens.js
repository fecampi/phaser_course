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

        //Obter todos as propriedades que se pode modificar [[Prototype]] 
        // this.cubix = this.add.image(100, 100, 'cubix');
        // console.log(this.cubix);

        //Criando o tween
        this.cubix = this.add.image(100, 100, 'cubix');
        this.cubix_fondo = this.add.image(160, 100, 'cubix_fondo');
        this.tweens = this.add.tween({
            targets: [this.cubix, this.cubix_fondo],
            // ease: 'Bounce',
            duration: 1000,
            y: 300,
            // x: {
            //     value: 200,
            //     ease: 'Elastic',
            //     duration: 3000
            // },
            //Repetição infinita 0 e -1
            repeat: -1,
            // vai e volta
            yoyo: true,
            //Demora um segundo e começa
            delay: 100,
            // vai e volta demorando um segundo entre e voltar e ir
            hold: 1000,
            // tempo até dar o Delay
            repeatDelay: 1000,
            //--------Principais eventos----------
            onStart: () => {
                console.log('Iniciando o tween');
            },
            onComplete: () => {
                console.log('Completou');
            },
            //Fazer algo
            onRepeatParams: [this.cubix],
            onRepeat: (tween, obj, target) => {
                target.setTint(0xff0);
                console.log('Repetiu');
            },
            onYoyoParams: [this.cubix],
            onYoyo: (tween, obj, target) => {
                target.setTint(0xff0000);
                console.log('Yoyo');
            },
        });
    }
    update(time, delta) {

    }
}

export default Bootloader;