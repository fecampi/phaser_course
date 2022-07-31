class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {

    }
    create() {

        // -------Mapeamento parecido com formato comum de html+javascript
        this.input.keyboard.on('keydown', (evento) => {
            if(evento.key === 'b') {
                console.log('Pressionou a tecla b', evento);
            }
        });



        //-------Mapeamento parecido com formato comum de html+javascript clean_code------
        // this.input.keyboard.on('keydown', (evento) => {
        //     function keyPress(type) {
        //         var key
        //         const keys = {
        //             "0": () => console.log('key 0'),
        //             "1": () => console.log('key 1'),
        //             "2": () => console.log('key 2'),
        //             "3": () => console.log('key 3'),
        //             "4": () => console.log('key 4'),
        //             "5": () => console.log('key 5'),
        //             "6": () => console.log('key 6'),
        //             "default": () => { return },
        //         };
        //         (keys[type] || keys['default'])();
        //     }
        //     keyPress(evento.key)
        // });


        // //----Obter todas as keys mapeaveis por padrão----
        // const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        // console.log(keyCodes)


        // //----Mapeando uma key-----
        // this.keyA = this.input.keyboard.addKey(keyCodes.A);

        // //Apertou A
        // this.keyA.on('down', () => {
        //     console.log('Pressionado a key A');
        // });

        // //Soltou A
        // this.keyA.on('up', () => {
        //     console.log('Soltou a key A');
        // });

        //------ mapear mais de uma diretamente
        // this.keys = this.input.keyboard.addKeys('m,n');
        // this.keys.m.on('down', () => {
        //     console.log('Pressionado a key m');
        // });
        // this.keys.n.on('down', () => {
        //     console.log('Pressionado a key n');
        // });


        //--------Mapear mais de uma com apelido---------
        // this.keys = this.input.keyboard.addKeys({
        //     setaCima: keyCodes.UP,
        //     setaBaixo: keyCodes.DOWN,
        // });
        // this.keys.setaCima.on('down', () => {
        //     console.log('Presionado key pra cima');
        // });
        // this.keys.setaBaixo.on('down', () => {
        //     console.log('Pressionado key pra baixo');
        // });


       //----Defaults: Down, left, right, shift, space, up
    //    this.keysDefault = this.input.keyboard.createCursorKeys();
    //    console.log(this.keysDefault)
    //    this.keysDefault.left.on('down', () => {
    //        console.log('left');
    //    });
    //    this.keysDefault.right.on('down', () => {
    //        console.log('right');
    //    });

        
       //Combo: Combinação de teclas
    //    const keyCodes = Phaser.Input.Keyboard.KeyCodes;
    //    this.combo = this.input.keyboard.createCombo([keyCodes.DOWN, keyCodes.RIGHT], {resetOnMatch: true});
    //    this.input.keyboard.on('keycombomatch', () => {
    //        console.log('Excutar combo');
    //    });

    }
    update(time, delta) {

        //Verificar key o tempo todo
        // if (this.keyA.isDown) {
        //     console.log('key A está pressionada');
        // } else if (this.keyA.isUp) {
        //     console.log('key A não está pressionada');
        // }


        //Verificar a key só uma vez(sem ficar carregando toda hora)
        // if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
        //     console.log('key A está pressionada só uma vez');
        // } else if (Phaser.Input.Keyboard.JustUp(this.keyA)) {
        //     console.log('key A não está pressionada uma vez');
        // }


        // if(this.cursor.left.isDown) {
        //     console.log('Se ha presionado la left');
        // }
        // if(this.keys.arriba.isDown) {
        //     console.log('Se ha presionado la ARRIBA');
        // }
        // if(Phaser.Input.Keyboard.JustDown(this.keyA)) {
        //     console.log('Has presionado la key A');
        // }

        // if(this.keyA.isDown) {
        //     console.log('Has presionado la key A');
        // } else if(this.keyA.isUp) {
        //     console.log('Soltou a key A');
        // }      
    }
}

export default Bootloader;