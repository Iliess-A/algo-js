(()=>{

    let array=[1,2,3,4,5];
    let array2=[100,101,102];
    let tot=0;
    let nb_item = array2.length;
    

    for(let item of array2){
        tot +=item

    }

    let moy = tot/nb_item;
    console.log(moy);

})();