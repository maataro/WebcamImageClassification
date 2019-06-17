// Daniel Shiffman
// http://youtube.com/thecodingtrain

// Webcam Image Classification with ml5

let label = "";
//let confidence = "";
let video;
let mobilenet;

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        //console.log(results);
        label = results[0].label;
        //confidence = results[0].confidence * 100;
        mobilenet.predict(gotResults);
    }

}

function setup() {
    createCanvas(480, 380);
    background(0);
    video = createCapture(VIDEO);
    video.hide();
    video.size(240, 180);

    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
    image(video,0, 0,240, 180);
    //filter(INVERT);
    textSize(24);
    fill(255, 255, 255);
    text(label, 10, height - 10);
    //text(confidence + '%', 200, height - 10);


}