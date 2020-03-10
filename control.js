function control(){
    if(keyIsDown(65)){
        player.velocityX = -speed;
      }
      else if(keyIsDown(68)){
        player.velocityX = speed;
      }
      
      if(keyIsDown(32) && jumpstate === true){
        player.velocityY = -15;
      }
      if(keyIsDown(81) && player.width < 100 && particals != 0){
        player.width = player.width + 1;
        player.height = player.width;
        particals = particals - 0.5;
      }
      else if(keyIsDown(69) && player.width >= 2 && particals != 0){
        player.width = player.width - 1;
        player.height = player.width;
        particals = particals - 0.5;
      }
      if(player.isTouching(ground)){
        jumpstate = true;
      }
      else{
        jumpstate = false;
      }
}