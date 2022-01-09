import { graphql, useStaticQuery } from 'gatsby'
import { IBackgroundImage } from '../interfaces/backgroundImage'

export const getBackGroundImage = () => {
  const data: IBackgroundImage = useStaticQuery(graphql`
    query BgImage {
      allDatoCmsBackgroundimage {
        edges {
          node {
            backgroundimage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return data
}
