let height = screen.height;

let numOfSections = document.querySelectorAll('.section').length;

height = height * numOfSections

document.getElementById('pseudo-window').style.height = height + 'px'

console.log(numOfSections,height);


action = new TimelineMax({paused:true})
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