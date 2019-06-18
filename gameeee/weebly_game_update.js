const gameState = {
  speed: 240,
  ups: 380,
  width: 8000,
  height: 676,
  flag_dog: 1,
  flag_bat: 1,
  score: 0,
};


class StartScene extends Phaser.Scene {
constructor(){
super({ key: 'StartScene' });
}
preload() {

}

create() {
    this.add.text(420, 100, 'Game Controls', { fontSize: '48px', fill: '#000000' });
    this.add.text(180, 200, '-> Up-Arrow key for jump', { fontSize: '30px', fill: '#000000' });
    this.add.text(180, 260, '-> Right-Arrow key for moving in right direction', { fontSize: '30px', fill: '#000000' });
    this.add.text(180, 320, '-> Left-Arrow key for moving in left direction', { fontSize: '30px', fill: '#000000' });

    this.add.text(400, 500, 'Click to Start!', { fontSize: '48px', fill: '#000000' });
    
    this.input.on('pointerup', () => {
      // Add your code below:
      this.scene.stop('StartScene');
      this.scene.start('Scene1')
    });
  }

update() {

}
}

class EndScene extends Phaser.Scene {
constructor(){
super({ key: 'EndScene' });
}
preload() {

}

create() {
    gameState.scoreText = this.add.text(450, 100, 'Your Score: 0', { fontSize: '30px', fill: '#000000' });
    gameState.scoreText.setText(`Score:       ${gameState.score}`);
    this.add.text(400, 250, 'Thanks for Playing :)', { fontSize: '36px', fill: '#000000' });
    this.add.text(380, 300, 'More Levels Coming Soon', { fontSize: '36px', fill: '#000000' });
    this.add.text(330, 400, 'Click to Play Again', { fontSize: '55px', fill: '#000000' });

      this.input.on('pointerup', () => {
    //  this.anims.resumeAll();
    //  this.scene.restart();

      this.scene.stop('EndScene');
      this.scene.start('Scene1')
   })
    

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
  this.load.image('Hlong', '/files/theme/img/Hlong.png');
  this.load.image('s3', '/files/theme/img/s3.png');
  this.load.image('v3', '/files/theme/img/v3.png');
  this.load.image('h2', '/files/theme/img/h2.png');
  this.load.image('h3', '/files/theme/img/h3.png');
  this.load.image('s2', '/files/theme/img/s2.png');
  this.load.image('r32', '/files/theme/img/r32.png');
  this.load.image('nail', '/files/theme/img/nail.png');
  this.load.image('Vlong', '/files/theme/img/Vlong.png');
  this.load.image('house', '/files/theme/img/house.png');
  this.load.spritesheet('player', '/files/theme/img/bird.png',{ frameWidth: 120, frameHeight: 140});
  this.load.spritesheet('bat', '/files/theme/img/bat.png',{ frameWidth: 192, frameHeight: 192});
  this.load.spritesheet('dog', '/files/theme/img/dog.png',{ frameWidth: 120, frameHeight: 74});  
  this.load.spritesheet('worm', '/files/theme/img/worm.png',{ frameWidth: 64, frameHeight: 32});
  this.load.image('burst', '/files/theme/img/burst.png');

}

create() {
    gameState.active = true

    gameState.player = this.physics.add.sprite(10, 500, 'player').setScale(0.6); //10,500
    gameState.bat = this.physics.add.sprite(7000, 300, 'bat');
    gameState.bat.body.setAllowGravity(false);


    gameState.worm1 = this.physics.add.sprite(850, 300, 'worm');
    gameState.worm2 = this.physics.add.sprite(1450, 300, 'worm');
    gameState.worm3 = this.physics.add.sprite(1900, 300, 'worm');
    gameState.worm4 = this.physics.add.sprite(2400, 300, 'worm');
    gameState.worm5 = this.physics.add.sprite(3500, 300, 'worm');
    gameState.worm6 = this.physics.add.sprite(3700, 300, 'worm');
    gameState.worm7 = this.physics.add.sprite(3900, 300, 'worm');
    gameState.worm8 = this.physics.add.sprite(4650, 300, 'worm');
    gameState.worm9 = this.physics.add.sprite(6000, 300, 'worm');
    gameState.worm10 = this.physics.add.sprite(6600, 300, 'worm');


    gameState.dog = this.physics.add.sprite(5000, 590, 'dog').setScale(1.5);
    gameState.dog.body.setAllowGravity(false);
   

    gameState.Hlong = this.physics.add.staticGroup();
    gameState.Vlong = this.physics.add.staticGroup(); 
    gameState.s3 = this.physics.add.staticGroup();
    gameState.v3 = this.physics.add.staticGroup();
    gameState.h2 = this.physics.add.staticGroup();    
    gameState.h3 = this.physics.add.staticGroup();
    gameState.s2 = this.physics.add.staticGroup();
    gameState.burst = this.physics.add.staticGroup();
    gameState.r32 = this.physics.add.staticGroup();
    gameState.house = this.physics.add.staticGroup();




    //nail
    gameState.nail1 = this.physics.add.sprite(3400, 560, 'nail').setScale(0.5);
    gameState.nail2 = this.physics.add.sprite(3600, 560, 'nail').setScale(0.5);
    gameState.nail3 = this.physics.add.sprite(3800, 560, 'nail').setScale(0.5);
    gameState.nail4 = this.physics.add.sprite(4000, 560, 'nail').setScale(0.5);
    gameState.nail5 = this.physics.add.sprite(6200, 520, 'nail');
    gameState.nail6 = this.physics.add.sprite(6120, 520, 'nail');
    gameState.nail7 = this.physics.add.sprite(6280, 520, 'nail');
    gameState.nail8 = this.physics.add.sprite(7000, 520, 'nail');
    gameState.nail9 = this.physics.add.sprite(6920, 520, 'nail');
    gameState.nail10 = this.physics.add.sprite(7080, 520, 'nail');

    gameState.nail1.body.setAllowGravity(false);
    gameState.nail2.body.setAllowGravity(false);
    gameState.nail3.body.setAllowGravity(false);
    gameState.nail4.body.setAllowGravity(false);
    gameState.nail5.body.setAllowGravity(false);
    gameState.nail6.body.setAllowGravity(false);
    gameState.nail7.body.setAllowGravity(false);
    gameState.nail8.body.setAllowGravity(false);
    gameState.nail9.body.setAllowGravity(false);
    gameState.nail10.body.setAllowGravity(false);


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

    gameState.Hlong.create(3000, 660, 'Hlong');
    gameState.Hlong.create(3000, 20, 'Hlong');


    gameState.s3.create(4400, 500, 's3');
    gameState.s2.create(4600, 560, 's2');
    gameState.r32.create(4790, 560, 'r32');
    gameState.r32.create(4790, 320, 'r32');


    gameState.r32.create(5800, 560, 'r32');



    gameState.Hlong.create(6000, 660, 'Hlong');
    gameState.Hlong.create(6000, 20, 'Hlong');

    
    gameState.h3.create(6200, 500, 'h3');
    gameState.s2.create(6200, 600, 's2');


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
    
    this.physics.add.collider(gameState.worm1, gameState.Hlong);
    this.physics.add.collider(gameState.worm3, gameState.Hlong);
    this.physics.add.collider(gameState.worm4, gameState.Hlong);
    this.physics.add.collider(gameState.worm5, gameState.Hlong);
    this.physics.add.collider(gameState.worm6, gameState.Hlong);
    this.physics.add.collider(gameState.worm7, gameState.Hlong);
    this.physics.add.collider(gameState.worm2, gameState.h2);
    this.physics.add.collider(gameState.worm8, gameState.s2);
    this.physics.add.collider(gameState.worm9, gameState.Hlong);
    this.physics.add.collider(gameState.worm10, gameState.Hlong);


    //this.physics.add.collider(gameState.house, gameState.player);

    this.physics.add.overlap(gameState.player, gameState.house, () => {
    //this.add.text(gameState.player.x-100, 100, 'You reached the exit!\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    this.scene.stop('Scene1');
    this.scene.start('EndScene')

 //   this.input.on('pointerup', () => {
 //     this.anims.resumeAll();
 //     this.scene.restart();
 //   })
    })


    this.physics.add.overlap(gameState.player, gameState.dog, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.bat, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail1, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })


