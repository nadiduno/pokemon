function carregarPokemon() {
    var idPokemon = document.getElementById("idPk").value
    var urlApi = "https://pokeapi.co/api/v2/pokemon/" + idPokemon + "/";

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)
            let imgPokemonFront = data["sprites"]["front_default"]
            let imgPokemonBack = data["sprites"]["back_default"]

            document.getElementById("nomPK").innerHTML = data["name"]
            document.getElementById("imgPkFront").setAttribute('src', imgPokemonFront)
            document.getElementById("imgPkBack").setAttribute('src', imgPokemonBack)

        })
        .catch((error) => {
            console.error("Erro API Pokemon")
        })
}