// async function getMatchData() {

//     return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=a73369a4-14e7-4e3d-84f0-73b8ec75e344&offset=0")
//     .then(data=>data.json())
//     .then(data => {
//         if(data.status != "success") return;

//         let matchList = "";

//         data.map((match)=>{
//             matchList=`<div class="cardContainer">
//             <div class="card" style="background-color:rgb(153, 29, 224);">
//             <h2>${match.name}</h2>
//             <p>${match.matchType}</p>
//             <p>${match.status}</p>
//             <p>${match.venue}</p>
//             <p>${match.score[0]}</p>
            
//         </div>` 
//         }
//         );
//         document.getElementById("cards").innerHTML = matchList;

//         if(!matchList)return[];

//         const relevantData = matchList.filter().map(match => `${match.name}, ${match.status}, ${match.matchType}, ${match.score}, ${match.venue} ${match.img}` );

//         document.getElementById("matches").innerHTML = relevantData.map(match=> `<li>${match.name}</li>`);
//         return relevantData 
//     })

//     .catch(e => console.log(e))
    
// }
// getMatchData();

fetch("https://api.cricapi.com/v1/currentMatches?apikey=a73369a4-14e7-4e3d-84f0-73b8ec75e344&offset=0").then((data)=>{
    return data.json();

    
    
}).then((completedata)=>{
        // console.log(completedata);
        let matches="";
        completedata.data.filter(match => match.series_id != "d87b656d-7db3-40c1-99d8-7958b5980ae6").map((match)=>{
          



          let fisrtInning = `
          <p class="title" style="font-size: x-small; line-height: 15px;" >${match.teamInfo[0].name} </p>
          <img src="${match.teamInfo[0].img}" alt="Forest" style="width:50%">
          
          <br>
          <br>
          <br>
          `
        if(match.score.length > 1) {
          fisrtInning += `
          <p class="text"> ${match.score[0].r}/${match.score[0].w}</p>
          <p class="text1"> (${match.score[0].o})</p>
          
          `
        } else {
          fisrtInning += "Yet to bat";
        }
         
          let secondInning = `
          <p class="title" style="font-size: x-small; line-height: 15px;" >${match.teamInfo[1].name} </p>
          <img src="${match.teamInfo[1].img}" alt="Forest" style="width:50%">
          
          <br>
          <br>
          <br>
          `
        if(match.score.length > 1) {
          secondInning += `
          <p class="text"> ${match.score[1].r}/${match.score[1].w}</p>
          <p class="text1"> (${match.score[1].o})</p>
          
          `
        } else {
          secondInning += "Yet to bat";
        }
            matches+=`<div id="card" style="background-color:rgba(10, 224, 243,0.3);">
            <h1 class="title" style="font-size: small; line-height: 15px;" >${match.name} (${match.matchType}) ${match.venue}</h1>
            <div class="row">
            <div class="column">
           <p>${fisrtInning}</p>
            </div>
            <div class="column">
            <p>${secondInning}</p>
    
          
            </div>
        </div>
        <p class="center" id="stats">${match.status}</p>
        
        
            
            

        </div>
        `
        
        })
        
        
        document.getElementById("cards").innerHTML = matches;




}).catch((e) => {console.log(e);
})