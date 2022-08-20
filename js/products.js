const autos101="https://japceibal.github.io/emercado-api/cats_products/101.json"
/*function mostrarProductos(listaProductos){
    for (const producto of listaProductos) {
        let li= `
        <h3>${producto.name} - ${producto.currency} ${producto.cost}</h3>
        
        `
    }
}*/

function mostrarProductos(listaProductos){

    for(const producto of listaProductos){ 
        let li= `
        <div>
            <div>
                <div>
                    <img src="` + producto.image + `" alt="product image">
                </div>
                <div>
                    <div>
                        <div >
                        <h4>`+ producto.name +`-`+ producto.currency + ` `+producto.cost `</h4> 
                        <p> ` + producto.description + `</p> 
                        </div>
                        <small>` + producto.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `;
        document.getElementById("autos").innerHTML += li; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
    getJSONData(autos101).then(objetoResultado =>{
        if(objetoResultado.status == 'ok'){
            mostrarProductos(objetoResultado.data.products)
        } else{
            alert("Hubo un error: "+ objetoResultado.data)
        }
    })
})})