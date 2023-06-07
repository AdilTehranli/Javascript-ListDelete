"use strict"
let list = [];
let listul = document.getElementById("list");
function todo() {
  let inp = document.getElementById("inp");
  if(inp.value.length===0){
    alert('empty')
  }else{
    list.push(inp.value);
    Display()
inp.value = "";
}

}
function Delete(num) {
  list.splice(num, 1);
  Display();
}
function Display(){
    let data = "";
    for (let i = 0; i < list.length; i++) {
      data += `<li class="list-group-item d-flex justify-content-between">
      ${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn=sm">Delete</button> </li> `;

    }
    listul.innerHTML = data;

}


// let nums = [1, 2, 3, 4];
// let sum=0;
// for(let i =0;i<9;i++){
//   let num= nums.slice(nums.length-3);
//   sum=num.reduce((a,b)=>a+b);
//   nums.push(sum)

// }
// console.log(nums)