(() => {
    
    let askTvSerie = ()=>{
        let name = window.prompt(`What's the name of your favorite show ? `);
        let prodYear = window.prompt(`Whats is the year of production ?`);
        let castMember = window.prompt(`Who were in the cast for this show ?`);

        let serieAsked ={
            "name" : name,
            "yearProd": prodYear,
            "memberCast":castMember.split(",")
        };

        return serieAsked;
        
    };

    console.log(JSON.stringify(askTvSerie()));

})();
