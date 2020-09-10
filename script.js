const lista = [{
                  name: "The New Gate",
                  subtitle: "Kazanami, Shinogi & Miwa, Yoshiyuki (Arte)",
                  summary: "The New Gate, um jogo online que havia se transformado em um jogo de morte, e que graças aos esforços de Shin, um dos jogadores mais antigos, dezenas de milhares de jogadores que haviam sido arrastados para esse jogo foram libertados. Mas depois que ele derrotou o último chefe e libertou a todos, ele foi engolido por uma luz estranha e se viu dentro do mundo do jogo 500 anos no futuro.",
                  image: "imagens/gate.jpg"
              },
              {
                  name: "One Punch-Man",
                  subtitle: "ONE & Murata, Yusuke (Arte)",
                  summary: "A história segue o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso.",
                  image: "imagens/punch.jpg"
              },
              {
                  name: "Shokugeki no Souma",
                  subtitle: "Jang Sung-Lak",
                  summary: "O sonho de Souma Yukihira é se tornar um chef de primeira no restaurante de seu pai e superar suas habilidades de culinária, mas assim que se gradua no ensino fundamental, seu pai, Jouichirou Yukihira, fecha o restaurante para cozinhar nos Estados Unidos. Embora oprimido, o espírito de luta de Souma se reacende pelo desafio de Jouichirou no qual é sobreviver numa escola de culinária de elite onde apenas 10% dos estudantes se graduam. Poderá Souma sobreviver?",
                  image: "imagens/souma.jpg"
              }];

for (topico of lista) {
    var listaTopicos = document.getElementById("listaMangas")
    var listaItems = document.createElement("DIV")
    listaItems.id = "item_lista"

    var nome = document.createElement("H1")
    nome.innerText = topico.name
    nome.id = "item_nome"

    var subtitulo = document.createElement("H2")
    subtitulo.innerText = topico.subtitle
    subtitulo.id = "item_subtitulo"

    var sinopse = document.createElement("P")
    sinopse.innerText = topico.summary
    sinopse.id = "item_sinopse"

    var figura = document.createElement("IMG")
    figura.src = topico.image
    figura.id = "item_imagem"

    listaItems.appendChild(nome)
    listaItems.appendChild(subtitulo)
    listaItems.appendChild(sinopse)
    listaItems.appendChild(figura)

    listaTopicos.appendChild(listaItems)
}
