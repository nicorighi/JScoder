const productos = [
    {nombre: "memoria", precio: 100},
    {nombre: "cpu", precio: 150},
    {nombre: "fuente", precio: 80},
    {nombre: "mother", precio: 120},
    {nombre: "ssd", precio: 50},
    {nombre: "gpu", precio: 300},
]; 

let carrito = []

let seleccion = prompt ("¿Quiere armar su propia computadora?")

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("¿Quiere armar su propia computadora?")
}

if(seleccion == "si"){
    alert("A continuación obtendra nuestra lista de productos")
    let misProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio );
    alert(misProductos.join(" - "))
}   else if (seleccion == "no"){
    alert("Gracias por venir, ¡te esperamos la próxima!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "memoria" || producto == "cpu" || producto == "fuente" || producto == "mother" || producto == "ssd"  || producto == "gpu"){
        switch(producto){
            case "memoria":
                precio = 100
                break;
            case "cpu":
                precio = 150
                break;
            case "fuente":
                precio = 80
                break;
            case "mother":
                precio = 120
                break;
            case "ssd":
                precio = 50
                break;
            case "gpu":
                precio = 300
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else{
        alert("No hay Stock")
    }

    seleccion = prompt("¿Quiere agregar un nuevo producto?")

    while(seleccion === "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)