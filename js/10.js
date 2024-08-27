//? Розробка форми пошуку в google & google map
const chek1 = document.getElementById('chek1'),
input = document.getElementById('input'),
btn = document.getElementById('btn');


const url=['https://www.google.com/search?q=', 'https://www.google.com/maps?q=']
let cheked = false
btn.addEventListener('click',()=>{
    let m;
    cheked?m=url[1]:url[0]

    location.href= m+input.value;
    obj.link=m+input.value;
    console.log("Посилання: "+ obj.link)
})
chek1.addEventListener('input',()=>{
    chek1.checked?cheked=true:cheked=false;
    console.log(cheked)
})

let obj={
    link:""
}