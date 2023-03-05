// var form = document.getElementById("forms");
// console.log(form.value);
// form.onclick = function(e){
//   // e.preventDefault();
// var name = document.getElementById("name").value;
//   console.log(name);
// document.getElementById('print').innerHTML=name.toUpperCase();
// }
const bt=document.getElementById("values");
const message=document.querySelector(".textmessage");
const hi=document.querySelector(".hi");
const button=document.querySelector(".btn");

// console.log(hi.textContent);
button.onclick=(e)=>{
e.preventDefault();//prevent form from autosubmitting
const name=document.getElementById("formvalue");
console.log(name);
// console.log(name);
if(name.value==='')
{
  const val1=hi.textContent;
  // hi.textContent=' ';
message.classList.add('show');
setTimeout(()=>{
message.classList.remove('show');
},4000)
}
else
{
 // message.textcontent="hi"; 
     hi.textContent=name.value;
     name.value='';
}
}