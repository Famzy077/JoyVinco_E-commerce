// let url = 'http://localhost:5000/product';
// const getProduct = async(req, res) => {
//     try {
//         let response = 
//     } catch (error) {
        
//     }
// }


// getProduct()
let contain = document.querySelector('.contain')
let loader = document.getElementById('loader')
const FetchData = () => {
    let xhr = new XMLHttpRequest()
        xhr.open('GET','http://localhost:5000/product', true)
        xhr.onload = function(){
            if(xhr.status === 200){
                let products = JSON.parse(this.response)
                // console.log(products)
                products.forEach(productKey => {
                    let {Viva_Plus, Price, Categories} = productKey
                    // console.log(productKey)
                    // console.log(Viva_Plus)
                    // console.log(Categories)
                    // console.log(Price)

                    let productName = document.createElement('p')
                    let productdecription = document.createElement('b')
                    let productPrice = document.createElement('p')

                    productName.innerHTML = (`${Viva_Plus}`)
                    productdecription.innerHTML = (`${Categories}`)
                    productPrice.innerHTML = (`Price: ${Price}`)

                    loader.style.display = 'block'
                    setTimeout(() => {
                        loader.style.display = 'none'
                        contain.append(productName,productdecription, productPrice)
                    }, 2000);
                })
            }
        }
    xhr.send()
}

FetchData()