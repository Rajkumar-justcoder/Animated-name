import names from "./names.js";

const pseudoWindow = document.querySelector("#pseudo-window");

// Icon color array

const iconColors = [
  "#f26d21",
  "#c02f1d",
  "#ebc944",
  "#93a661",
  "#1287a8",
  "#8e44ad",
  "#fa8072",
  "#ccccff",
  "#008080",
  "#ffc16f",
  "#fff69e",
  "#cc5959",
  "#d0a3ff",
  "#ccc47e",
  "#93c47d",
];

// * inject html inside the main container
names.forEach((item) => {
  let color = Math.floor(Math.random() * 14) + 1; // variable for storing color class number

  let lordiconColor = iconColors[color - 1]; // variable for storing icon color

  const mainContent = `
      <section class="section">
        <div class="main-cont">
          <h3 class="color-${color}"><span>I </span>AM <span>${item.name}</span></h3>
        </div>
        <div class="main-cont" style="text-align: center">
          <h3 class="color-${color}">
            Made with <span>
              <lord-icon src="https://cdn.lordicon.com/pnhskdva.json" delay="200" trigger="loop" colors="primary:${lordiconColor}"
                state="morph" style="width: 100px; height: 100px">
              </lord-icon>
            </span> by
            <span>
            <a href="${item.githubUrl}">
                ${item.fullName}
              </a>
            </span>
          </h3>
        </div>
      </section>
  `;
  pseudoWindow.innerHTML +=  mainContent;
});

 let numOfSections = document.querySelectorAll(".section").length;

document.getElementById("pseudo-window").style.height = document.querySelector(".section").offsetHeight * numOfSections + "px";
