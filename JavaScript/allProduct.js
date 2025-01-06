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

let contactBox = document.querySelector('.contactBox')
let divAnimation = document.querySelectorAll('div')
window.onscroll = () => {
    divAnimation.forEach(animate => {
        let top = window.scrollY;
        let offset = animate.offsetTop - 200;
        let height = animate.offsetHeight;

        if(top >= offset && top < offset + height){
            animate.classList.add('show-animation')
        }else{
            animate.classList.remove('show-animation')
        }

        top >= offset && top < offset + height
            contactBox.classList.add('call')
            contactBox.style.display = 'block'
    })
}


let searchInput = document.getElementById('search')
let btnSearch = document.getElementById('btnSearch')
// let searchResult = document.getElementById('searchResult')

// // Get the products
let products = document.querySelectorAll('.checkIndex')

btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    let searchValue = searchInput.value.toLowerCase()
    products.forEach((product) => {
      let productName = product.querySelector('h3').textContent.toLowerCase()
      
      if(productName.includes(searchValue)){
        product.style.display = 'block'
        // searchResult.innerHTML = 'Product available, click to see details '
      } else {
        product.style.display = 'none'
        // searchResult.style.color = 'red'
        // searchResult.innerHTML = 'Product couldn\'t be found. Click to see available products'
      }
    })
  })
