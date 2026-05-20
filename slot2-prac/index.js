function sum(a,b) {
    return a +b; 
}

function sayHello() {
    console.log("Hello world");
}

sayHello();

console.log(sum(1,4));

const calculate2 = (a,b) => {
    console.log("Tổng: " + (a+b));
    console.log("Hiệu: " + (a-b));
    console.log("Tích: " + (a*b));
    console.log("Thương: " + (a/b));
}

calculate2(1,2);

var arr1 = [1,2,3,4,5];
console.log(arr1);

var arr2 = new Array(1,2,3,4);
console.log(arr2);

console.log(arr1[1]);

arr1[1] = 200;
console.log(arr1[1]);

arr1.push(6);
console.log(arr1[arr1.length-1]);

arr1.pop();
console.log(arr1[arr1.length-1]);

arr1.shift();
console.log(arr1);

arr1.unshift(0);
console.log(arr1);


var arr3 = ['Hello world', 3, {name: "HOho"}, [1,2,3]];
console.log(arr3);

//cách tạo object với function
function Person(name, age, city, gioitinh) {{
    this.name = name;
    this.age = age;
    this.city = city;
    this.gioitinh = gioitinh;
    this.sayHello = () => {console.log(`Hello, my name is ${name}`)};
}}
const person3 = new Person("Bob", 12, 'Quang Ninh', "Male");
console.log(person3);

class Student {
    constructor(name, age, city, gioitinh) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.gioitinh = gioitinh;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const student1 = new Student("Hehe", 13, "Hanoi", 'Female');
console.log(student1);
student1.sayHello();

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name:'John', age: 13};
            resolve(data);
        }, 2000);
    })
}

fetchData()
    .then(data => console.log("Dữ liệu đã đc lấy: " + data))
    .catch(error => console.log("Lỗi rồi: " + error));

async function getData() {
    try {
        const data = await fetchData();
        console.log("Dữ liệu đã đc lấy: " + data);
    } catch(error) {
        console.log("Lỗi rồi: " + error)
    }
}

getData();

//===================================================

//EXERCISE NO.1
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
//BT1.1
console.log(people.find(person => person.age>=10 && person.age<=20));
//BT1.2
let result1 = people.filter(person => person.age >= 10 && person.age <= 20);
result1.forEach(person => console.log(person));
//BT1.3
console.log(people.every(person => person.age>=10 && person.age<=20));
//BT1.4
console.log(people.some(person => person.age>=10 && person.age<=20));

//EXERCISE NO.2
var array = [1, 2, 3, 4];
console.log(array.reduce((acc, cur) => acc + cur, 0));
console.log(array.reduce((acc, cur) => acc * cur, 1));

//EXERCISE NO.3
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

//BT3.1
companies.forEach(company => console.log(company.name));
//BT3.2
companies.filter(company => company.start > 1987).forEach(company => console.log(company))
//BT3.3
const retailCompany = companies.filter(company => company.category === 'Retail')
    .map(company => ({...company, start: company.start+1}));
console.log(retailCompany);
//BT3.4
const ascEndCompany = companies.sort((a,b) => a.end - b.end);
console.log(`Ascending by date company:`);
console.log(ascEndCompany);
//BT3.5
console.log(ages.sort((a,b) => b-a));
//BT3.6
console.log("Age sum: " + ages.reduce((acc, cur) => acc + cur, 0));
//BT3.7
const {name: name1, category} = companies[0];
const newObj = {
    // ...companies[0], 
    name1, category,
    print() {return `Name: ${this.name1}`} //dùng name1 là nó lấy cái ở dòng 163
};
console.log(newObj.print());
//BT3.8
function calSum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(calSum(1,2,3,4,5,6,7,8,9,10));
//BT3.9
function returnArr(...args) {
    return args.flat(Infinity);
}
console.log(returnArr([1, 2], [3, 4], [5, 6, {name: "Hehe"},3]));
//BT3.11
let count = 0;
function increCount() {
    count++;
}
increCount();
increCount();
console.log(count);
//BT3.12
function destructParams1(urlString) {
    const queryString = urlString.split("?")[1];
    const arr = queryString.split("&").map(item => {
        const [key, value] = item.split("=");
        return {[key]: value};
    });
    return Object.assign({},...arr);
    // Object.assign({}, ...arr) nhận một danh sách các object 
    // (do spread ...arr trải ra), sao chép lần lượt các thuộc 
    // tính vào object rỗng.
    //Object.assign(target, ...sources)
    //Chức năng: Sao chép tất cả các thuộc tính tự liệt kê (enumerable 
    // own properties) từ các object nguồn (sources) vào object đích (target), 
    // sau đó trả về target.
}
function destructParams2(urlString) {
    const queryString = urlString.split("?")[1];
    const arr = queryString.split("&").map(item => {
        const [key, value] = item.split("=");
        return [key, value];
    });
    return Object.fromEntries(arr);
    //Object.fromEntries(iterable)
    //Chức năng: Tạo một object mới từ một iterable (ví dụ mảng, Map, Set) 
    // chứa các cặp [key, value]. Ngược lại với Object.entries().
}
console.log(destructParams1("https://example.com?name=jack&age=20&city=hanoi"));
console.log(destructParams2("https://example.com?name=jack&age=20&city=hanoi"));

