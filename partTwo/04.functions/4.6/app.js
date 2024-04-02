(()=>{
    
    //appelle de fonction
    let facto=(n)=>{

        // si le nombre est plus petit que 1 aucun interret a faire une facto
        if( n>1 ) {

            // on multiplie le n * le n -1 et on rappelle la fonction
            return n* facto(n-1);

        }else {
            return 1;
            // si le n est plus petit que ou egale a 1 on renvoie 1
        }

    }
    
    console.log(facto(7));

})();