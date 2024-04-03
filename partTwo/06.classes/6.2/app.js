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

     let rect1=new Rectangle(8,5,5,8);
     let rect2=new Rectangle(6,10,10,10);

     console.log(rect1.collides(rect2));

})();
