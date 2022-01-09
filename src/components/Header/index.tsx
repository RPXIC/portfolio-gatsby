import Navbar from '../Navbar'
import pathParser from '../../utils/pathParser'
import * as headerStyles from './header.module.css'

const Header = ({ pathName }: { pathName: string }) => (
  <>
    <header className={headerStyles.container}>
      <div className={headerStyles.content}>
        <div>
          <p className={headerStyles.pathText}>{pathParser({ pathName, headerTemplate: true })}</p>
        </div>
        <div className={headerStyles.navContainer}>
          <Navbar />
        </div>
      </div>
    </header>
  </>
)

export default Header
