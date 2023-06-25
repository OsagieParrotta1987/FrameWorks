//Photo Frame JavaScript

//Create Variables
var width, height, color, material, glass, mat, hanger;

//Functions

//Function to calculate width of the frame
function calcFrameWidth(width, matWidth){
    return width + (matWidth * 2);
}

//Function to calculate height of the frame
function calcFrameHeight(height, matHeight){
    return height + (matHeight * 2);
}

//Function to calculate the cost of the frame
function calcFrameCost(width, height, color, material, glass, mat, hanger){
    //Calculate the surface area of the frame
    var frameSurfaceArea = width * height;
    //Calculate the cost of the frame
    var frameCost = (frameSurfaceArea * color.price) + (frameSurfaceArea * material.price) + (glass.price) + (mat.price) + (hanger.price);
    //Return the cost of the frame
    return frameCost;
}

//Function to build the frame
function buildFrame(width, height, color, material, glass, mat, hanger) {
    //Calculate the width of the frame
    var frameWidth = calcFrameWidth(width, mat.width);
    //Calculate the height of the frame
    var frameHeight = calcFrameHeight(height, mat.height);
    //Calculate the cost of the frame
    var frameCost = calcFrameCost(width, height, color, material, glass, mat, hanger);
    //Return the frame object
    return {
        width: frameWidth,
        height: frameHeight,
        color: color.name,
        material: material.name,
        glass: glass.name,
        mat: mat.name,
        hanger: hanger.name,
        cost: frameCost
    };
}

//Function to create the frame
function createFrame(width, height, color, material, glass, mat, hanger){
    //Build the frame
    var frame = buildFrame(width, height, color, material, glass, mat, hanger);
    //Create the frame element
    var frameElement = document.createElement('div');
    frameElement.className = 'frame';
    frameElement.style.width = frame.width + 'px';
    frameElement.style.height = frame.height + 'px';
    frameElement.innerHTML = '<span class="frame-cost">$' + frame.cost.toFixed(2) + '</span>';
    //Return the frame element
    return frameElement;
}

//Colors
var colors = [
    { name: 'black', price: 0.25 },
    { name: 'white', price: 0.25 },
    { name: 'brown', price: 0.35 },
    { name: 'silver', price: 0.50 },
    { name: 'gold', price: 0.75 }
];

//Materials
var materials = [
    { name: 'wood', price: 0.50 },
    { name: 'metal', price: 0.75 },
    { name: 'plastic', price: 0.35 }
];

//Glasses
var glasses = [
    { name: 'regular', price: 0.25 },
    { name: 'uv', price: 0.75 },
    { name: 'antiglare', price: 0.50 }
];

//Mats
var mats = [
    { name: 'none', width: 0, height: 0, price: 0.00 },
    { name: 'standard', width: 10, height: 10, price: 0.50 },
    { name: 'premium', width: 20, height: 20, price: 1.00 }
];

//Hangers
var hangers = [
    { name: 'none',price: 0.00 },
    { name: 'satin', price: 0.50 },
    { name: 'brass', price: 0.75 }
];

//Event Listeners
document.getElementById('create-btn').addEventListener('click', function(){
    //Get the frame width
    width = document.getElementById('frame-width').value;
    //Get the frame height
    height = document.getElementById('frame-height').value;
    //Get the frame color
    color = colors[document.getElementById('frame-color').value];
    //Get the frame material
    material = materials[document.getElementById('frame-material').value];
    //Get the frame glass
    glass = glasses[document.getElementById('frame-glass').value];
    //Get the frame mat
    mat = mats[document.getElementById('frame-mat').value];
    //Get the frame hanger
    hanger = hangers[document.getElementById('frame-hanger').value];
    //Create the frame
    var frameElement = createFrame(width, height, color, material, glass, mat, hanger);
    //Add the frame element to the page
    document.getElementById('frame-container').appendChild(frameElement);
});