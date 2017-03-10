var exercise = {};

exercise.one = function(a, b){

    
    return {'sum' : a + b};
    
    // ----------------------------------------
    //   QUESTION 01
    //   The function takes in two integers, a and b
    //   Return a new object with a key 'sum' whose value is the
    //   sum of the two integers a and b
    //
    //   For an input of a = 2 and b = 3, the returned object
    //   should look like {'sum': 5}
    // ----------------------------------------
    //return 'Error: Question 01 not implemented';
};

exercise.two = function(arr){
    
    return arr[arr.length-1];
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
    
    return str.split('').join('_');

    // or you can set an empty string and then iterate
    // through different items

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
    
    // arr.forEach(function(element){
    //     element = element * element;
    //     //console.log(element);
    // });

    var answer = arr.map(function(number){
        return number * number;
    });

    return answer;

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
    
    return obj.first_name + ' ' + obj.last_name;
    
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
    //return 'Error: Question 05 not implemented';
};

exercise.six = function(arr){
    
    
    // can use for each to sum everything if number is divisible by 2
    // array is 1, 4, 6, 9      

    // I tried to sum the count with i, but i is the position
    // it's already looping through enough times to be fine 

    var count = 0;
    arr.forEach(function(item, i, list){
        if (item % 2 === 0) {
            count += 1;
        }
    });

    return count;

   // NEATER
    // retun arr.filter(function(i) {
    //     return i % 2 === 0;
    // }).length;


    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
    //return 'Error: Question 06 not implemented';
};

exercise.seven = function(n){
    
    var array = [];
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            array[i] = 0;
        }
        else {
            array[i] = 1;
        }
    };

    return array;

    // shorter way, for loop. then array.push(i%2)

    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [0, 1, 0, 1]
    // ----------------------------------------
    //return 'Error: Question 07 not implemented';
};

exercise.eight = function(str){
    
    // str.forEach(function(item, i, list){

    // })

    //console.log(str[1]);

    // var sum = 0;
    // for (var i = 0; i < str.length + 1; i++){
    //     var number = Number.str[i];
    //     sum += number;
    // }
    // return sum;

    // var numbers = str.split('');
    // return numbers.reduce(function(previous, current){
    //     // Number requires paraentheses
    //     return Number(previous) + Number(current);
    // }, 0);

    var numbers = str.split('').map(function(i){ 
        return Number(i);
    });
    return numbers.reduce(function(previous, current){
        // Number requires paraentheses
        return previous + current;
    }, 0);

    //for each position in the string
    // add that character to an array as a number
    // sum all of the numbers in the array
    
    // array 1234

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
};

exercise.nine = function(func){
    
    // var number = func();
    // return number * number;
    return func() * func();

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
};

exercise.ten = function(){
    
    // var product = function(a,b) {
    //     return a * b;
    // };
    
    // return product;

    return function(a,b) {return a * b};
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
};

module.exports = exercise;
