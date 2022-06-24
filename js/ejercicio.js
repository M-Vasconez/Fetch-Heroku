let cargarDatos = () => {
    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
        .then(Response => Response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            
            let escritores = xml.getElementsByTagName('escritor')
            for(let escritor of escritores){
                let id = escritor.getElementsByTagName('id')[0].textContent
                let nombre = escritor.getElementsByTagName('nombre')[0].textContent

                let plantilla = `<option value= "${id}">${nombre}</option>`
                document.querySelector('div.input-group > select').innerHTML += plantilla
            }
        })       
        .catch(error => {
            alert("Error de carga")
        })
}


window.addEventListener('DOMContentLoaded',(event) => {
  cargarDatos();
})

let cargarDatosFrases = () => {
    fetch ("https://dataserverdaw.herokuapp.com/escritores/frases")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(console.log);
}

const selectElements = document.querySelector('custom-select custom-select-lg form-control ');
selectElements.addEventListener('change', (event => {
    const result = document.querySelector('#frases');
    result.textContent = `${event.taget.value}`;

    
}))

