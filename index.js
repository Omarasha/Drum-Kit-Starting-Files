
var  numberOfDrumButtones = document.querySelectorAll(".drum").length;    // هون حددت البدي اعدو + عددو
for (var i=0 ; i<numberOfDrumButtones ; i++){    //ممكن احط lingth هون

  document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){     // هون حددنا .drum + حددنا الحركب ب click + لازم تحط function

        var buttonTnnerHtml = this.innerHTML;         // this حطيتها عشان ااشر على الي بنكبس عليها  والانر عشان تعطيني الحروف مس الكبسة كاملة
        makeSound(buttonTnnerHtml);

        document.querySelectorAll().addEventListener("keypress" , function(event){
          makeSound(event.key);
        });

        function makeSound(key){


        switch (key) {
          case"w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
          case"a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
          case"s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
          case"d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
          case"j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
          case"k":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
          break;
          case"l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
            break;
          default:

        }
        }
  });
}
