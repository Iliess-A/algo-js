(()=>{
    
    //creating fuction named calcSurface;
    
     let calcSurface = ()=> {

        // here i ask the user to enter width(w) and length(l) 
        let w= parseFloat(window.prompt(`quelle est la largeur de votre rectangle`));
        let l= parseFloat(window.prompt(`quelle est la longueur de votre rectangle`));

        // here i define the surface formula
        surface=l*w;
        
        //and then i return the answere
        return surface;

    }
    // now i print the result
    console.log(calcSurface());

})();