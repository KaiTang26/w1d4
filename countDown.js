var countdownGenerator = function(x){

  var notYet="T-minus";

  var rightNow="Blast Off";

  var passed ="Rockets already gone, bub !";

  var time =x+1;

  return function(){

    time--;

    if(time>0){

      console.log(notYet)
    };

    if(time===0){

      console.log(rightNow);
    };

    if(time<0){


      console.log(passed);
    }


  }



}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!


