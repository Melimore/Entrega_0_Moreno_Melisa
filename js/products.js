const autos101="https://japceibal.github.io/emercado-api/cats_products/101.json"

function mostrarProductos(listaProductos){
    for(const producto of listaProductos){ 
        let li= `
            <img src="` + producto.image + `" alt="product image" width="300">

            <h4>`+ producto.name +`-`+ producto.currency +` `+producto.cost+`</h4> 
            <p> `+ producto.description +`</p> 

            <small>` + producto.soldCount + ` vendidos</small> 
            <br>
            <br>

        `;
        document.getElementById("products").innerHTML += li; 
    }

}

document.addEventListener("DOMContentLoaded", function() {
    getJSONData(autos101).then(objetoResultado =>{
        if(objetoResultado.status == 'ok'){
            mostrarProductos(objetoResultado.data.products);
        } else{
            alert("Hubo un error: "+ objetoResultado.data);
        };
    });
});
