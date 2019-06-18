let Dragon;
//gamestate object
const gameState = {};


function preload() {

	  // Load in the sprite here!
this.load.image('Dragon', 'Dragon.png');

//load background image
this.load.image('sky', 'sky.jpg');
}


function create() {
  // Change "Codey's Adventures\n  in Code World" to the name of your game
  this.add.text(50, 100, "Pranay's Adventures\n  in Code World", { font: "40px Times New Roman", fill: "#ffa0d0"});

  // Change "by Codecademy" to your name!
  this.add.text(130, 300, "by Pranay", { font: "20px Times New Roman", fill: "#ffa0d0"});

  //create circle
  let circle4 = this.add.circle(300, 400, 10, 0x00E030);
  gameState.circle = this.add.circle(250,350,5,0xFFF070);

  //add background image
  this.add.image(0,0,'sky');

// Create a sprite game object here!
  Dragon = this.add.sprite(40, 80, 'Dragon');



}
function update(){
Dragon.x+=1;
gameState.circle.y+=1;

}




const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
	create,
    preload,
    update

	}
};

const game = new Phaser.Game(config);
