
function ownmap(arg,func){

  var results =[];

  arg.forEach(function(ele){

    results.push(func(ele))

  })

  return results;
}


var words = ["ground", "control", "to", "major", "tom"];


console.log(ownmap(words,function(words){

  return words.toLowerCase();

}))