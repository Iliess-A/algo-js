(()=>{
    //liste of people
    let inputAr =["adca","adrien","angel","arnaud","denis","stacy","dylan","lyan","giovanni","iliess","isabelle","jessica","julie","justine F","justinne L","Ludovic","Lyne","M.Jordan","manu","maryam","mohamed","nataliia","3hra"];
    
    //generate rand nbr between 1 and 23
    let n = parseInt((Math.random()*22)+1) ;

    //fct named picklearner that will create an array of rand people
    let pickLearner = (array,nb)=>{
        
        // init array 
        let arr=[];

        // loop to go trought the name and limite the length of the array
        for(i=0;i<=nb;i++){

            // we push in the name randomly 
            arr.push(inputAr[parseInt((Math.random()*22)+1)]);

        }

        // print the result
        console.log(arr);

    }
    
    // call the fct
    pickLearner(inputAr,n);

})();