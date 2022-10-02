import names from './names.js';

const pseudoWindow = document.querySelector('#pseudo-window')
// console.log(names)

// * inject html inside the main container
names.forEach(item => {
  const section = document.createElement('section')
  const mainContent = `
      <section class="section">
        <div class="main-cont">
          <h3><span>I </span>AM <span>${item.name}</span></h3>
        </div>
        <div class="main-cont" style="text-align: center">
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
        </div>
      </section>
  `
  section.innerHTML = mainContent;
  pseudoWindow.appendChild(section); 
})

let numOfSections = document.querySelectorAll('.section').length;

document.getElementById('pseudo-window').style.height = (screen.height * numOfSections) + 'px'

let action = new TimelineMax({paused:true})
.staggerTo('.section', 4,{ 
  x:'100%',
  ease: Power4.easeOut
  //ease: Back.easeOut.config(1.4) 
}, 2)
.staggerFrom('.section',0.2,{
  autoAlpha:0, 
  scale:0.5, transformOrigin:'center'
},1,0)


$(window).scroll( function(){
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  if( scrollTop >= 0){
    action.progress( scrollTop / ( docHeight - winHeight ) );
  }
});