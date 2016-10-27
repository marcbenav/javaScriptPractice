
    function getRandomColor() {
          var letters="1234567890ABCDE".split("");
          var colors="#";
          for (var i=0; i<6; i++){
              colors += letters[Math.round(Math.random() * 15)]
          }
      return colors
          };

    var createdTime=Math.random();
    var clickedTime;
    var reactionTime;

    function makeBox(){

        var time=Math.random();
        time=time*5000;

        setTimeout(function() {

            if (Math.random()>0.5){
              document.getElementById("box").style.borderRadius="100px";

          } else {
              document.getElementById("box").style.borderRadius="0px";
          };

          var top=Math.random();
              top=top*300;
          var left=Math.random();
              left=left*1000;

          document.getElementById("box").style.left=left+"px";
          document.getElementById("box").style.top=top+"px";
          document.getElementById("box").style.backgroundColor=getRandomColor();
          document.getElementById("box").style.display="block";
          createdTime=Date.now();
          }, time);
        }

    document.getElementById("box").onclick=function(){


          function score(){
            var points=[];
            var newScore=0;
            if (reactionTime<8){
            points=points=+1;
          }
            return points
          };



        clickedTime=Date.now();

        reactionTime=(clickedTime-createdTime)/1000;
        document.getElementById("score").innerHTML=score();
        document.getElementById("result").innerHTML=reactionTime;
        this.style.display="none";
        makeBox()

      }
makeBox()
