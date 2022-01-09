import { graphql, useStaticQuery } from 'gatsby'
import { ISeo } from '../interfaces/seo'

export const getSeo = () => {
  const data: ISeo = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
          titleTemplate
        }
      }
    }
  `)
  return data
}
