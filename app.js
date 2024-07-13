let currMoleTile;
let currPlantTile;
let score=0;
let gameover=false;
window.onload=function(){
    setgame();
}
function setgame(){
    for(i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole,1100);
    setInterval(setplant,900);

}

function getrandomtile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setmole(){
    if(gameover == true){
        return;
    }

    if(currMoleTile){
       currMoleTile.innerHTML= "";
   }

    let mole=document.createElement("img");
    mole.src="./mole-removebg.png";
    let num=getrandomtile();
    if(currPlantTile && currPlantTile.id == num){
        return;
       }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setplant(){
    if(gameover == true){
        return;
    }

    if(currPlantTile){
       currPlantTile.innerHTML= "";
   }
  

    let plant=document.createElement("img");
    plant.src="./plant_6-removebg-preview.png";
    let num=getrandomtile();
    if(currMoleTile && currMoleTile.id == num){
        return;
       }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover==true){
        return;
    }
    if(this == currMoleTile){
        score=score+10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this == currPlantTile){
        gameover=true;
        document.getElementById("score").innerText="GAME IS OVER:" + score.toString();
    }
}