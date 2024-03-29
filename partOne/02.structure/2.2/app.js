(() => {
    let min=parseInt(window.prompt('donner un chiffre qui sera le minimum'));
    let max=parseInt(window.prompt('donner un chiffre qui sera le maximum'));
    let current=parseInt(window.prompt('donner un chiffre qui sera le current'));

    if (min >= max){
        console.log('vous ne comprenez pas les consigne.');
    } else{
        if (current>=min && current<=max){
            console.log('vous etes entre min et max')
        }
    }

})();