//https://teachablemachine.withgoogle.com/models/mbfA23wpK/

Webcam.set({
    
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90  


});

Camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}

console.log('ml5 version:' , ml5.version);      

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mbfA23wpK/model.json',model_loaded);

function model_loaded()
{
  console.log('Model Loaded!');
}
function check()
{
  img=document.getElementById('captured_image');
  classifier.classify(img, gotresult);
}

function speak()
{
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " +prediction_1;
  speak_data_2 = "And the second prediction is " +prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}

function gotresult(error, results) {
  if (error)  {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = result[0].label;
    document.getElementById("result_gesture_name2").innerHTML = result[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "That was a marvelous victory")
    {
      document.getElementById("update_gesture").innerHTML = "&#9996;";
  }
  if(results[0].label == "This is looking amazing")
    {
      document.getElementById("update_gesture").innerHTML = "&#128076;";
  }
  if(results[0].label == "All the best")
    {
      document.getElementById("update_gesture").innerHTML = "&#128077;";
  }
  if(results[1].label == "That was a marvelous victory")
    {
      document.getElementById("update_gesture2").innerHTML = "&#9996;";
  }
  if(results[1].label == "This is looking amazing")
    {
      document.getElementById("update_gesture2").innerHTML = "&#128076;";
  }
  if(results[1].label == "All the best")
    {
      document.getElementById("update_gesture2").innerHTML = "&#128077;";
  }

  }
}