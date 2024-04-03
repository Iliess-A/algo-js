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

    let randomizeCast =(tvSerie)=>{

        let randomCast=[];

        let castMember=tvSerie.memberCast;

        while(randomCast.length<castMember.length){

            randomCast_toPush=castMember[Math.floor(Math.random()*castMember.length)];

            let findDoublon=randomCast.find((element)=>element === randomCast_toPush);

            if (findDoublon===undefined)  randomCast.push(randomCast_toPush)  ;

        }

        return randomCast ;
        
    }

    //askTvSerie();
    let newSeriesCast = randomizeCast(askTvSerie());

    console.log(`The casting for the next new serie will be : ${newSeriesCast} .`);


})();
