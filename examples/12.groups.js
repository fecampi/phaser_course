class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.atlas('monedas', 'moeda/monedas.png', 'moeda/monedas_atlas.json');
        this.load.animation('monedaAnim', 'moeda/monedas_anim.json');
    }
    create() {
        this.group = this.add.group({
            removeCallback: () => {
                console.log('moeda destruida!!')
            }
        })
        //Criar primeira moeda
        this.moneda = this.add.sprite(100, 100, 'monedas');
        this.group.add(this.moneda)
        //Criar a segunda
        this.group.create(200, 100, 'monedas');
        //Criar a terceira
        this.group.create(300, 100, 'monedas');
        //Modificar todas
        this.group.children.iterate((moneda) => {
            moneda.setScale(4);
        });
        //Animar sprite_sheet
        this.group.playAnimation('moneda')
        //Remover a segunda
        this.group.getChildren()[1].destroy()

        // Animação tweens
        this.add.tween({
            targets: this.group.getChildren(),
            y: 200,
            yoyo: true,
            duration: 500,
            repeat: -1,
            ease: 'Power1'
        });

    }
    update(time, delta) {

    }
}

export default Bootloader;