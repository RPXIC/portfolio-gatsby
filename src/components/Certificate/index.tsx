import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as certificateStyles from './certificate.module.css'

const Certificate = ({ certificate }) => {
  const image = getImage(certificate)

  return (
    <div className={certificateStyles.container}>
      <GatsbyImage alt='certificate' image={image} style={{ borderRadius: '1rem' }} />
    </div>
  )
}

export default Certificate
