obj = [
    {name: "john", age: 32},
    {name: "cliff", age: 25},
    {name: "joe", age: 55},
    {name: "george", age: 22},
    {name: "john", age:32},
    {name: "jay", age:"cliff"}
];

function objectcontain(obj, j, k){
    var vals =[];
    for(let i=0; i<Object.keys(obj).length; i++){
        if(obj[i].age==k && obj[i].name==j){
            vals.push(i)
        }
    }
    console.log(vals)
}

objectcontain(obj, "john", 32);

function objectcontainall(obj, k){
    var vals =[]
    for(let i=0; i<Object.keys(obj).length; i++){
        if(obj[i].age==k || obj[i].name==k){
            vals.push(i)
        }
    }
    console.log(vals);
}

objectcontainall(obj, "cliff");

