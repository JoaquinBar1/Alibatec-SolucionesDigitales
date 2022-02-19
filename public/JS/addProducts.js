window.addEventListener('load', ()=>{
    const botonPedido = document.querySelector('#button-pedido')
    botonPedido.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('clicked')})
        let url = window.location.href.split("/");
        let id = url [url.length -1]
        let imagen = document.querySelector('.foto').src;
        let titulo = document.querySelector('.titulo-producto').innerText;
        let precio = document.querySelector('.price');
        let descuento = document.querySelector('.discount');
        let arrayProductos;
        let precioCar = Number(precio.textContent.replace('$', ''));
        let descuentoCar = Number(descuento.textContent.replace('$', ''));
    
    
        let producto = {
            idProducto: id, 
            imagen, 
            titulo,
            precioCar,
            descuentoCar
        }
        console.log(producto)
        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precioCar)
        } else {
            carrito = JSON.parse(localStorage.carrito)
            arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })
        }
        if(arrayProductos.length == 0){
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    
        let totalCarrito = 0;
    
        for (let i=0; i < carrito.length; i++) {
            if (carrito[i].descuentoCar !== 0){
                let carro = carrito[i].precioCar * carrito[i].descuentoCar/100
                totalCarrito += carro 
            }
            totalCarrito = carrito[i].precioCar
        }
        localStorage.setItem("totalCarrito", totalCarrito)
        //alert('Agregaste ' + titulo + " al carrito")
        
    })