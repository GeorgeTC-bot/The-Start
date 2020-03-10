class platform{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        var jumppad = createSprite(x + height/2,y,width - 4, 1);
    }
}