import { getProjects } from '../services/getProjects'

export const useProjects = () => {
  const data = getProjects()
  return data.allDatoCmsProject.edges.map(({ node }) => node)
}
