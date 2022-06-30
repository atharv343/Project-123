function setup() {
 video=createCapture(VIDEO);
 video.size(550,500);
 poseNet=ml5.poseNet(video,modelLoaded);
 posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Loaded!");
}
function gotPoses(results){
    if (result.length>0){
        console.log(results);
    }
}    