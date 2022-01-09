import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import Header from '../Header'
import Footer from '../Footer'
import Seo from '../Seo'
import useBackgroundImage from '../../hooks/useBackgroundImage'
import * as layoutStyles from './layout.module.css'

interface Props {
  children: React.ReactNode
  pathName: string
}

const Layout = ({ children, pathName }: Props) => {
  const res = useBackgroundImage()
  const img = getImage(res)
  const bgImg = convertToBgImage(img)

  return (
    <BackgroundImage Tag='section' {...bgImg} preserveStackingContext>
      <div className={layoutStyles.app}>
        <Seo pathName={pathName} />
        <Header pathName={pathName} />
        <main className={layoutStyles.main}>{children}</main>
        <Footer />
      </div>
    </BackgroundImage>
  )
}

export default Layout
