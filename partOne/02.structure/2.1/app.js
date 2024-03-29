(() => {
    let user_age=parseInt(window.prompt('veuiler indiquer votre age'));
    if (user_age >= 18 ){
        console.log("you are an adult");
    } else {
        console.log('you are not an adult yet');
    }
})();