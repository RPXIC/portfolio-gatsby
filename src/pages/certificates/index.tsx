import { Certificate, Layout } from '../../components'
import useCertificates from '../../hooks/useCertificates'
import { ICertificate } from '../../interfaces/certificate'
import * as styles from './styles.module.css'

const Certificates = ({ location }) => {
  const certificates = useCertificates()

  return (
    <Layout pathName={location.pathname}>
      <div className={styles.container}>
        {certificates.map((certificate: ICertificate, i: number) => (
          <Certificate key={i} certificate={certificate} />
        ))}
      </div>
    </Layout>
  )
}

export default Certificates
