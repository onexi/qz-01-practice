var exercise = {};

exercise.one = function(a, b){
    var sum = {
        'sum': a+b
    };
    return sum;
    // ----------------------------------------
    //   QUESTION 01
    //   The function takes in two integers, a and b
    //   Return a new object with a key 'sum' whose value is the
    //   sum of the two integers a and b
    //
    //   For an input of a = 2 and b = 3, the returned object
    //   should look like {'sum': 5}
    // ----------------------------------------
};

exercise.two = function(arr){
    
    // ----------------------------------------
    //   QUESTION 02
    //   The function takes in arr which is an array of integers
    //   Return the last elememt in this array
    //
    //   For an input arr = [9, 3, 4], the return value should be 4
    // ----------------------------------------
    return arr[arr.length-1];
};

exercise.three = function(str){
//    var str_2= '';
//    for (var i=0; i<(str.length-1); i++) {
//        str_2+= str[i]+'_';
//    }
//    str_2+=str[str.length-1];
//    return str_2;

    return str.split('').join('_');
    // ----------------------------------------
    //   QUESTION 03
    //   The function takes in a str which is of type string
    //   Return a new string such that the characters have an
    //   underscore between them
    //
    //   For an input of str = "apple", the return value should
    //   be "a_p_p_l_e"
    // ----------------------------------------
};

exercise.four = function(arr){
  //  var Newarr=[]
  //  arr.forEach(function(int){
  //      Newarr.push(int*int);
  //  });
  //  return Newarr;
    var Newarr= arr.map(function(int){
        return int*int;
    });
    return Newarr;

    // ----------------------------------------
    //   QUESTION 04
    //   The function takes in arr which is an array of integers
    //   Return a new array such that it contains squares of the
    //   input array and are in the same order
    //
    //   For an input arr = [2, 4, 6], the return should be [4, 16, 36]
    // ----------------------------------------
    
};

exercise.five = function(obj){
    var first =obj.first_name;
    var second =obj.last_name;

    return first+' '+second;
    // ----------------------------------------
    //   QUESTION 05
    //   The function takes in a parameter obj which is of type Object
    //   Obj will have two keys, 'first_name' and 'last_name' whose values
    //   will be of type string
    //   Return a new string value such that it is a concatenation of
    //   the 'first_name' and 'last_name' keys separated by a space
    //
    //   For an input obj = {'first_name': 'John', 'last_name': 'Doe'},
    //   the return value should be 'John Doe'
    // ----------------------------------------
};

exercise.six = function(arr){
    var counter=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            counter++;
        }
    }
    return counter;
    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
};

exercise.seven = function(n){
    var arrr=[];
    for (var i=0; i<n; i++){
        if (i%2==0){
            arrr.push(1);
        }
        else{
            arrr.push(0);
        }
    }
    return arrr;
};
    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [0, 1, 0, 1]
    // ----------------------------------------

exercise.eight = function(str){
 //TAKE ONE
 //   var Num=0;
 //   for (var i=0; i<str.length; i++){
 //       Num+=Number(str[i]);
 //   }
  //  return Num;

//TAKE TWO
 //   var numbers = str.split('');
 //   return numbers.reduce(function(a, b){return Number(a)+Number(b);});

    var numbers = str.split('').map(function(i){return Number(i);});
    return numbers.reduce(function(a, b){return a+b;});

    // ----------------------------------------
    //   QUESTION 08
    //   The function takes in str which is a string. This string
    //   will always be a string representation of an integer.
    //   Return a new integer such that it is the sum of the individual
    //   integer representation of the characters of the string
    //
    //   For str = '1234', return 10
    // ----------------------------------------
};

exercise.nine = function(func){
    return func()*func();

    // ----------------------------------------
    //   QUESTION 09
    //   The function takes in a parameter func which itself is a function
    //   that return an integer when executed
    //   Return a new integer such that it is a square of the integer obtained
    //   on executing func
    //
    //   For an obtained value of 5 on executing func, return 25
    // ----------------------------------------
};

exercise.ten = function(){

    return function(a,b){return a*b;};
    // ----------------------------------------
    //   QUESTION 10
    //   Return a function that is capable of accepting two
    //   parameters a and b of integer type and returning the
    //   product of a and b (a * b) on execution
    //
    //   For this, the return value would be of the form
    //   function(a, b) { return /*  do something  */ }
    // ----------------------------------------
};

module.exports = exercise;
