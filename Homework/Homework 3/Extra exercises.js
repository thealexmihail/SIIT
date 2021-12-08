//----------------ARRAY--------------------
//exercitiul 1

function is_array(value) {
    if (value instanceof Array) {
        return true;
    }
    return false;
}
console.log(is_array([1, 2, 4, 0]));
console.log(is_array('w3resource'));

//-----------------------------------------

//exercitiul 2

function array_Clone(originalArray) {
    var clonnedArray = originalArray;

    return clonnedArray;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//-----------------------------------------

//exercitiul 5

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.toString());
console.log(myColor.join('+'));

//-----------------------------------------

//exercitiul 7
//Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8

function sort(array) {
    var sortedArray = [].concat(array);
    var isSorted = 1;
    while (isSorted) {
        isSorted = 0;
        for (var i = 0; i < sortedArray.length - 1; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                var newSortedArray = sortedArray[i];
                sortedArray[i] = sortedArray[i + 1];
                sortedArray[i + 1] = newSortedArray;
                isSorted = 1;
            }
        }
    }
    return sortedArray;
}

var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sort(arr1));

//----------------STRING--------------------

//exercitiul 1
//console.log(is_string('w3resource'));
//true
//console.log(is_string([1, 2, 4, 0]));
//false

function is_string(value) {
    var takenValue = value instanceof Array;
    if (takenValue) {
        return false;
    }
    return true;
}

console.log(is_string([1, 2, 4, 0]));
console.log(is_string('w3resource'));

//-----------------------------------------

//exercitiul 2
//console.log(is_Blank(''));
//console.log(is_Blank('abc'));
//true
//false

function is_Blank(input) {
    if (input === '') {
        return true;
    }
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

//----------------OBJECT--------------------

//exercitiul 1
//Sample object:
//Sample Output: name,sclass,rollno
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student));

//-----------------------------------------

//exercitiul 2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

//-----------------------------------------

//exercitiul 3
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student).length);
