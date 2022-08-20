const autos101="https://japceibal.github.io/emercado-api/cats_products/101.json"
/*function mostrarProductos(listaProductos){
    for (const producto of listaProductos) {
        let li= `
        <h3>${producto.name} - ${producto.currency} ${producto.cost}</h3>
        
        `
    }
}*/

function mostrarProductos(listaProductos){
    let htmlContentToAppend = "";

    for(let i = 0; i < listaProductos.length; i++){ 
        let producto = listaProductos[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ producto.name +`-`+ producto.currency + ` `+producto.cost `</h4> 
                        <p> ` + producto.description + `</p> 
                        </div>
                        <small class="text-muted">` + producto.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
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