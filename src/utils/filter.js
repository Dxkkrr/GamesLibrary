// Ajuda do ChatGPT - Criação do Filtro
export function filterGames(games) {
  const blockedWords = [
    'porn',
    'sex',
    'hentai',
    'adult',
    'nsfw'
  ]

  return games.filter((game) => {
    const name = game.name.toLowerCase()

    return !blockedWords.some(word =>
      name.includes(word)
    )
  })
}
