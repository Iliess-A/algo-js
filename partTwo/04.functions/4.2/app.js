(()=>{
    
    //creating fuction named rand10 that will give a random nuber between 1-10.

    let rand10=()=>{

        /* creating variable random that will stock the number
         using Math.random will give us number between 0 and 1 
         then multiply by 10 so the limit set it self up to 10 
         in max and add 1 so zero don't show neither.  */

        let random=parseInt((Math.random()*9)+1);

        // finally i return the answer.

        return random;
    }
    //printing the answer.
    console.log(rand10());

})();