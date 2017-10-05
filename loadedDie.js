function makeLoadedDie(){

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  var i=-1;




  return function(){

    i++;

    if(i>=9){

      i=0;

      return list[i];

    }else{

      return list[i]
    }

  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
