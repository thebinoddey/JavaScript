let array = ["A", "B", "C", "D", "E"];
console.log(array);

let marks = [37, 78, 87, 100, 92];
console.log(marks); //[37, 78, 87, 100, 92]
console.log(marks.length); //5
console.log(marks[0]); //37

//print all elements of array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

//for-of
for (let element of marks) {
    console.log(element);
}