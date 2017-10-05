function findWaldo (arr, fund){

  for(var i=0; i<arr.length; i++){

    if(arr[i]==="Waldo"){

      fund(i);

    }

  }

}

function actionWhenFound(index){

  console.log("Waldo at index "+index+" !")

}

findWaldo(["Alice","Bob","Waldo","Winston"], actionWhenFound)