const config = {
    title: 'Phaser course',
    url: 'http://phaser..',
    version: '0.0.1',
    //WebGl ou Canvas
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



    scene: {init, preload,create,update}

}
const game = new Phaser.Game(config)

function init() {
    console.log('init')
}

function preload() {
    console.log('preload')
}

function create() {
    console.log('create')
}

function update(time, delta)  {
console.log('update:', time, delta)
}



