let yPos = [20, 50, 80];

let xPos = 50;
let radius = 25;

function setup() {
    createCanvas(100,100);
}

function draw() {
    background(255);

    // for(let i = 0; i < yPos.length; i++){
    //     ellipse(xPos, yPos[i], radius, radius);
    // }

    //Note the similarities between the for loop and the foreach - mainly note how the loop uses an index to access every element (yPos[i] with index i), 
    //while with the foreach we access elements directly as a parameter (y in this case)
    yPos.forEach(function(y){
        ellipse(xPos, y, radius, radius);
    })
}

//More information on foreach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

