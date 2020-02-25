import sum from './sum';
import axios from 'axios';

// just testing
console.log(sum(1,5));

const main = async () => {
  const res = await axios.get('https://fizal.me/pokeapi/api/v2/name/bulbasaur.json');
  console.log(res.data);
}

const Carousel = require("vanilla-js-carousel");

var carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: true,      // starts the rotation automatically
  infinite: true,      // enables infinite mode
  interval: 1500,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: true,          // show navigation dots
  arrows: true,        // show navigation arrows
  buttons: false,      // hide <play>/<stop> buttons,
  btnStopText: 'Pause' // <stop> button text
});

// Show the 3rd slide (Numeration of slides starts at 0)
carousel.show(2);

// Move to the next slide
carousel.next();

main();
