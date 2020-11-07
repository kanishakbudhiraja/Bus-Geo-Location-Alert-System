
let loc = document.getElementById("location"); 

var sound = new Howl({
  src: ['sound/siren.mp3']
});


$('#alert').click(function textToAudio() { 

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = "This is a Fire Alert.";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  
  window.speechSynthesis.speak(speech);
  sound.play();
});
$('#brake').click(function textToAudio() { 

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = "Brakes have failed. Please don't panic.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    sound.play();
});
document.getElementById("yo").addEventListener("click", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fb432b1c02b03d4b64d1edf087066a08`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { name } = data;
          loc.textContent = name;       
          document.getElementById("fo").addEventListener("click", textToAudio);
          function textToAudio() {

            let speech = new SpeechSynthesisUtterance();
            speech.lang = "en-US";
            speech.text = "We have reached" +name + ". Doors are going to be opened soon. Be ready.";
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            
            window.speechSynthesis.speak(speech);
          }
          console.log(name);          
        });
    });
  }  
});
// $('#alert').click(function(){
//   document.getElementById("alert").addEventListener("click", textToAudio);
//   function textToAudio() {

//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
//     speech.text = "This is a Fire Alert.";
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
  
//   window.speechSynthesis.speak(speech);
//   }
// });
// $('#alert').click(function(){  
//   document.getElementById("brake").addEventListener("click", textToAudio);
//   function textToAudio() {

//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
//     speech.text = "Brakes have failed. Please don't panic.";
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
    
//     window.speechSynthesis.speak(speech);
//   } 
// });

