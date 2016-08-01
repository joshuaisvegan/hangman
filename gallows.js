function draw() {
  var canvas = document.getElementById('gallows');
  if (canvas.getContext){
     var ctx = canvas.getContext('2d');

     ctx.beginPath();
     ctx.moveTo(30,20);
     ctx.lineTo(30,180);
     ctx.moveTo(30,20);
     ctx.lineTo(100,20);
     ctx.moveTo(10,180);
     ctx.lineTo(130,180);
     ctx.moveTo(100,20);
     ctx.lineTo(100,70);

     ctx.stroke();
   }
 }
 draw();
