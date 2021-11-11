export interface Movie {
  id: string,
  title: string,
  description: string,
  actors: string[]
}

export interface Review {
  id: string,
  grade: number,
  movie: Movie
}

export interface Actor {
  id: string,
  firstName: string,
  lastName: string
}
