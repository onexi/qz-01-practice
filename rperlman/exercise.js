// QUIZ 1 PRACTICE

var exercise = {};

exercise.one = function(a, b){

    // ----------------------------------------
    //   QUESTION 01
    //   The function takes in two integers, a and b
    //   Return a new object with a key 'sum' whose value is the
    //   sum of the two integers a and b
    //
    //   For an input of a = 2 and b = 3, the returned object
    //   should look like {'sum': 5}
    // ----------------------------------------
    return {'sum': a+b};
};

exercise.two = function(arr){
    // ----------------------------------------
    //   QUESTION 02
    //   The function takes in arr which is an array of integers
    //   Return the last elememt in this array
    //
    //   For an input arr = [9, 3, 4], the return value should be 4
    // ----------------------------------------
    var lastElem = arr[arr.length - 1]
    return lastElem;
};

exercise.three = function(str){
    // ----------------------------------------
    //   QUESTION 03
    //   The function takes in a str which is of type string
    //   Return a new string such that the characters have an
    //   underscore between them
    //
    //   For an input of str = "apple", the return value should
    //   be "a_p_p_l_e"
    // ----------------------------------------
    
    /*
    var newString = '';
    for (var i=0; i< str.length-1; i++){
        newString += str[i] + '_';
    }
    newString += str[str.length-1];
    return newString;
    */
    return str.split("").join("_");
};

exercise.four = function(arr){
    // ----------------------------------------
    //   QUESTION 04
    //   The function takes in arr which is an array of integers
    //   Return a new array such that it contains squares of the
    //   input array and are in the same order
    //
    //   For an input arr = [2, 4, 6], the return should be [4, 16, 36]
    // ----------------------------------------

    var newArr = arr.map(function(number){
        return number*number
    });
    return newArr;
};

exercise.five = function(obj){
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
    var name = obj.first_name + ' ' + obj.last_name;
    // var name = obj['first_name'] + ' ' + obj[last_name'];
    return name;
};

exercise.six = function(arr){
    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
    var even = 0;
    for (var i=0; i< arr.length; i++){
        if (arr[i] % 2 === 0){ even +=1;}
    }
    return even;
};

exercise.seven = function(n){
    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [0, 1, 0, 1]
    // ----------------------------------------
    var array = [];
    for (var i=0; i<n; i++){
        array.push(i%2);
    }
    return array;
};

exercise.eight = function(str){
    // ----------------------------------------
    //   QUESTION 08
    //   The function takes in str which is a string. This string
    //   will always be a string representation of an integer.
    //   Return a new integer such that it is the sum of the individual
    //   integer representation of the characters of the string
    //
    //   For str = '1234', return 10
    // ----------------------------------------
    var newArray = [];
    for (var i=0; i<=str.length; i++){
        newArray.push(Number(i));
    }
    var total = newArray.reduce(function(previous, current) {
        return previous + current;
    }, 0);

    return total;
};

exercise.nine = function(func){
    // ----------------------------------------
    //   QUESTION 09
    //   The function takes in a parameter func which itself is a function
    //   that return an integer when executed
    //   Return a new integer such that it is a square of the integer obtained
    //   on executing func
    //
    //   For an obtained value of 5 on executing func, return 25
    // ----------------------------------------
    var number = func();
    var square = number*number;
    return square;
};

exercise.ten = function(){
    // ----------------------------------------
    //   QUESTION 10
    //   Return a function that is capable of accepting two
    //   parameters a and b of integer type and returning the
    //   product of a and b (a * b) on execution
    //
    //   For this, the return value would be of the form
    //   function(a, b) { return /*  do something  */ }
    // ----------------------------------------
    return function(a,b){
        return a*b;
    };
};

module.exports = exercise;
