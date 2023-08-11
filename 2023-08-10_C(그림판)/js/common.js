const $inputColor = document.getElementById('color');
const $inputRange = document.getElementById('range');
const $download = document.getElementById('download');
const $reset = document.getElementById('reset');
const $canvas = document.createElement('canvas');
const context = $canvas.getContext('2d');
$canvas.width = 1200;
$canvas.height = 800;
document.body.append($canvas);


context.rect(0,0,1200,800)
context.stroke();

let mousedown = false;
$canvas.addEventListener('mousedown',function(event){
    mousedown = true;
    context.beginPath();
    context.moveTo(event.offsetX,event.offsetY);
});
$canvas.addEventListener('mousemove',function(event){
    if(!mousedown) return;
    context.lineTo(event.offsetX,event.offsetY);
    context.stroke();
});
$canvas.addEventListener('mouseup',function(event){
    mousedown = false;
});
$canvas.addEventListener('mouseenter',function(){
    context.beginPath();
});


$inputColor.addEventListener('change',function(){
    context.strokeStyle = $inputColor.value;
});
$inputRange.addEventListener('change',function(){
    context.lineWidth = $inputRange.value;
});
$download.addEventListener('click',function(){
    const $a = document.createElement('a');
    $a.download = '이름';
    $a.href = $canvas.toDataURL();
    $a.click();
});
$reset.addEventListener('click',function(){
    const lineWidth = context.lineWidth;
    const strokeStyle = context.strokeStyle;
    context.beginPath();
    context.clearRect(0,0,1200,800);
    context.rect(0,0,1200,800);
    context.lineWidth = 1;
    context.strokeStyle = '#000'
    context.stroke();
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
})


// context.arc(100,100,50,0,Math.PI*2);
// context.fill();
// context.rect(0,0,100,100);
// context.fillStyle = 'red';
// context.strokeStyle = 'blue';
// context.lineWidth = 5;
// context.stroke();


// beginPath 
// stroke : border
// fill : background
// rect : 네모
// arc : 원 