import { ImageDataLike } from 'gatsby-plugin-image'

interface Image {
  gatsbyImageData: ImageDataLike
}

export interface IProject {
  title: string
  website: string
  stack: string
  description: string
  image: Image
}

export interface Edge {
  node: IProject
}

interface AllDatoCmsProject {
  edges: Edge[]
}

export interface IProjects {
  allDatoCmsProject: AllDatoCmsProject
}