//BT5
function callRandom() {
    return new Promise((resolve, reject) => {
        const ran = Math.floor(Math.random()*10);
        if(ran>5) resolve(ran);
        else reject("Error");
    });
}
callRandom().then(res => console.log(res)).catch(err => console.log(err));
callRandom().then(res => console.log(res)).catch(err => console.log(err));

//===========================================

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and age ${this.age}`);
    }
}

class Student2 extends Person2 {
    constructor(name, age, scores) {
        super(name, age);
        this.scores = scores;
    }

    calculateAvgScore() {
        return this.scores.reduce((acc, cur) => acc + cur, 0)/this.scores.length;
    }

    introduce() {
        console.log(`My name is ${this.name} and age ${this.age} and score ${this.scores}`);
    }

}

// vừa rest vừa spread operator
function createScores (...scoreList) {
    return [...scoreList];
}

const student2 = new Student2("Hehe", 30, [8,7,9,10]);
student2.introduce();
console.log("Avg score: " + student2.calculateAvgScore());
const {name, age} = student2;
console.log(`Name: ${name} and age: ${age}`);

let existingScore = [7,8,10];
const newScore = [3,8,10];
existingScore = [...existingScore, ...newScore];
console.log(existingScore);
//SPREAD với array (dùng để concat các array với nhau), với object (thì override existing key nếu có)

//reduce ở trên dùng rồi
console.log("Filter passing score: " + existingScore.filter(score => score>7));
console.log("All scores reduced by half: " + existingScore.map(score => score/2));

function evaluatePerformance(studentAvgScore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(studentAvgScore>=8)
                resolve("Excellent student");
            else
                reject("Need improvement");
        }, 1000);
    });
}

evaluatePerformance(8.8)
    .then(result => console.log("Result: " + result))
    .catch(error => console.log("Result: " + error));

evaluatePerformance(7.6)
    .then(result => console.log("Result: " + result))
    .catch(error => console.log("Result: " + error));

/* GIẢI THÍCH PROMISE:
    Trong hàm executor của new Promise((resolve, reject) => {...}), cả hai tham số đều là tùy chọn về mặt cú pháp – bạn có thể khai báo ít hơn 2 tham số (ví dụ chỉ resolve, hoặc thậm chí không khai báo tham số nào). Tuy nhiên:
        resolve là tham số thứ nhất. Nếu bạn không khai báo nó, bạn sẽ không thể gọi nó để báo thành công.
        reject là tham số thứ hai. Bạn có thể bỏ qua nếu không có nhu cầu từ chối Promise.
    👉 Kết luận: Không có tham số nào là "bắt buộc" về mặt khai báo. Nhưng để Promise có thể "kết thúc" (chuyển từ pending sang fulfilled hoặc rejected), bạn cần gọi ít nhất một trong hai hàm (resolve hoặc reject) bên trong executor. Nếu không gọi, Promise sẽ mãi ở trạng thái pending.
        Ví dụ bạn chỉ gọi reject mà không gọi resolve thì Promise vẫn kết thúc (ở trạng thái rejected).
            new Promise((resolve, reject) => {
                reject(new Error("Lỗi cố định"));
            }).catch(err => console.log(err));

    Giải thích về .then() và .catch() trong code của bạn
        fetchData()
            .then(data => console.log("Dữ liệu đã đc lấy: " + data))
            .catch(error => console.log("Lỗi rồi: " + error));
    .then(callback) – Được gọi khi Promise được resolve (thành công). Tham số data chính là giá trị được truyền vào resolve(data).
    .catch(callback) – Được gọi khi Promise bị reject (thất bại). Tham số error là giá trị được truyền vào reject(error) (thường là Error object).
    Vì trong fetchData của bạn chỉ gọi resolve(data) mà không gọi reject, nên .then sẽ chạy, .catch sẽ không bao giờ chạy.
    */