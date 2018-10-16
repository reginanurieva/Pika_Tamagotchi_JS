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
// var Feed = function(){
//   alert("Boo!");
// }


$(document).ready(function() {
  newTamago = new Tamagotchi();

  newTamago.setHealth();
  // $("#pet").attr("src", img);
  // setInterval(function(){
  //   imageChanger();
  // }, 1000);

  newTamago.setPoo();
  // $("#pet").attr("src", img);
  // setInterval(function(){
  //   imageChangerForPoo();
  // }, 1000);

  newTamago.setPlay();
  $("#pet").attr("src", img);
  setInterval(function(){
    imageChanger();
  }, 1000);

  setInterval(function() {
    $("#poobar").attr("style", "width:"+newTamago.poo+"%");
    $("#poo-result").text(newTamago.getPoo());
  }, 1000);

  setInterval(function() {
    $("#healthbar").attr("style", "width:"+newTamago.health+"%");
    $("#health-result").text(newTamago.getHealth());
  }, 1000);

  setInterval(function() {
    $("#playbar").attr("style", "width:"+newTamago.play+"%");
    $("#play-result").text(newTamago.getPlay());
  }, 1000);



///buttons
  $("#health").click(function(){
    console.log("Boo!");
    newTamago.newHealth();
    $("#health").return(newTamago.getHealth());
  });

  $("#poo").click(function(){
    newTamago.newPoo();
    $("#poo").return(newTamago.getPoo());
  });

  $("#play").click(function(){
    newTamago.newPlay();
    $("#play").return(newTamago.getPlay());
  });
//
});


// function imageChanger(){
//   if (newTamago.getHealth() == 100){
//     $("#pet").attr("src", img);
//   } else if (newTamago.getHealth() == 40){
//     $("#pet").attr("src", img2);
//   } else if (newTamago.getHealth() < 1) {
//     $("#pet").attr("src", img3);
//     $("#message").text("Your Pika got starved");
//   }
// }
//
// function imageChangerForPoo(){
//   if (newTamago.getPoo() == 0){
//     $("#pet").attr("src", img);
//   } else if (newTamago.getPoo() == 40){
//     $("#pet").attr("src", img2);
//   } else if (newTamago.getPoo() ==100) {
//     $("#pet").attr("src", img3);
//     $("#message2").text("Your Pika pooped himself");
//   }
// }
//
// function imageChangerForPlay(){
//   if (newTamago.getPlay() == 100){
//     $("#pet").attr("src", img);
//   } else if (newTamago.getPlay() < 40 && newTamago.getPlay() > 0){
//     $("#pet").attr("src", img2);
//   } else if (newTamago.getPlay() < 1) {
//     $("#pet").attr("src", img3);
//     $("#message3").text("Your Pika got very bored with you and decided to die!");
//   }
// }

function imageChanger(){
  if (newTamago.getPlay() > 40 && newTamago.getPoo() < 40 && newTamago.getHealth() > 40){
    $("#pet").attr("src", img);
  } else if (newTamago.getPlay() > 0 && newTamago.getHealth() > 0 && newTamago.getPoo() < 100){
    $("#pet").attr("src", img2);
  } else {
    $("#pet").attr("src", img3);
    if (newTamago.getHealth() <= 0) {
      $("#message").text("Your Pika got starved");
    } else if (newTamago.getPoo() >= 100) {
      $("#message2").text("Your Pika pooped himself");
    } else {
      $("#message3").text("Your Pika got very bored with you and decided to die!");
    }
  }
}




// this.$element.find('div');
//         var $span = $div.find('span');
//         $div.attr('aria-valuenow', value);
//         $div.css('width', value + '%');
//         $span.text(value + '% Complete');
//     }
