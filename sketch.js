var database,form,game,player
var gameState=0
var playerCount=0
var bgimg
var playerimg,playerimg2
var player1,player2
var players,allPlayers
var bush,bushImage
function preload(){
    bgimg=loadImage("images/bg.jpg")
    playerimg=loadAnimation("images/player1.gif")
   playerimg2=loadAnimation("images/player2.png")
   bushImage=loadImage("images/bush.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background(bgimg);
  if(playerCount===2){
      background("green")
      game.update(1)
  }
  if(gameState===1){
      game.play()
  }
}
