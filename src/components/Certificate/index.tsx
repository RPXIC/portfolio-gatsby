import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Certificate = ({ certificate }) => {
  const image = getImage(certificate)
  return <GatsbyImage alt='certificate' image={image} style={{ borderRadius: '1rem' }} />
}

export default Certificate
