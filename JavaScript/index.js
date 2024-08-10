let menu = document.getElementById('menu')
let icons = document.getElementById('icons')
Menu.addEventListener('click', () =>{
    menu.classList.toggle('menu')
    if(icons.onclick){
        icons.style.display = 'none'
    }
})



// icon.addEventListener('click', (e) => {
//     e.preventDefault()
//     search.classList.toggle('searchs')
// })


let slideIndex = 0;
let slide = document.querySelectorAll('.slides')


let slidesIcon = () =>{
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    
    slideIndex++;
    if(slideIndex > slide.length) {slideIndex = 1}
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slidesIcon, 4000);
}
slidesIcon()

let prod = document.getElementById('prod_1')
prod.addEventListener('click', (f)=>{
    f.preventDefault();
    prod.style.backgroundColor = 'orange';
    prod.style.color = 'white';
})


let Fetching = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fakestoreapi.com/users', true)
    xhr.onload = function (){
        if(xhr.status === 200){
            let users = JSON.parse(this.response)
            console.log(users[0])
            users.forEach(getUsers => {
                let {name, address} = getUsers;
                // console.log(name.firstname)
                console.log(address.city)
            });
        }
    }
    xhr.send();
}
Fetching();