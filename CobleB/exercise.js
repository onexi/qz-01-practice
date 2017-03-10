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

    /*Ben:
    var result = {};
    result.sum = a+b;
    return result;
*/
    //Instructor:
    return {'sum': a+b};
   
    //return 'Error: Question 01 not implemented';
};

exercise.two = function(arr){
    // ----------------------------------------
    //   QUESTION 02
    //   The function takes in arr which is an array of integers
    //   Return the last elememt in this array
    //
    //   For an input arr = [9, 3, 4], the return value should be 4
    // ----------------------------------------

    // Ben:
    var i = arr.length;

    var lastElement = arr[i-1];

    return lastElement;

    //Instructor:


    //return 'Error: Question 02 not implemented';
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

    /* Ben:
    var newString = '';
    var short = str.length-2;

    for(var i=0;i<short;i++){
        newString.push[i+'_'];
    }
    newString.push(str[str.length-1]);

    return newString;   
*/
    //instructor:
    return str.split('').join('_');
 
   // return 'Error: Question 03 not implemented';
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

    var squares = arr.map(function(int){
        return int*int;
    });

    return squares;

    //return 'Error: Question 04 not implemented';
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
    
    /*Ben
    var newArray = [];

    newArray.push(obj.first_name+' '+obj.last_name);

    return newArray;
*/

//Instructor:

var name = obj.first_name + ' ' + obj.last_name;

return name;

    //return 'Error: Question 05 not implemented';
};

exercise.six = function(arr){
    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
    //return 'Error: Question 06 not implemented';

    var newArray = arr.filter(function(num){
        if(num%2===0) return true;
        else return false;
    });
    return newArray.length;

};

exercise.seven = function(n){
    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [1, 0, 1, 0]
    // ----------------------------------------

    //return 'Error: Question 07 not implemented';

    var newArray = [];

    for (var i=0; i<n; i++){
        if(i%2===1){
            newArray.push(1);
        }
        else{
            newArray.push(0);
        }
    }

    return newArray;

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
    //return 'Error: Question 08 not implemented';

    var sum = 0;

    for(var i=0;i<str.length;i++){
        sum+=Number(str[i]);
    }
    return sum;

    //var numbers = str.split('').map(function(i) {return Number(i);});
    //return numbers.reduce(function(prev, cur) {return prev+cur;},0);
    
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
    //return 'Error: Question 09 not implemented';

    var result = func();

    return result*result;

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
    //return 'Error: Question 10 not implemented';
/*
    function multiply (a,b){
        return a*b;
    }

    return multiply;
*/
    return function(a,b){return a*b;};
};

module.exports = exercise;