    this.physics.add.overlap(gameState.player, gameState.nail2, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail3, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail4, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail5, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })


    this.physics.add.overlap(gameState.player, gameState.nail6, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail7, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail8, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    }) 

    this.physics.add.overlap(gameState.player, gameState.nail9, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })

    this.physics.add.overlap(gameState.player, gameState.nail10, () => {
    this.add.text(gameState.player.x-100, 100, 'Game Over\nClick to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
    this.physics.pause();
    gameState.active = false;
    this.anims.pauseAll();

    gameState.burst.create(gameState.player.x, gameState.player.y, 'burst');
    gameState.player.destroy(true);

    this.input.on('pointerup', () => {
      this.anims.resumeAll();
      this.scene.restart();
    })
    })        

      this.physics.add.overlap(gameState.player, gameState.worm1, () => {
      gameState.score += 100;
      gameState.worm1.anims.pause();
      gameState.worm1.destroy(true  );
      gameState.test = this.add.text(gameState.worm1.x+10, gameState.worm1.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });

      this.physics.add.overlap(gameState.player, gameState.worm2, () => {
      gameState.score += 100;
      gameState.worm2.anims.pause();
      gameState.worm2.destroy(true);
      gameState.test = this.add.text(gameState.worm2.x+10, gameState.worm2.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            
    });
      this.physics.add.overlap(gameState.player, gameState.worm3, () => {
      gameState.score += 100;
      gameState.worm3.anims.pause();
      gameState.worm3.destroy(true);
      gameState.test = this.add.text(gameState.worm3.x+10, gameState.worm3.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            
    });          
      this.physics.add.overlap(gameState.player, gameState.worm4, () => {
      gameState.score += 100;
      gameState.worm4.anims.pause();
      gameState.worm4.destroy(true);
      gameState.test = this.add.text(gameState.worm4.x+10, gameState.worm4.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });
      this.physics.add.overlap(gameState.player, gameState.worm5, () => {
      gameState.score += 100;
      gameState.worm5.anims.pause();
      gameState.worm5.destroy(true);
      gameState.test = this.add.text(gameState.worm5.x+10, gameState.worm5.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            
    });
      this.physics.add.overlap(gameState.player, gameState.worm6, () => {
      gameState.score += 100;
      gameState.worm6.anims.pause();
      gameState.worm6.destroy(true);
      gameState.test = this.add.text(gameState.worm6.x+10, gameState.worm6.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });
      this.physics.add.overlap(gameState.player, gameState.worm7, () => {
      gameState.score += 100;
      gameState.worm7.anims.pause();
      gameState.worm7.destroy(true);
      gameState.test = this.add.text(gameState.worm7.x+10, gameState.worm7.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });
      this.physics.add.overlap(gameState.player, gameState.worm8, () => {
      gameState.score += 100;
      gameState.worm8.anims.pause();
      gameState.worm8.destroy(true);
      gameState.test = this.add.text(gameState.worm8.x+10, gameState.worm8.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });
      this.physics.add.overlap(gameState.player, gameState.worm9, () => {
      gameState.score += 100;
      gameState.worm9.anims.pause();
      gameState.worm9.destroy(true);
      gameState.test = this.add.text(gameState.worm9.x+10, gameState.worm9.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });
      this.physics.add.overlap(gameState.player, gameState.worm10, () => {
      gameState.score += 100;
      gameState.worm10.anims.pause();
      gameState.worm10.destroy(true);
      gameState.test = this.add.text(gameState.worm10.x+10, gameState.worm10.y - 40, '+100', { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });            

    });


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
     this.anims.create({
      key: 'bat_run',
      frames: this.anims.generateFrameNumbers('bat', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
     this.anims.create({
      key: 'dog_run',
      frames: this.anims.generateFrameNumbers('dog', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
     this.anims.create({
      key: 'worm_run',
      frames: this.anims.generateFrameNumbers('worm', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

     //anime
      gameState.bat.anims.play('bat_run', true);
      gameState.dog.anims.play('dog_run', true);
      gameState.worm1.anims.play('worm_run', true);
      gameState.worm2.anims.play('worm_run', true);
      gameState.worm3.anims.play('worm_run', true);
      gameState.worm4.anims.play('worm_run', true);
      gameState.worm5.anims.play('worm_run', true);
      gameState.worm6.anims.play('worm_run', true);
      gameState.worm7.anims.play('worm_run', true);
      gameState.worm8.anims.play('worm_run', true);
      gameState.worm9.anims.play('worm_run', true);
      gameState.worm10.anims.play('worm_run', true);

  }



update() 
{
   if (gameState.active) {

         //bat motion
         if(gameState.bat.x == 7000)
         {
            gameState.flag_bat = 1;
         }
         if(gameState.bat.x == 6200)
         {
            gameState.flag_bat = 0;
         }

         if(gameState.flag_bat==1  && gameState.player.x >= 5800)
         {
          gameState.bat.flipX = false;
          gameState.bat.x -= 8;
         }
         else if( gameState.flag_bat==0 && gameState.player.x >= 5800)
         {
          gameState.bat.flipX = true;
          gameState.bat.x += 8;
         }
         
         //dog motion
           if(gameState.dog.x == 5000)
         {
            gameState.flag_dog = 1;
         }
         if(gameState.dog.x == 5600)
         {
            gameState.flag_dog = 0;
         }

         if(gameState.flag_dog==1 && gameState.player.x >= 4500)
         {
          gameState.dog.flipX = false;
          gameState.dog.x += 8;
         }
         else if( gameState.flag_dog==0 && gameState.player.x >= 4500)
         {
          gameState.dog.flipX = true;
          gameState.dog.x -= 8;
         }




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


}


const config = {
  type: Phaser.AUTO,
  width: 1200, //8000
  height: 676,
  fps: {target: 60},
  backgroundColor: "b9baff",
  scene: [StartScene, Scene1, EndScene],
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
