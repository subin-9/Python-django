//print 9 to 0
for(let i=9;i>=0;i--){
    console.log(i);
}

// const arr =["superman","batman","wonderwomen","flash","greenlanton"]
// reverse the array
const arr =["superman","batman","wonderwomen","flash","greenlanton"]
const reversedArr = [];
for(let i=arr.length-1;i>=0;i--){
    reversedArr.push(arr[i]);
}
console.log(reversedArr);

// only run true login using also continue
const letslearnUsersArray=[{
    name:"saugat Bagale",
    age:23,
    isLogin:true
},{
    name:"Nishant",
    age:24,
    isLogin:false
},
{
    name:"Aakriti",
    age:22,
    isLogin:true
},
{
    name:"subin",
    age:19,
    isLogin:false
},
{
    name:"kamala",
    age:19,
    isLogin:true
},
{
    name:"suman",
    age:19,
    isLogin:false
}
]
for(let i=0;i<letslearnUsersArray.length;i++){
    if(letslearnUsersArray[i].isLogin===false){
        continue;
    }   
    console.log(letslearnUsersArray[i].name);
}

