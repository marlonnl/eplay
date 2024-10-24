class Game {
  title: string
  description: string
  category: string
  image: string
  infos: string[]
  system: string
  id: number

  constructor(
    title: string,
    description: string,
    category: string,
    image: string,
    infos: string[],
    system: string,
    id: number
  ) {
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.infos = infos
    this.system = system
    this.id = id
  }
}

export default Game
