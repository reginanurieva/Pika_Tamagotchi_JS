import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import img from './Pika.jpeg';
import img2 from './pika3.jpeg';
import img3 from './pika2.jpeg';
import { Tamagotchi} from "./tamagotchi.js";

// $(document).ready(function() {
//   $("#pet").attr("src", img);
//   $("img").click(function() {
//     $("#pet").attr("src", img2);
//   })
// });
//225 224 for img
let newTamago;

$(document).ready(function() {
  newTamago = new Tamagotchi();
  newTamago.setHealth();
  $("#pet").attr("src", img);
  setInterval(function(){
    imageChanger();
  }, 1000);

  newTamago.setPoo();
  $("#pet").attr("src", img);
  setInterval(function(){
    imageChangerForPoo();
  }, 1000);

  newTamago.setPlay();
  $("#pet").attr("src", img);
  setInterval(function(){
    imageChangerForPlay();
  }, 3000);

  setInterval(function() {
    $("#poobar").attr("style", "width:"+newTamago.poo+"%")
  }, 1000);

  setInterval(function() {
    $("#healthbar").attr("style", "width:"+newTamago.health+"%")
  }, 1000);

  setInterval(function() {
    $("#playbar").attr("style", "width:"+newTamago.play+"%")
  }, 1000);

});


function imageChanger(){
  if (newTamago.getHealth() == 100){
    $("#pet").attr("src", img);
  } else if (newTamago.getHealth() == 40){
    $("#pet").attr("src", img2);
  } else if (newTamago.getHealth() < 10) {
    $("#pet").attr("src", img3);
    $("#message").text("Your Pika got starved");
  }
}

function imageChangerForPoo(){
  if (newTamago.getPoo() == 0){
    $("#pet").attr("src", img);
  } else if (newTamago.getPoo() == 40){
    $("#pet").attr("src", img2);
  } else if (newTamago.getPoo() ==100) {
    $("#pet").attr("src", img3);
    $("#message2").text("Your Pika pooped himself");
  }
}

function imageChangerForPlay(){
  if (newTamago.getPlay() == 100){
    $("#pet").attr("src", img);
  } else if (newTamago.getPlay() == 40){
    $("#pet").attr("src", img2);
  } else if (newTamago.getPlay() < 10) {
    $("#pet").attr("src", img3);
    $("#message3").text("Your Pika got very bored with you and decided to die!");
  }
}



// this.$element.find('div');
//         var $span = $div.find('span');
//         $div.attr('aria-valuenow', value);
//         $div.css('width', value + '%');
//         $span.text(value + '% Complete');
//     }
