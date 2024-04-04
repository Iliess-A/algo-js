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
            if (this.topLeftXpos < otherRectangle.topLeftXpos + otherRectangle.width &&
                this.topLeftXpos + this.width > otherRectangle.topLeftXpos && 
                this.topLeftYpos < otherRectangle.topLeftYpos + otherRectangle.length &&
                this.topLeftYpos + this.length > otherRectangle.topLeftYpos) return true ; return false ;
        }
     }

    let thousoundRec =()=>{

        let allRectangle=[];

     for(i=0;i<=1000;i++){
        
        let Xpos= Math.floor(Math.random()*1000);
        let Ypos= Math.floor(Math.random()*1000);
        let width= Math.floor(Math.random()*10);
        let length= Math.floor(Math.random()*10);

        allRectangle.push(new Rectangle(Xpos,Ypos,width,length));

        }

     return allRectangle
     }


     let mes_rect=thousoundRec();
     //console.log(mes_rect);
     let cpt=0;

     for (i=0;i<mes_rect.length;i++){

        for(j=i+1 ; j<mes_rect.length ; j++){

            if (mes_rect[i].collides(mes_rect[j])) cpt++;
        }
     }

    console.log(`il y'as eu ${cpt} collisions`)

})();
