import { getBackGroundImage } from '../services/getBackgroundImage'

export const useBackgroundImage = () => {
  const data = getBackGroundImage()
  return data.allDatoCmsBackgroundimage.edges[0].node.backgroundimage.gatsbyImageData
}

export default useBackgroundImage
