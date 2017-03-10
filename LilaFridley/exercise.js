var exercise = {};

exercise.one = function(a, b){
    var newObj = {};
    newObj.sum = a+b;
    return newObj;

    // var reducer = reduce(function(prev,curr){
    //     var total = prev+curr;
    //     return total;
    // });

    // var sum = reducer(a,b);
    // return sum;
    // ----------------------------------------
    //   QUESTION 01
    //   The function takes in two integers, a and b
    //   Return a new object with a key 'sum' whose value is the
    //   sum of the two integers a and b
    //
    //   For an input of a = 2 and b = 3, the returned object
    //   should look like {'sum': 5}
    // ----------------------------------------
   // return 'Error: Question 01 not implemented';
};

exercise.two = function(arr){

    var length = arr.length;
    var last = arr[length-1];

    return last;
    // ----------------------------------------
    //   QUESTION 02
    //   The function takes in arr which is an array of integers
    //   Return the last elememt in this array
    //
    //   For an input arr = [9, 3, 4], the return value should be 4
    // ----------------------------------------
    //return 'Error: Question 02 not implemented';
};

exercise.three = function(str){

    var newString = '';
    for(var i=0; i<str.length; i++){
        newString += str[i]+ '_';
    }
    var newLength = newString.length;
    //newString = newString[newString.length-1];
    return newString.slice(0,newLength-1);

    // ----------------------------------------
    //   QUESTION 03
    //   The function takes in a str which is of type string
    //   Return a new string such that the characters have an
    //   underscore between them
    //
    //   For an input of str = "apple", the return value should
    //   be "a_p_p_l_e"
    // ----------------------------------------
    //return 'Error: Question 03 not implemented';
};

exercise.four = function(arr){

    var newarr = arr.map(function(item){
        return item*item;
    });
    
    return newarr;

    // ----------------------------------------
    //   QUESTION 04
    //   The function takes in arr which is an array of integers
    //   Return a new array such that it contains squares of the
    //   input array and are in the same order
    //
    //   For an input arr = [2, 4, 6], the return should be [4, 16, 36]
    // ----------------------------------------
    //return 'Error: Question 04 not implemented';
};

exercise.five = function(obj){

    var WholeName = obj.first_name+' '+obj.last_name;

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
    return WholeName;
};

exercise.six = function(arr){

    var evens = arr.filter(function(item){
        return item%2 == 0; 
    });

    var numEven = evens.length;
    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
    return numEven;
};

exercise.seven = function(n){

    var newArray = [];
    for(var i=0; i<n; i++){
        newArray[i] = i;
    }

    var indexArray = newArray.map(function(item){
        return item%2;
    });
    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [0, 1, 0, 1]
    // ----------------------------------------
    return indexArray;
};

exercise.eight = function(str){

    var newArray = [];
    for(var i=0; i<str.length; i++){
        newArray[i] = parseInt(str[i]);
    }
    //return newArray;

    var sumVal = newArray.reduce(function(prev, current){
        return prev+current;
    });
    // ----------------------------------------
    //   QUESTION 08
    //   The function takes in str which is a string. This string
    //   will always be a string representation of an integer.
    //   Return a new integer such that it is the sum of the individual
    //   integer representation of the characters of the string
    //
    //   For str = '1234', return 10
    // ----------------------------------------
    return sumVal;
};

exercise.nine = function(func){

    var num = func();
    var square = num*num;
    // ----------------------------------------
    //   QUESTION 09
    //   The function takes in a parameter func which itself is a function
    //   that return an integer when executed
    //   Return a new integer such that it is a square of the integer obtained
    //   on executing func
    //
    //   For an obtained value of 5 on executing func, return 25
    // ----------------------------------------
    return square;
};

exercise.ten = function(){

    var newFun = function(a,b){
        return a*b;
    };

    // ----------------------------------------
    //   QUESTION 10
    //   Return a function that is capable of accepting two
    //   parameters a and b of integer type and returning the
    //   product of a and b (a * b) on execution
    //
    //   For this, the return value would be of the form
    //   function(a, b) { return /*  do something  */ }
    // ----------------------------------------
    return newFun;
};

module.exports = exercise;
