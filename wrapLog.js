// var wrapLog = function (callback, name) {

//   // var results = callback();

//   console.log(wrapLog.arguments)


//   return callback;


// };

var wrapLog = function (callback, name) {



  return function(...args) {
    // console.log("length: ", arguments[0])

    var results = callback(...args)

    console.log(name+" ("+[...args]+")>="+results)
  }
};

var area = function (x, y){
  return x * y;
};

var logArea = wrapLog(area,"area");

logArea(5,3);


// console.log(logArea(5,3))
// console.log(logArea(3,2))

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
