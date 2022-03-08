var nameCourse = 'JavaScript';
var priceCourse = 1000;

//// define object with key: value and method
var course = {
    //// key and value same, write sort
    nameCourse,
    priceCourse,
    //// we can change getName = function() to getName()
    //// that is sorthand
    getName(){
        return nameCourse;
    }
}
console.log(course);

//// define key for object as variable
var fieldName = 'name';
var fieldPrice = 'price';

const courseVariable = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000
}
console.log(courseVariable);