(() => {
    
    class circle {

        constructor(xPos,yPos,radius){

            this.xPos=xPos;
            this.yPos=yPos;
            this.radius=radius;
        }

        get surface(){
            return Math.pow(this.radius,2)*Math.PI;
        }
        
        move(xOffset, yOffset){

            this.xPos += xOffset;
            this.yPos += yOffset;
        }

    }

    let cerc1 = new circle(5,5,5);
    console.log(cerc1.surface);
    console.log(cerc1.xPos+" "+cerc1.yPos);
    cerc1.move(5,5);
    console.log(cerc1.xPos+" "+cerc1.yPos);

})();
