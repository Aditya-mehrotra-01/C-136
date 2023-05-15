
img="";
 status="";
 object = "";
function preload() {
   
    
}
function draw() {
  if (status != "") {
    image(vdeo, 0, 0, 640, 420);
    for (i = 0; i < object.length; i++) {

      fill("#FF0000");
      percent = floor(object[i].confidence * 100);
      text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
  }
 if (object.length = 0) {
   document.getElementById("f/n").innerHTML="Baby found";
 }
else{ 
  document.getElementById("f/n").innerHTML="Baby not found";
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML="Status = Detecting object";

}
}

function modelLoaded() {
    console.log( " MODEL LOADED ");
    status = true;
    objectDetector.detect(img,gotResults)
} 

function gotResults(error,results) {
  if (error ) {
 console.log(error);

  }
  console.log(results);
}
function  start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
    s=  text(object[i].label);
document.getElementById("in").innerHTML= s ;
}