import names from './names.js';

const body = document.querySelector('#container')
// console.log(names)

// * inject html inside the main container
names.forEach((item, i) => {
  const section = document.createElement('section')
  const sectionId = `s${i}`
  const nextSectionId = `s${i+1}`
  const mainContent = `
      <section class="section" id="${sectionId}">
          <h3><span>I </span>AM <span>${item.name}</span></h3>
          <h3>
            Made with <span>
              <lord-icon src="https://cdn.lordicon.com/pnhskdva.json" delay="200" trigger="loop" colors="primary:#674325"
                state="morph" style="width: 100px; height: 100px">
              </lord-icon>
            </span> by
            <span>
            <a href="${item.githubUrl}">
                ${item.fullName}
              </a>
            </span>
          </h3>
          <a href="#${nextSectionId}">
          <lord-icon src="https://cdn.lordicon.com/rxufjlal.json" trigger="loop" colors="primary:#674325" state="hover-1"
          class="icon--animation icon-next-section">
        </lord-icon>
        </a>
      </section>
  `
  section.innerHTML = mainContent;
  body.appendChild(section); 
})
