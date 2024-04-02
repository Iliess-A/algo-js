(()=>{
    
    // fonction rand10
     let rand10=()=>{

        let random=parseInt(((Math.random()*9))+1);

        return random;
    }
    
    // this fct will create an array with random length and random number.
    let multiRand = (n) =>{
    // the n will be the length of the array

        let array=[];
        // creating an empty array

        for (i=0;i<=n;i++){
        // loop n number of time(length)

            array.push(rand10());
            // push randome number inside the array
        }

        console.log(array);
        // print the array
    }

    // calling the fct
    multiRand(rand10());
    

})();