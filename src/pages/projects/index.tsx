import { Layout, ProjectList } from '../../components'
import { useProjects } from '../../hooks/useProjects'
import { PageProps } from 'gatsby'

const Projects = (props: PageProps) => {
  const projects = useProjects()

  return (
    <Layout pathName={props.location.pathname}>
      <ProjectList projects={projects} />
    </Layout>
  )
}

export default Projects
