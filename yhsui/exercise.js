var exercise = {};

exercise.one = function(a, b){
    var sum = a + b;
    return {'sum': sum};
};

exercise.two = function(arr){
    return arr[arr.length - 1];
    // ----------------------------------------
    //   QUESTION 02
    //   The function takes in arr which is an array of integers
    //   Return the last elememt in this array
    //
    //   For an input arr = [9, 3, 4], the return value should be 4
    // ----------------------------------------
};

exercise.three = function(str){
    return str.split('').join('_');
    // var newString = '';
    // for(var i =0;i<str.length; i++){
    //     newString += str[i] + '_';
    // }
    // newString += str[str.length -1];
    // return newString;

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
    // ----------------------------------------
    //   QUESTION 04
    //   The function takes in arr which is an array of integers
    //   Return a new array such that it contains squares of the
    //   input array and are in the same order
    //
    //   For an input arr = [2, 4, 6], the return should be [4, 16, 36]
    // ----------------------------------------
    // arr.forEach(function(element){
    //     return element*element;
    // });
    // return arr;
    var newArr = arr.map(function(int){
        return int*int;
    });
    return newArr;
};

exercise.five = function(obj){
    var name = obj.first_name + ' ' + obj.last_name;
    return name;
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
    var count = 0;
    arr.forEach(function(element){
        if(element % 2 == 0){
            count = count +1;
            return count;
        }
    });
    return count;
    // ----------------------------------------
    //   QUESTION 06
    //   The function takes in arr which is an array of integers
    //   Return the total number of even valued integers in the array
    //
    //   For an input arr = [1, 4, 6, 9], the return value should be 2
    // ----------------------------------------
};

exercise.seven = function(n){
    var arr = [];
    for(var i =0; i<n; i++){
        if(i % 2 ===0){
            arr.push(0);
        }
        else{
            arr.push(1);
        }
    }
    // for(var i =0; i<n; i++){
    //         arr.push(i%%2);
    // }
    // ----------------------------------------
    //   QUESTION 07
    //   The function takes in a single value n which is an integer
    //   Return a new array of length n such that each element is a 1
    //   for the odd indexes and 0 for the even indexes
    //
    //   For an input n = 4, the return value would be [0, 1, 0, 1]
    // ----------------------------------------
    return arr;
};

exercise.eight = function(str){
    var numbers = str.split('');
    var answer = numbers.reduce(function(previous,current){
        return Number(previous) + Number(current);
    });
    return answer;
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
    var func = function(a,b){
        return a*b;
    };
    return func;
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
