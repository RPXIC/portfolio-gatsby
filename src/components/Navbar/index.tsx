import { Link } from 'gatsby'
import { Certificate, Eye, Home } from '../icons'
import * as navbarStyles from './navbar.module.css'

const Navbar = () => (
  <nav className={navbarStyles.nav}>
    <Link
      to={'/'}
      className={navbarStyles.link}
      activeClassName={navbarStyles.current}
      title='About'
    >
      <Home />
    </Link>
    <Link
      to={'/projects'}
      className={navbarStyles.link}
      activeClassName={navbarStyles.current}
      title='Projects'
    >
      <Eye />
    </Link>
    <Link
      to={'/certificates'}
      className={navbarStyles.link}
      activeClassName={navbarStyles.current}
      title='Certificates'
    >
      <Certificate />
    </Link>
  </nav>
)

export default Navbar