var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 20 }
];


function customComparator(arr){


  arr.sort(function(a,b){

    var aName = a.name.toLowerCase();

    var bName = b.name.toLowerCase();

    if(aName<bName){

      return -1;
    };

    if(aName>bName){

      return 1;
    };

    if(aName===bName){

      return b.age-a.age;
    };

  })

  return arr;


}


console.log(customComparator(students))




