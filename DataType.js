//Different data types
//string
var name1 = "Alaya";
console.log(name1) 

//number
var age = 12;
console.log(age);

//boolean
var glasses = true;
console.log(glasses);

//null
var object = null;
console.log(object);

//undefined
var marks;
console.log(marks);
marks = 100;
//console.log(marks);

//arrays
var mark = [100,90,96,98,91];
//console.log(mark);
//mark.push(100);
//console.log(mark);
//mark.pop();
//console.log(mark[0]);

for(var i = 0;i<mark.length;i++){
        console.log(mark[i]);
}

//list of arrays inside an array
var trajectory = [[200,100],[220,130],[270,180]];
var position = [290, 200];
trajectory.push(position)
console.log(trajectory);

for(var i = 0;i<trajectory.length;i++){
    console.log(trajectory[i][0], trajectory[i][1]);
}
