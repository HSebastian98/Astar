var x,y,z;
x = makeArr(0,20000,100);
y = makeArr(0,20000, 100);
z = makeArr(0,125,25);

var pos =[];
var position=0;

for (var i=0; i < x.length; i++) {
    for (var j=0; j < y.length; j++){
        for (var k=0; k < z.length; k++){
            position = new Position(x[i],y[j],z[k]);
            pos.push(position);
        }
    }
}

var start = new Position(0,0,0);
var end = new Position(15000,15000,100);

search(pos,start,end);

function search(positions,start,end){
    var openList=[];
    var closedList=[];
    if (isValid(start.x,start.y,start.z) == false || isValid(end.x,end.y,end.z) == false) {
        print("Starting or End point is invalid");
        return
    }

    if (isEnabled(start.enabled) == false || isEnabled(end.enabled) == false) {
        print("Starting or End point is blocked");
        return
    }
    openList.push(start);
    console.log(openList);
}

function makeArr(startValue, stopValue, step){
    var arr =[];
    for (var i= 0; i <= (stopValue - startValue)/step; i++) {
        arr.push(startValue + (step*i));
    }
    return arr;
}

function Position(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.enabled = true; //is position available
    this.wv = 0; // wind velocity
    this.wd = 0; // wind direction
}

function isValid(x,y,z){
    return (x >= 0) && (x <= 20000) && (y >= 0) && (y <= 20000) && (z >= 0) && (z <= 125)
}

function isEnabled(boolean){
    return boolean
}

function isDestination(x,y,z){
    return (x==end.x) && (y==end.y) && (z==end.z)
}

function calculateH (x,y,z){
    return Math.sqrt(Math.pow((x-end.x),2)+Math.pow((y-end.y),2)+Math.pow((z-end.z),2));
}