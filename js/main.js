// imports go at the top of the JS file
import { getData } from "./modules/dataMiner.js";
// this is an IIFE (immediately invoked function expression)
// this is great for encapsulating code / making it private
// and is also a JavaScript programming pattern (the Module pattern)

(() => {
    console.log("fired");

    let theThings = document.querySelector('#team-section'),
        theTemplate = document.querySelector("#bio-template").content,faveData;
        


    function buildTeam(data) {

        debugger;

        faveData = data;

        const things = Object.keys(data);

        things.forEach(thing => {

            let panel = theTemplate.cloneNode(true);

            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${data[thing].avatar}`;
            containers[0].querySelector("img").id = thing;
            containers[0].querySelector("img").addEventListener("click", showThing);


            containers[1].textContent = data[thing].name;
            theThings.appendChild(panel);

        })
    }
    function showThing() {
        debugger;

        let currentThing = faveData[this.id];
    }

    getData(`./data.json`, buildThings);
})();