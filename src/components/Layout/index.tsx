import { GatsbyImage } from 'gatsby-plugin-image'
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
  const bgImg = useBackgroundImage()

  return (
    <>
      <GatsbyImage style={{ position: 'fixed', height: '100vh' }} alt='' image={bgImg as any} />
      <div style={{ position: 'absolute', width: '100%' }}>
        <div className={layoutStyles.app}>
          <Seo pathName={pathName} />
          <Header pathName={pathName} />
          <main className={layoutStyles.main}>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
