function bounceOff(ab1,ab2){
    if (ab1.x - ab2.x < ab2.width/2 + ab1.width/2
      && ab2.x - ab1.x < ab2.width/2 + ab1.width/2) {
   ab1.velocityX =ab1.velocityX * (-1);
    ab2.velocityX = ab2.velocityX * (-1);
  }
  if (ab1.y - ab2.y < ab2.height/2 + ab1.height/2
    && ab2.y - ab1.y <ab2.height/2 + ab1.height/2){
   ab1.velocityY = ab1.velocityY * (-1);
    ab2.velocityY = ab2.velocityY * (-1);
  }
  }
  function isTouching(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2&&
      object2.x-object1.x<object1.width/2+object2.width/2&&object1.y-object2.y<object1.width/2+object2.width/2&&
      object2.y-object1.y<object1.width/2+object2.width/2){
    return true;
        
       }
     else{
       return false;
      
     }
  }