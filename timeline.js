"use strict"

document.addEventListener("DOMContentLoaded", start);

/* -------------------------- GLOBAL ------------------------------ */
let allHogwarts;
let allBullets;
let thisBullet;

/* -------------------------- ADD SVG ------------------------------ */
async function start(){
    //timeline
    let response = await fetch("timeline.svg");
    let mainSvg = await response.text();
    document.querySelector("#mainSvg").innerHTML = mainSvg;
    //infobox
    let responseBox = await fetch("infobox.svg");
    let infoSvg = await responseBox.text();
    document.querySelector("#infoBoxSvg").innerHTML = infoSvg;
    //load json
    startManipulatingData();
    includeInfoBox();
    finalBullet();
    loadJSON();
}

/* -------------------------- ONCLICK ACTION ------------------------------ */

function startManipulatingData(){
    console.log("tetse")
   document.querySelector("#bullets").addEventListener("click", selectCircle);
  
}

/* -------------------------- <use> SVG ------------------------------ */
function includeInfoBox(){
    const fullTimeline = document.querySelector("#mainSvg");
    const addInfobox = document.createElementNS("http://www.w3.org/2000/svg", "use");
    addInfobox.setAttribute("width", "518");
    addInfobox.setAttribute("height", "251");
    addInfobox.setAttribute("href", "#infobox_template");
    fullTimeline.appendChild(addInfobox);
    console.log()
}

/* -------------------------- LOAD JSON LIST ------------------------------ */
async function loadJSON(){
    const response = await fetch("potterfilms.json");
    const jsonData = await response.json();
    //when loaded, prepare data objects:
    prepareObjects(jsonData);
  }

  /* -------------------------- PREPARE LIST ------------------------------ */
  function prepareObjects(jsonData){
    allHogwarts = jsonData;
    console.log(jsonData)
    //store all results inside an array: allHogwarts
    // find each movie
    console.log(allHogwarts[0]);
    console.log(allHogwarts[1]);
    console.log(allHogwarts[2]);

    for (let i = 0; i<allHogwarts.length; i++){
        let onetest;
        onetest=(`${i+1}`);
        //onetest=document.querySelector(`#bars > div:nth-child(${i+1})`);
        //onetest.style.setProperty("--barHeight", array[i]);
        //if the result bellow equals the bullet result number (if 1 matches 1, if 3 matches 3), build the new card
        console.log(onetest)
      }
  
    showNewCard(allHogwarts);
  }

/* -------------------------- find BULLETS ------------------------------ */

  function finalBullet(){
          
    //get firt child and rename the class to "0"
    let singleButton = document.querySelector(".bullet");
    console.log(singleButton)

    //get second child and rename the class to "1"
    console.log(document.getElementsByTagName("circle")[0])
    console.log(document.querySelectorAll(".bullet") )
    allBullets = document.querySelectorAll(".bullet")
    
    console.log(allBullets[0])
    console.log(allBullets[1])
    
 //find bullets by number, 1, 2, 3,.... if bullet# matches list#, will build a new card
    
    for (let i = 0; i<allBullets.length; i++){
        let bulletselection;
        bulletselection=(`${i+1}`);
        //onetest=document.querySelector(`#bars > div:nth-child(${i+1})`);
        //onetest.style.setProperty("--barHeight", array[i]);
        //if the result bellow equals the bullet result number, build the new card
        console.log(bulletselection)
        console.log(allBullets[i])
        showNewCard(bulletselection)
      }
  }

  /* -------------------------- USER INPUT ------------------------------ */
function selectCircle(selectedBullet){
  //the bullet the user is clicking on:
    console.log(selectedBullet)
    let userChoice = selectedBullet.target;
   console.log(userChoice)
    console.log(allHogwarts)
    console.log(bulletselection)
    console.log(allHogwarts[0])
    console.log(allBullets[0])
}


/* function showNewCard(allHogwarts, bulletselection){
    //console.log(bulletselection)
    //console.log(allHogwarts)
    //console.log(allHogwarts[0].director)
    //document.querySelector(".director").textContent = allHogwarts.director;
} */

