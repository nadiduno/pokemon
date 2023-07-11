console.log('OK')
function carregarPokemon() {
    var valoprPk = document.getElementById('campoPk').value;
    var urlApi = "https://pokeapi.co/api/v2/pokemon/" + valoprPk + "/";
    console.log(valoprPk)
    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)
            document.getElementById("nomPK").innerHTML = data['name'];
            document.getElementById("idPk").innerHTML = data['id'];

        })
        .catch((error) => {
            console(error)
        })
}