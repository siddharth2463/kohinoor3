class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1=createSprite(1000,100)
   player1.addAnimation("player1",playerimg)
   player2=createSprite(100,100)
   player2.addAnimation("player2",playerimg2)
   player1.scale=0.5;
   player2.scale=0.5;
   players=[player1,player2]
   for(var i=0;i<5;i++){
       bush=createSprite(random(200,displayWidth),random(200,displayHeight),10,10)
       bush.addImage(bushImage)
   }
        }
        play(){
            form.hide()
            drawSprites()
            Player.getPlayerInfo()
            player.getPos()
            if(allPlayers!==undefined){
                var index=0
                for(var plr in allPlayers){
                index=index+1
                players[index-1].x=allPlayers[plr].x
                players[index-1].y=allPlayers[plr].y
                if(index===player.index){
                    fill("red")
                }
                else(fill("black"))
                textSize(20)
                text(allPlayers[plr].name,players[index-1].x-100,players[index-1].y+300)
                }
            }
            
        }
    }