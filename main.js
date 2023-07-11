function carregarPokemon() {
    var urlApi = "https://pokeapi.co/api/v2/pokemon/25";

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            let imgPokemonFront = data["sprites"]["front_default"]
            let imgPokemonBack = data["sprites"]["back_default"]
            document.getElementById("nomPK").innerHTML = data["name"]
            document.getElementById("idPk").innerHTML = data["id"]
            document.getElementById("imgPk").setAttribute('src', imgPokemonFront)
            document.getElementById("imgPkFemale").setAttribute('src', imgPokemonBack)

        })
        .catch((error) => {
            console.error("Erro na API")
        })
}