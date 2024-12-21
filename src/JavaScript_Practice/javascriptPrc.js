let name = ['atif', 'yazdan', 'aslam', 'aditya', "ram", 'shyam']


name.push("raj")

// name.map(function (value, index){
// console.log(value, index);

// })

// let obj = {
//     "atif": "Husband",
//     "yazdan": "child",
//     "mehvish": 'wife'
// }

// console.log(obj.mehvish);

let company = 
   [ {
        "companyName": "ACTE",
        "student": 'atif',
        "teacher": 'aditya',
        "hr": 'bhagya'
    },
    {"companyName": "abc",
        "student": 'a',
        "teacher": 'b',
        "hr": 'c'
    }
]

company.map(function (value, index){
// console.log("Student: " + value.student + ", Teacher "+ value.teacher);

console.log(`${value.teacher} is a teacher, and his student name is ${value.student}`);

// console.log(value.hr);
// console.log(value.teacher);

})

// console.log(company);



// let i = 0

// while (i < name.length) {
//     console.log(name[i])
//     i++
// }

// for (let i = 0; i < name.length; i++) {

//     if (name[i] ==zz) {
        
//     }
//     console.log(name[i])
// }





