import { PageProps } from 'gatsby'
import { Home, Layout } from '../components'

const IndexPage = (props: PageProps) => (
  <Layout pathName={props.location.pathname}>
    <Home />
  </Layout>
)

export default IndexPage
