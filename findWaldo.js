function findWaldo (arr, fund){

  for(var i=0; i<arr.length; i++){

    if(arr[i]==="Waldo"){

      fund();

    }

  }

}

function actionWhenFound(){

  console.log("Found him!")

}

findWaldo(["Alice","Bob","Waldo","Winston"], actionWhenFound)