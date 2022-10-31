// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //const img_air_horn = document.getElementById('horn-select');
  //img_air_horn = "assests/images/air-horn.svg"

  /*
  function Horn(value){
    const elem = document.getElementById('horn-select');
    if(elem == "air-horn"){
      elem.
    }
  }
  */
  const img_air_horn = new Image();
  img_air_horn.src = 'assets/images/air-horn.svg';
  img_car_horn.src = 'assests/images/car-horn.svg';
  img_party_horn.src = 'assests/images/party-horn.svg';
  const horn = document.getElementById("horn-select");

  const elem = document.getElementById("expose");
  //console.log(elem);

  document.body.appendChild(img_air_horn);

  /*
  const selectHorn = document.querySelector('.horn-select');
  selectHorn.addEventListerner('change', (event) => {
    const horn = document.querySelector('');
  })

  */
}