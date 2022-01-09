import { GitHub, LinkedIn, Mail /*, Download*/ } from '../icons'
import * as footerStyles from './footer.module.css'
// import { useQuery } from 'graphql-hooks'
// import { DOCS_QUERY } from 'queries/queries'

const Footer = () => {
  // const { loading, error, data } = useQuery(DOCS_QUERY)

  // if (loading) return <FooterContainer></FooterContainer>

  // const {
  // 	cv: { url },
  // } = data.allDocs[0]

  return (
    <footer className={footerStyles.container}>
      <nav className={footerStyles.navbar} data-cy='navbar-footer'>
        <a
          className={footerStyles.link}
          href='https://github.com/RPXIC'
          target='_blank'
          rel='noreferrer'
          title='GitHub'
          data-cy='link-github'>
          <GitHub />
        </a>
        <a
          className={footerStyles.link}
          href='https://www.linkedin.com/in/ruben-ponce-ca%C3%B1adas/'
          target='_blank'
          rel='noreferrer'
          title='LinkedIn'
          data-cy='link-linkedin'>
          <LinkedIn />
        </a>
        <a
          className={footerStyles.link}
          href='mailto:rpc2works@gmail.com'
          target='_blank'
          rel='noreferrer'
          title='Mail'
          data-cy='link-mail'>
          <Mail />
        </a>
        {/* {!error && (
					<a
            className={footerStyles.link}
						href={url}
						target='_blank'
						rel='noreferrer'
						title='CV'
						data-cy='link-cv'>
						<Download />
					</a>
				)} */}
      </nav>
    </footer>
  )
}

export default Footer
