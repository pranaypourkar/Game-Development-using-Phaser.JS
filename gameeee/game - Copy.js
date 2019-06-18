const gameState = {
  speed: 240,
  ups: 380,
  width: 8000,
  height: 676,
};


class StartScene extends Phaser.Scene {
constructor(){
super({ key: 'StartScene' });
}
preload() {

}

create() {
    this.add.text(95, 250, 'Click to Start!', { fontSize: '30px', fill: '#000000' });
    
    this.input.on('pointerup', () => {
      // Add your code below:
      this.scene.stop('StartScene');
      this.scene.start('Scene1')
    });
  }

update() {

}
}


class Scene1 extends Phaser.Scene {
constructor(){
super({ key: 'Scene1' });
}

preload() {

  //this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
  this.load.image('Hlong', 'charac/Hlong.png');
  this.load.image('s3', 'charac/s3.png');
  this.load.image('v3', 'charac/v3.png');
  this.load.image('h2', 'charac/h2.png');
  this.load.image('h3', 'charac/h3.png');
  this.load.image('s2', 'charac/s2.png');
  this.load.image('r32', 'charac/r32.png');
  this.load.image('nail', 'charac/nail.png');
  this.load.image('Vlong', 'charac/Vlong.png');
  this.load.image('house', 'charac/house.png');
  this.load.spritesheet('player', 'bird.png',{ frameWidth: 120, frameHeight: 140});
}

create() {
    gameState.active = true

    gameState.player = this.physics.add.sprite(150, 100, 'player').setScale(0.5);
    gameState.Hlong = this.physics.add.staticGroup();
    gameState.Vlong = this.physics.add.staticGroup(); 
    gameState.s3 = this.physics.add.staticGroup();
    gameState.v3 = this.physics.add.staticGroup();
    gameState.h2 = this.physics.add.staticGroup();    
    gameState.h3 = this.physics.add.staticGroup();
    gameState.s2 = this.physics.add.staticGroup();
    gameState.nail = this.physics.add.staticGroup();
    gameState.r32 = this.physics.add.staticGroup();
    gameState.house = this.physics.add.staticGroup();

    this.createAnimations();

    // set Cameras here
    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height)
    this.physics.world.setBounds(0, 0, gameState.width, gameState.height);
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
    gameState.player.setCollideWorldBounds(true);

    gameState.Hlong.create(0, 660, 'Hlong');
    gameState.Hlong.create(0, 20, 'Hlong');
    gameState.Hlong.create(0, 70, 'Vlong');
    gameState.s3.create(400, 600, 's3');
    gameState.s3.create(830, 190, 's3');
    gameState.v3.create(1100, 500, 'v3');
    gameState.v3.create(1300, 190, 'v3');
    gameState.h2.create(1450, 600, 'h2');
    gameState.v3.create(1750, 550, 'v3');
    gameState.h2.create(1800, 400, 'h2');

    gameState.h3.create(2150, 500, 'h3');
    gameState.s2.create(2150, 600, 's2');

    gameState.v3.create(2550, 550, 'v3');
    gameState.h2.create(2500, 400, 'h2');
    gameState.v3.create(2800, 550, 'v3');
    gameState.v3.create(2800, 190, 'v3');

    gameState.v3.create(3000, 190, 'v3');
    gameState.v3.create(3000, 400, 'v3');

    gameState.v3.create(3200, 190, 'v3');
    gameState.v3.create(3200, 400, 'v3');

    gameState.nail.create(3400, 560, 'nail');
    gameState.nail.create(3600, 560, 'nail');
    gameState.nail.create(3800, 560, 'nail');
    gameState.nail.create(4000, 560, 'nail');

    gameState.Hlong.create(3000, 660, 'Hlong');
    gameState.Hlong.create(3000, 20, 'Hlong');


    gameState.s3.create(4400, 500, 's3');
    gameState.s2.create(4600, 560, 's2');
    gameState.r32.create(4790, 560, 'r32');
    gameState.r32.create(4790, 320, 'r32');

    //dog

    gameState.r32.create(5800, 560, 'r32');



    gameState.Hlong.create(6000, 660, 'Hlong');
    gameState.Hlong.create(6000, 20, 'Hlong');


    gameState.nail.create(6200, 520, 'nail');
    gameState.nail.create(6120, 520, 'nail');
    gameState.nail.create(6280, 520, 'nail');
    
    gameState.h3.create(6200, 500, 'h3');
    gameState.s2.create(6200, 600, 's2');

   // bat

    gameState.nail.create(7000, 520, 'nail');
    gameState.nail.create(6920, 520, 'nail');
    gameState.nail.create(7080, 520, 'nail');

    gameState.h3.create(7000, 500, 'h3');
    gameState.s2.create(7000, 600, 's2');

    gameState.house.create(7800, 490, 'house');





    this.physics.add.collider(gameState.player, gameState.Hlong);
    this.physics.add.collider(gameState.player, gameState.Vlong);
    this.physics.add.collider(gameState.player, gameState.s3);
    this.physics.add.collider(gameState.player, gameState.v3);
    this.physics.add.collider(gameState.player, gameState.h2);    
    this.physics.add.collider(gameState.player, gameState.h3);
    this.physics.add.collider(gameState.player, gameState.s2);
    this.physics.add.collider(gameState.player, gameState.nail);
    this.physics.add.collider(gameState.player, gameState.r32);

    //control and velocity
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

createAnimations() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('player', { start: 4, end: 5 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('player', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

  }


update() 
{

  //control and velocity
  if (gameState.cursors.left.isDown) 
  {
        gameState.player.flipX = true;
        gameState.player.setVelocityX(-gameState.speed);
        gameState.player.anims.play('run', true);
  } 
  else if (gameState.cursors.right.isDown) 
  {
        gameState.player.flipX = false;
        gameState.player.setVelocityX(gameState.speed);
        gameState.player.anims.play('run', true);
  }
  else if (gameState.cursors.up.isDown) 
  {
        gameState.player.flipX = false;
        gameState.player.setVelocityY(-gameState.speed);
        gameState.player.anims.play('jump', true);
  }  
  else 
  {
    gameState.player.setVelocityX(0); 
    gameState.player.anims.play('idle', true);
  }
  
}

}





const config = {
  type: Phaser.AUTO,
  width: 8000, //500
  height: 676,
  fps: {target: 60},
  backgroundColor: "b9baff",
  scene: [StartScene, Scene1],
  // Add the physics property below: 
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      //debug: true,   //show rectangular box to debug
      enableBody: true
    }
    
  }
  
};

const game = new Phaser.Game(config);
