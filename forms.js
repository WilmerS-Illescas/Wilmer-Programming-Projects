AGE = document.getElementById("age");
BUTTON = document.getElementById("button");
BUTTON.addEventListener("click", touchAndsee);

  function touchAndsee()
  {
    var lines = parseInt(AGE.value);
    var l = 0
    var space = width / lines ;

      for (l= 0; l < lines ; l++)
      {
        y11= l*space;
        x22= 290 - space*l;
        yi= 300 - space*l;
        xf= 290 - space*l;
        yy = 300 - space*l;
        xx = l*space;
        xc = 10 + l* space;
        yc = l * space ;
        Paint("red",0,yc, xc, 300);
        Paint("red" , 300 , yi , xf , 0);
        Paint("red",300,y11,x22,300);
        Paint("red",0,yy,xx,0);
      }
     
  }

  var picture = document.getElementById("canvitas");
  var canvi = picture.getContext("2d");
  var width = picture.width;
  function Paint(color, x1,y1,x2,y2)
  {
   canvi.beginPath();
   canvi.strokestyle = color;
   canvi.moveTo(x1,y1);
   canvi.lineTo(x2,y2);
   canvi.stroke();
   canvi.closePath();
  }
