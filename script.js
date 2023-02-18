// 
// let string ="";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
// button.addEventListener('click', (e)=>{
// if(e.target.innerHTML== '='){
//     string = eval(string);
//     document.querySelector("input").value = string;
// }
// if(e.target.innerHTML== 'C'){
//     string = "";
//     document.querySelector("input").value = string;
// }
//  else{console.log(e.target)
//  string = string + e.target.innerHTML;
//  document.querySelector("input").value = string;
//  }
// console.log(e.target)
// string = string + e.target.innerHTML;
// document.querySelector("input").value = string;
// })
// })
buttons = document.querySelectorAll('button')
for (item of buttons){
    item.addEventListner('click', (e){
        buttontext = e.target.innerText;
        console.log('button text is',buttontext )
    })
}