(()=>{

    let n=parseInt(window.prompt('choisissez un nombre ?'));

    let nt=0;

    for(i=1;i<=n;i++){
        let nb=parseInt(window.prompt('choisissez un nombre ?'));

        nt +=nb;
    }
    console.log(nt);

})();