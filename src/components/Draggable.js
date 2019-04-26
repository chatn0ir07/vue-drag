import Vue from 'vue';

let el = null, movableElement = null;
let DeltaX = 0, DeltaY = 0;
let OffsetTop = 0, OffsetLeft = 0;

export var drag = {
    inserted: function(elem,b,c) {
        movableElement = document.querySelector(b.value);
        el = elem;
        movableElement.style.position="absolute";
        el.addEventListener("mousedown", MouseDown, true);
    }
}
Vue.directive('drag', drag);

function MouseDown(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("Down");

    document.addEventListener("mousemove", MouseMove, true);
    document.addEventListener("mouseup", MouseUp, true);

    OffsetTop = movableElement.offsetTop;
    OffsetLeft = movableElement.offsetLeft;
    movableElement.style.zIndex="10000";
    DeltaX = (e.clientX - movableElement.offsetLeft);
    DeltaY = (e.clientY - movableElement.offsetTop);
    document.body.style.overflow ="hidden";

}
function MouseMove(e) {
    e.preventDefault();
    e.stopPropagation();
    let NewPositionX = (e.pageX - DeltaX);
    let NewPositionY = (e.pageY - DeltaY);

    //Check that the Box is not leaving the Boundaries of the Parent
    if(NewPositionX > 0 && NewPositionY > 0 && NewPositionX < movableElement.parentElement.offsetWidth && NewPositionY < movableElement.parentElement.offsetHeight){
        movableElement.style.left = (e.pageX - DeltaX) + "px";
        movableElement.style.top = (e.pageY - DeltaY) + "px";
    }
    console.log([NewPositionX, NewPositionY, movableElement.parentElement.offsetWidth, movableElement.parentElement.offsetHeight])
}
function MouseUp(e){
    e.preventDefault();
    e.stopPropagation();
    document.removeEventListener("mousemove", MouseMove, true);
    document.removeEventListener("mouseup", MouseUp, true);
    movableElement.style.zIndex = "0";
    document.body.style.overflow="auto";
    document.dispatchEvent(new CustomEvent('finished',{x:movableElement.style.left,y:movableElement.style.top,name:name}));
}
