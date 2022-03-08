//// ARRAY
var array = ['JavaScript','PHP','Ruby'];
console.log("Array value: ", array);
//// giả sử muốn lấy a,b,c tương ứng với từng phần tử trong mảng
var [a,b,c] = array;
console.log("check a,b,c >>>>" ,a,b,c);
//// giả sử chỉ muốn lấy a và c
var [a,,c] = array;
console.log("check a,c >>>>",a,c);

//// giả sử chỉ muốn lấy a
var [a,...rest] = array;
console.log("check a >>>>",a);
console.log("check rest >>>>",rest);


//// OBJECT
var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJs'
    }
}

console.log("Object value: ",course);

// Giả sử muốn lấy name, price, image
var {name,price,image} = course;
console.log("check element >>>>", name,price,image);

// giả sử muốn lấy name của children
var {name: parentName, children: {name:chilrenName}} = course;
console.log('check parent name: ', parentName);
console.log('check children name: ', chilrenName);

// giả sử muốn lấy ra một field không có trong object 
var {name,description = 'default value'} = course;
console.log(name);
console.log(description);

//// Rest parametter
function logger(...params){
    console.log("rest params :", params);
}

logger(1,2,3,4,5,6,7,8);