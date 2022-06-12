// excuse the mess, i am still playing around. :)

var elemets = document.querySelector( 'svg' ).children;

let lines = document.querySelectorAll( '.cls-1' );
anime( {
  targets: '.cls-1',
  translateX: [
    { value: 270, duration: 1000, easing: 'easeOutSine' },
    { value: 0, duration: 1000, easing: 'easeOutSine' }
  ],
  delay: anime.stagger( 200, { grid: [ 16, 10 ], from: 7 } ),
  loop: true
} );

// var tl = gsap.timeline({delay: 1, repeat: -1, yoyo: true});

// tl.from('.cls-1', {
//   x: '300px',
//   // duration: .05,
//   stagger:.02,
//   duration: 1,
//   opacity: 0,
//   // fill: "yellow"
// })
// tl.to('.cls-1', {
//   // fill:'yellow',
//   duration: 1,

// }, '<')

// let colors = ['#4cc9f0', '#4895ef', '#4361ee', '#3f37c9', '#3a0ca3'];

let colors = [ '#FFFFFF', '#ECE9E6' ];

// let colors = ['#4cc9f0', '#4895ef', '#4361ee', '#3f37c9', '#3a0ca3', "orange"];

// let colors = ['#00377e', '#002d67',"#002657"]

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));

// }




var intervalID = window.setInterval( myCallback, 500 );

// function myCallback() {
//   lines.forEach((element) => {
//   let newColor = colors[getRandomInt(colors.length)]
//     $( element ).css( "fill", newColor );
//   });
// }

