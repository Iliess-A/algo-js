(()=>{

    let nb_user=parseInt(window.prompt('choisissez un nombre entre 1-7 ?'));

    switch(nb_user) {
        case 1 :
            console.log('lundi');
            break;
        case 2 :
            console.log('mardi');
            break;
        case 3 :
            console.log('mercredi');
            break;
        case 4 :
            console.log('jeudi');
            break;
        case 5 :
            console.log('vendredi');
            break;
        case 6 :
            console.log('samedi');
            break;
        case 7 :
            console.log('dimanche');
            break;
        default :
            console.log(`votre chiffre n'est pas entre 1 et 7 `) 
    }

})();