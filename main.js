left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50)

    canvas = createCanvas(400,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw()
{
    background('grey');
    document.getElementById("font-size").innerHTML = "Font size of text will be = "+difference+"px"
    fill("yellow")
    textSize(difference);
    text('Hardik',58,400)
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!')
}

function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }

    if(results.length > 0)
    {
        console.log(results);
        
        right_wrist_x = results[0].pose.rightWrist.x
        left_wrist_x = results[0].pose.leftWrist.x

        difference = floor(left_wrist_x+right_wrist_x)

        console.log("rightwrist_x = " +results[0].pose.rightWrist.x+ " rightwristy_y = " +results[0].pose.rightWrist.x);
        console.log("leftwrist_x = " +results[0].pose.leftWrist.x+ " leftwristy_y = " +results[0].pose.leftWrist.x);
    }
}