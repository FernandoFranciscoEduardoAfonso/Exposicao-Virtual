//feedbacks de obras
export interface CreateArtFeedbackProps {
  estrelas: number
  comentario: string
  idObra: string,
  idAvaliadador: string
}
export interface ArtFeedbackDataProps {
  idClassificacao: number,
  estrelas: number
  comentario: string
  dataCriacao: Date,
  dataAtualizacao: Date,
  Obra: any,
  idObra: string,
  idAvaliadador: string
}

//feedbacks de artistas
export interface CreateArtistFeedbackProps {
  estrelas: number
  comentario: string
  idUsuario: string,
  idAvaliadador: string
}
export interface ArtistFeedbackDataProps {
  idClassificacao: number,
  estrelas: number
  comentario: string
  dataCriacao: Date,
  dataAtualizacao: Date,
  Usuario: any,
  idUsuario: string,
  idAvaliadador: string
}
