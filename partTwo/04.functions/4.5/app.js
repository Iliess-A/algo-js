(()=>{
    //creating fct calcDistance that will calc the distance between two point in the a 2d space.
    let calcDistance= (a,b)=>{

        //a and b are our point in the space 
        let d = Math.sqrt(Math.pow((b[0]-a[0]),2)+Math.pow((b[1]-a[1]),2));

        // here it's the formula math pow is to power(exposant) and math.sqrt is for square(racine carre)
        return d;  // return the answer
    }
    
    //our point the space
    a=[1,1];
    b=[2,2];
    
    //print the result
    console.log(calcDistance(a,b));

})();