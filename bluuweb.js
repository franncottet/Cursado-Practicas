const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const fragment= document.createDocumentFragment()
const botones= document.querySelectorAll(".card .btn")

console.log(carrito);
console.log(template);
console.log(fragment);
console.log(botones);

const carritoObjeto = {}

const agregarProducto = (e) => {
console.log(e.target.dataset.fruta);

const producto= {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1
}

carritoObjeto[producto.titulo]=producto

}




botones.forEach((btn) => btn.addEventListener("click", agregarProducto))

