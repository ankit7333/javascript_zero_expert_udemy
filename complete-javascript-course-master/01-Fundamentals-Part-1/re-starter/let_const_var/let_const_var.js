
//let
let age = 30;
console.log(age);

age = 31;
console.log(age);

//const 
const birthYear = 1991;
// birthYear = 1990; //cannot resign value
// const job; // required initilizing value;

//var
var job = 'UI designer';
console.log(job);

job = 'Teacher';
console.log(job);

lastName = 'Doe';
console.log(lastName);

const tests = [
    {
        "User": "neil",
        "Language": "php",
        "Score": '80'
    }, {
        "User": "neil",
        "Language": "java",
        "Score": "70"
    }, {
        "User": "bipin",
        "Language": "php",
        "Score": "70"
    }, {
        "User": "bipin",
        "Language": "java",
        "Score": "60"
    }, {
        "User": "bipin",
        "Language": "javascript",
        "Score": "50"
    }, {
        "User": "ketan",
        "Language": "php",
        "Score": "80"
    }, {
        "User": "ketan",
        "Language": "java",
        "Score": "80"
    }, {
        "User": "ketan",
        "Language": "javascript",
        "Score": "80"
    }
  ];

//   sort user  by language known more than and equal to 3
let obj ={};
tests.forEach((test) => {
    if(obj[test.User]?.User == test.User){
        if(Array.isArray(obj[test.User].Language)){
            let tempLang = [...obj[test.User].Language];
        }else{
            tempLang = [obj[test.User].Language];
        }
        tempLang.push(test.Language);
        obj[test.User].Language = tempLang;
        let score = obj[test.User].Score ? Number(obj[test.User].Score) + Number(test.Score) : Number(test.Score);
        obj[test.User].Score = score;
    }else{
        obj[test.User] = test; 
    }
});
console.log(obj);
  
  
