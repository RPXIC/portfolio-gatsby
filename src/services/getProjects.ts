import { graphql, useStaticQuery } from 'gatsby'
import { IProjects } from '../interfaces/project'

export const getProjects = () => {
  const data: IProjects = useStaticQuery(graphql`
    query Projects {
      allDatoCmsProject {
        edges {
          node {
            title
            website
            stack
            description
            image {
              gatsbyImageData(width: 235, height: 421, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return data
}
