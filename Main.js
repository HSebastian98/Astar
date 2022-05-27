var x,y,z;
x = makeArr(0,20000,100);
y = makeArr(0,20000, 100);
z = makeArr(0,125,25);
let FLT_MAX = -1;

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

const start = new Position(0,0,0);
const end = new Position(200,200,125);

search(pos,start,end);

function search(positions,start,end){
    let openList=[];
    let closedList=[];
    if (isValid(start.x,start.y,start.z) === false || isValid(end.x,end.y,end.z) === false) {
        console.log("Starting or End point is invalid");
        return;
    }

    if (isEnabled(start.enabled) === false || isEnabled(end.enabled) === false) {
        console.log("Starting or End point is blocked");
        return;
    }

    if (isDestination(start.x,start.y,start.z) === true){
        console.log("We are already at the destination");
        return;
    }
    start.f = 0.0;
    start.g = 0.0;
    start.h = 0.0;
    start.parent_x=start.x;
    start.parent_y=start.y;
    start.parent_z=start.z;
    openList.push(start);

    let foundDest = false;

    while (openList.length > 0){
        let currentNode = openList.shift();
        closedList.push(currentNode);
        let gNew, hNew, fNew;
        //Generate neighbours

        if (isValid(currentNode.x,currentNode.y,(currentNode.z-25)) === true){
            let currentNeighbour = getPosition(currentNode.x,currentNode.y,(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 25.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                        currentNeighbour.f = fNew;
                        currentNeighbour.g = gNew;
                        currentNeighbour.h = hNew;
                        currentNeighbour.parent_x = currentNode.x;
                        currentNeighbour.parent_y = currentNode.y;
                        currentNeighbour.parent_z = currentNode.z;
                        openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,currentNode.y,(currentNode.z+25)) === true){
            let currentNeighbour = getPosition(currentNode.x,currentNode.y,(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 25.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y - 100),currentNode.z) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y - 100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y - 100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y - 100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y - 100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y - 100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y + 100),currentNode.z) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y + 100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y + 100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y + 100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid(currentNode.x,(currentNode.y + 100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition(currentNode.x,(currentNode.y + 100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),currentNode.y,currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),currentNode.y,currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),currentNode.y,(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),currentNode.y,(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),currentNode.y,(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),currentNode.y,(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y-100),currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y-100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 141.421356;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y-100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y-100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y-100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y-100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y+100),currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y+100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y+100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y+100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x - 100),(currentNode.y+100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x - 100),(currentNode.y+100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),currentNode.y,currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),currentNode.y,currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),currentNode.y,(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),currentNode.y,(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),currentNode.y,(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),currentNode.y,(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 103.077641;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y-100),currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y-100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y-100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y-100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y-100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y-100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y+100),currentNode.z) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y+100),currentNode.z,pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 100.0;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y+100),(currentNode.z+25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y+100),(currentNode.z+25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
        if (isValid((currentNode.x + 100),(currentNode.y+100),(currentNode.z-25)) === true){
            let currentNeighbour = getPosition((currentNode.x + 100),(currentNode.y+100),(currentNode.z-25),pos);
            if(isDestination(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z) === true){
                currentNeighbour.parent_x = currentNode.x;
                currentNeighbour.parent_y = currentNode.y;
                currentNeighbour.parent_z = currentNode.z;
                end.parent_x = currentNode.x;
                end.parent_y = currentNode.y;
                end.parent_z = currentNode.z;
                console.log('The destination has been reached');
                PrintPath(currentNeighbour);
                foundDest = true;
                return
            }
            else if( containsPosition(currentNeighbour,closedList) === false && isEnabled(currentNeighbour.enabled) === true){
                gNew = currentNode.g + 143.614066;
                hNew = calculateH(currentNeighbour.x,currentNeighbour.y,currentNeighbour.z);
                fNew = gNew + hNew;

                if (currentNeighbour.f === FLT_MAX || currentNeighbour.f > fNew){
                    currentNeighbour.f = fNew;
                    currentNeighbour.g = gNew;
                    currentNeighbour.h = hNew;
                    currentNeighbour.parent_x = currentNode.x;
                    currentNeighbour.parent_y = currentNode.y;
                    currentNeighbour.parent_z = currentNode.z;
                    openList.push(currentNeighbour);
                }
            }
        }
    }

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
    this.parent_x = -1;
    this.parent_y = -1;
    this.parent_z = -1;
    this.g = FLT_MAX;
    this.h = FLT_MAX;
    this.f = FLT_MAX;
}

function isValid(x,y,z){
    return (x >= 0) && (x <= 20000) && (y >= 0) && (y <= 20000) && (z >= 0) && (z <= 125)
}

function isEnabled(boolean){
    return boolean
}

function isDestination(x,y,z){
    return (x===end.x) && (y===end.y) && (z===end.z)
}

function calculateH (x,y,z){
    return Math.sqrt(Math.pow((x-end.x),2)+Math.pow((y-end.y),2)+Math.pow((z-end.z),2));
}

function containsPosition(obj, list){
    let i;
    for (i = 0; i < list.length; i++){
        if (list[i] === obj){
            return true;
        }
    }

    return false;
}

function getPosition(x,y,z,list){
    let i;
    for (i = 0; i< list.length;i++){
        if (list[i].x === x && list[i].y === y && list[i].z === z){
            return list[i];
        }
    }
}

function PrintPath(node){
    let Path=[];
    console.log('The path is ');
    while (!(node.x === start.x && node.y === start.y && node.z === start.z)){
        Path.push(node);
        var temp_x = node.parent_x;
        var temp_y = node.parent_y;
        var temp_z = node.parent_z;
        node = getPosition(temp_x,temp_y,temp_z,pos);
    }
    Path.push(start);
    console.log(Path);
}