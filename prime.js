
let count=0;
function equalTo42(size, arr){
for(let i=0; i<size; i++){
if(arr[i]==42){
count++;
}
}
if(count==0){
console.log("No");
}
else{
console.log("Yes");
}
}
