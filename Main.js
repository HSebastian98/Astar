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
console.log(pos);

function makeArr(startValue, stopValue, step){
    var arr =[];
    for (var i= 0; i < (stopValue - startValue)/step; i++) {
        arr.push(startValue + (step*i));
    }
    return arr;
}

function Position(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}
