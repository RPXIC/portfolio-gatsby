import { IProject } from '../../interfaces/project'
import Project from '../Project'
import * as styles from './styles.module.css'

const ProjectList = ({ projects }: { projects: IProject[] }) => {
  if (projects.length === 0) return <p>No projects</p>

  return (
    <ul className={styles.container}>
      {projects.map((project: IProject, i: number) => (
        <Project key={i} project={project} />
      ))}
    </ul>
  )
}

export default ProjectList
