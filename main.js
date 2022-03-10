function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelloaded)
}
function modelloaded(){
  console.log("modelloaded");
}
function draw() {
  image(video,0,0,300,250);
classifier.classify(video,gotResult);
}
function gotResult(error,result){
if(error){
  console.error("error");}
else{
  if(result[0].confidence>0.5){
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
   var synth = window.speechSynthesis;
   var speech = "object detected is"+result[0].label;
    var utterThis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterThis);
  }
}
}
