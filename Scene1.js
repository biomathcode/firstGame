class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame')
    }
    preload() {
        this.load.image('background', 'asserts/background.png')

        this.load.audio('audio_beam', ['sounds/beam.ogg', 'sounds/beam.mp3'])
        this.load.audio('audio_pickup', ['sounds/pickup.mp3', 'sounds/pickup.ogg'])
        this.load.audio('audio_explosion', ['sounds/explosion.mp3', 'sounds/explosion.ogg'])
        this.load.audio('music', ['sounds/sci-fi_platformer12.mp3', 'sounds/sci-fi_platformer12.ogg'])


        this.load.spritesheet('ship', 'asserts/ship.png', {
            frameWidth: 16, 
            frameHeight: 16,  
        })
        this.load.spritesheet('ship2', 'asserts/ship2.png', {
            frameWidth: 32,
            frameHeight: 16,
        })
        this.load.spritesheet('ship3', 'asserts/ship3.png', {
            frameWidth: 32, 
            frameHeight: 32
        })
        this.load.spritesheet('explosion', 'asserts/explosion.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet('power-up', 'asserts/power-up.png', {
            frameWidth: 16, 
            frameHeight: 16
        })
        this.load.spritesheet('player', 'asserts/shipplayer.png', {
            frameWidth: 16,
            frameHeight: 24
        })
        this.load.spritesheet('beam', 'asserts/beam.png', {
            frameWidth: 16,
            frameHeight: 16,
        })
    }

    create() {
        this.add.text(20, 20, "Loading Game....")
        this.scene.start('playGame')

        this.anims.create({
            key: "ship1_anim", 
            frames: this.anims.generateFrameNumbers('ship'),
            frameRate: 20,
            repeat: -1,
        })
        this.anims.create({
            key: "ship2_anim", 
            frames: this.anims.generateFrameNumbers('ship2'),
            frameRate: 20,
            repeat: -1,
        })
        this.anims.create({
            key: "ship3_anim", 
            frames: this.anims.generateFrameNumbers('ship3'),
            frameRate: 20,
            repeat: -1,
        })
        this.anims.create({
            key: "explode", 
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key: "red", 
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 0,
                end: 1,
            }),
            frameRate: 20, 
            repeat: -1,
        })
        this.anims.create({
            key: 'gray', 
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1,
        })
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
          });
        this.anims.create({
            key: "beam_anim", 
            frames: this.anims.generateFrameNumbers('beam'),
            frameRate: 20,
            repeat: -1
        })
        
    }
}