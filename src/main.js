import Bootloader from './scenes/Bootloader.js'

const config = {
    title: 'Phaser course',
    url: 'http://phaser..',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: 'container',
    pixelArt: true,
    backgroundColor: '#34495e',

    banner: {
        hidePhaser: true,
        text: '#000000',
        background: '#FFFFFF'
    },



    scene: [Bootloader]

}
const game = new Phaser.Game(config)

