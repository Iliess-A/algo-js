(()=>{

    let array=[1,-5,3,18,6,9,7,8];
    let min=0;
    let max=0;

    for (let item of array){

        if(min >= item)  min = item ;

        if(max <= item) max=item ;

    }

    console.log(`la val min du tableau est ${min} et la val max est ${max} !`)

})();