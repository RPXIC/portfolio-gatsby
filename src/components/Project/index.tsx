import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IProject } from '../../interfaces/project'
import * as styles from './styles.module.css'

const Project = ({ project }: { project: IProject }) => {
  const {
    title,
    description,
    stack,
    website,
    image: { gatsbyImageData },
  } = project

  const image = getImage(gatsbyImageData)

  return (
    <li className={styles.list}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={website} target='_blank' rel='noreferrer'>
        <GatsbyImage className={styles.image} image={image} alt={title || 'img'} />
      </a>
      <p className={styles.stack}>{stack}</p>
    </li>
  )
}

export default Project
