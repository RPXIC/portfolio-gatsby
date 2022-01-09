import { getSeo } from '../services/getSeo'

export const useSeo = () => {
  const data = getSeo()
  return data.site.siteMetadata
}
