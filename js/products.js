const autos101="https://japceibal.github.io/emercado-api/cats_products/101.json"
const juguetes102 = "https://japceibal.github.io/emercado-api/cats_products/102.json"
const muebles103 = "https://japceibal.github.io/emercado-api/cats_products/103.json"
let listaProductos=[]
let min= undefined;
let max= undefined;

function mostrarProductos(lista){
    document.getElementById("products").innerHTML =""
    for(const producto of lista){ 

        if((!(parseInt(producto.cost) < min)) && (!(parseInt(producto.cost) >max))){
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

}

document.addEventListener("DOMContentLoaded", function() {
if(localStorage.getItem("catID")==101){ 
    getJSONData(autos101).then(objetoResultado =>{
        if(objetoResultado.status == 'ok'){
            listaProductos = objetoResultado.data.products;
            mostrarProductos(listaProductos);
        } else{
            alert("Hubo un error: "+ objetoResultado.data);
        };
    });
} else if(localStorage.getItem("catID")==102){
    getJSONData(juguetes102).then(objetoResultado =>{
        if(objetoResultado.status == 'ok'){
            listaProductos = objetoResultado.data.products;
            mostrarProductos(listaProductos);
        } else{
            alert("Hubo un error: "+ objetoResultado.data);
        };
    });
} else if(localStorage.getItem("catID")==103){
    getJSONData(muebles103).then(objetoResultado =>{
        if(objetoResultado.status == 'ok'){
            listaProductos = objetoResultado.data.products;
            mostrarProductos(listaProductos);
        } else{
            alert("Hubo un error: "+ objetoResultado.data);
        };
    });
} else {
    alert("Assertion fail")
}
});

document.getElementById("filtrar").addEventListener("click", function(){
    min= parseInt(document.getElementById("min").value);
    max= parseInt(document.getElementById("max").value);
    mostrarProductos(listaProductos)

})

document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("min").value="";
    document.getElementById("max").value="";
    min=undefined;
    max=undefined;
    mostrarProductos(listaProductos);
})

document.getElementById("asc").addEventListener("click", function(){
    listaProductos.sort(function (a, b){
        return parseInt(a.cost) - parseInt(b.cost)
    });
    mostrarProductos(listaProductos);
})

document.getElementById("des").addEventListener("click", function(){
    listaProductos.sort(function (a, b){
        return parseInt(b.cost) - parseInt(a.cost)
    });
    mostrarProductos(listaProductos);
})

document.getElementById("relevancia").addEventListener("click", function(){
    listaProductos.sort(function (a, b){
        return parseInt(b.soldCount) - parseInt(a.soldCount)
    });
    mostrarProductos(listaProductos);
})