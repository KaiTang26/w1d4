var add = function(num){

  return function(num1){

    console.log(num+num1);

  }

};


add(2)(2);
