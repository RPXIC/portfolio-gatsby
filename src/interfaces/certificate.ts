interface Fallback {
  src: string
  srcSet: string
  sizes: string
}

interface Images {
  sources: any[]
  fallback: Fallback
}

interface GatsbyImageData {
  images: Images
  layout: string
  width: number
  height: number
}

export interface ICertificate {
  gatsbyImageData: GatsbyImageData
}

interface Node {
  certificates: ICertificate[]
}

interface Edge {
  node: Node
}

interface AllDatoCmsCertificate {
  edges: Edge[]
}

export interface ICertificates {
  allDatoCmsCertificate: AllDatoCmsCertificate
}
