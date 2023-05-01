function setup() {
    canvas = createCanvas(400, 350);
    canvas.position(650, 100);

    video = createCapture(VIDEO);
    video.size(400,350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("The model has been initialised ! ");
}

noseX = 0;
noseY = 0;

leftwristX = 0;
rightwristX = 0;
difference = 0;

text1 = document.getElementById("text_input").value;

function gotPoses(poses) {
    if(poses.length > 0) {
        console.log(poses);

        noseX = poses[0].pose.nose.x;
        noseY = poses[0].pose.nose.y;

        leftwristX = poses[0].pose.leftWrist.x;
        rightwristX = poses[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);
    }
}

function draw() {
    background('0,0,255');
    textSize(difference);
    fill("black");
    text1 = document.getElementById("text_input").value;
    text(text1, noseX ,noseY);
}
