import { graphql, useStaticQuery } from 'gatsby'
import { ICertificates } from '../interfaces/certificate'

export const getCertificates = () => {
  const data: ICertificates = useStaticQuery(graphql`
    query Certificates {
      allDatoCmsCertificate {
        edges {
          node {
            certificates {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return data
}
