(() => {
    
    class Rectangle{
        constructor(topLeftXpos,topLeftYpos,width,length){

            this.topLeftXpos=topLeftXpos;
            this.topLeftYpos=topLeftYpos;
            this.width=width;
            this.length=length;

        }

        collides(otherRectangle){
            
            //formule qui regarde si les surface se rencontre
            if (this.topLeftXpos<otherRectangle.topLeftXpos+otherRectangle.width && this.topLeftXpos + this.width>otherRectangle.topLeftXpos && this.topLeftYpos<otherRectangle.topLeftYpos+otherRectangle.length && this.topLeftYpos+this.length>otherRectangle.topLeftYpos) return true ;
        }
     }

     let allRectangle=[];



     let randomR=()=>{
       return Math.floor(Math.random());
     }

     for(i=0;i<=1000;i++){

        allRectangle.push(new Rectangle[randomR,randomR,randomR,randomR]);

     }
    
     console.log(allRectangle());
})();
