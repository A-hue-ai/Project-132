img = "";
status = "";

function preload()
{
    image  = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detec(img, gotResult);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
}