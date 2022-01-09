export interface Fallback {
  src: string
  srcSet: string
  sizes: string
}

export interface Images {
  sources: any[]
  fallback: Fallback
}

export interface GatsbyImageData {
  images: Images
  layout: string
  width: number
  height: number
}

export interface Backgroundimage {
  gatsbyImageData: GatsbyImageData
}

interface Node {
  backgroundimage: Backgroundimage
}

interface Edge {
  node: Node
}

interface AllDatoCmsBackgroundimage {
  edges: Edge[]
}

export interface IBackgroundImage {
  allDatoCmsBackgroundimage: AllDatoCmsBackgroundimage
}
