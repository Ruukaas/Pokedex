const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoPokemonAberto = document.querySelector(".aberto");
        if (cartaoPokemonAberto != null) { //Para o primeiro caso não dar erro
            cartaoPokemonAberto.classList.remove("aberto");
        }

        const pokemonAtivoNaListagem = document.querySelector(".ativo");
        if(pokemonAtivoNaListagem != null) {//Para o primeiro caso não dar erro
            pokemonAtivoNaListagem.classList.remove("ativo");
        }

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const cartaoPokemonParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`);
        cartaoPokemonParaAbrir.classList.add("aberto");

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add("ativo");
    })
})

