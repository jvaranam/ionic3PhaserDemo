import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Phaser from "phaser-ce";





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private phaserObj:any;
	//private that:any;
  constructor(public navCtrl: NavController) {
  	//this.that = this;
  }

  ionViewDidLoad(){
  	this.phaserObj = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'game0', { preload: this.preload.bind(this), create: this.create.bind(this), update: this.update.bind(this) });
  }


  preload(){
  		this.phaserObj.load.image('sky', 'assets/icon/phaser/demo1/sky.png');
	    this.phaserObj.load.image('ground', 'assets/icon/phaser/demo1/platform.png');
	    this.phaserObj.load.image('star', 'assets/icon/phaser/demo1/star.png');
	    this.phaserObj.load.spritesheet('dude', 'assets/icon/phaser/demo1/dude.png', 32, 48);

  	

    
  }

  create() {

  	this.phaserObj.add.sprite(0, 0, 'star');


  	this.phaserObj.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    this.phaserObj.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    let platforms = this.phaserObj.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    let ground = platforms.create(0, this.phaserObj.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    let ledge = platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;
	}
 update() {
 	//console.log("its me update");
}

generateImage(_event){
	
	var dataURL = this.phaserObj.canvas.toDataURL(); 
	var button:any;
	button = document.getElementById('btn-download');
	button.href = dataURL;
	//image.download = 'test.png';

	//var canvas = document.getElementById('game0');

	//_event.href = document.getElementById('game0').toDataURL();
	//_event.download = 'test.png';
	button.download ="my-file-name.png"
	//debugger;
	//
	//var dt = canvas.toDataURL('image/png');

	//var image = new Image();
	/*image.src = .toDataURL();
    image.download = 'test.png';*/
}

}
