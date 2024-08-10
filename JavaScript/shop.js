// const url = 'http://localhost:4005'
// const getproduct = async() => {
//     try {
//     const product = await fetch(url)
//     let response = await product.json()
//         console.log(response)
//     } catch (error) {
//         console.error(error)
//     }
// }

const contain = document.getElementById('contain')
// const ajax = () => {
//     let xhr = new XMLHttpRequest()
//     // xhr.open('Get', 'http://localhost:3001/', true)
//     xhr.open('Get', 'http://localhost:4005', true)
//     xhr.onload = function (){
//         if(xhr.status === 200){
//             let count = JSON.parse(this.response)
//             console.log(count[0])
//             for(counts of count){
//                 console.log(counts)
//                 let p = document.createElement('p')
//                 p.innerHTML = counts, count[counts]
//                 contain.appendChild(p)
//             }
//         }
//     }
//     xhr.send()
// }
// ajax()



let Product = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET',  "https://fakestoreapi.com/users", true)
    xhr.onload = function () {
        if(xhr.status === 200){
            console.log("Successfully fetched")
            let productResponse = JSON.parse(xhr.response)
            console.log(productResponse[0])
        }
    }
    xhr.send()
}
Product()