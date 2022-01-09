interface SiteMetadata {
  description: string
  image: string
  siteUrl: string
  title: string
  titleTemplate: string
}

interface Site {
  siteMetadata: SiteMetadata
}

export interface ISeo {
  site: Site
}
