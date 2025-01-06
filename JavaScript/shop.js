let menu = document.getElementById('menu')
let icons = document.getElementById('icons')
Menu.addEventListener('click', () =>{
    menu.classList.toggle('menu')
    if(icons.onclick){
        icons.style.display = 'none'
    }
})
let userName = 'Jovinco'
let dateYear = new Date().getFullYear()
let footer = document.getElementById('footer')


footer.innerHTML = `Copy ${dateYear} All right reserved ${userName}`

let slideIndex = 0;
let slide = document.querySelectorAll('.slides')

let slidesIcon = () =>{
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    
    slideIndex++;
    if(slideIndex > slide.length) {slideIndex = 1}
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slidesIcon, 3000);
}
slidesIcon()

let divAnimation = document.querySelectorAll('div')
let contactBox = document.querySelector('.contactBox')
window.onscroll = () => {
    divAnimation.forEach(animate => {
        let top = window.scrollY;
        let offset = animate.offsetTop - 180;
        let height = animate.offsetHeight;

        top >= offset && top < offset + height
            contactBox.classList.add('call')
            contactBox.style.display = 'block'
        
    })
}

// let displayCart = document.getElementById('displayCartItems')
// let displayCart1 = document.getElementById('displayCart')
// let displayCart2 = document.getElementById('displayCart2')
//  let addToCart = () =>{
//     displayCart1.value ++
//     displayCart2.value ++
// }

// addCart.addEventListener('click', () => {
//     displayCart.value ++
//     displayCart1.value ++
//     displayCart2.value ++
// })
// RemoveFromCart.addEventListener('click', () =>{
//     displayCart.value > 0 ? displayCart.value-- : displayCart.value = 0
//     displayCart1.value > 0 ? displayCart1.value-- : displayCart1.value = 0
//     displayCart2.value > 0 ? displayCart2.value-- : displayCart2.value = 0
// })
// let remove_quantity = ()=>{
//     quantity.value > 0 ? quantity.value -- : quantity.value = 0;
//     cart.value > 0 ? cart.value -- : cart.value = 0;
//     // quantity.value -- ;
// }
