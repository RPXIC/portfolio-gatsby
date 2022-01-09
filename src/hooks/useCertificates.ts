import { getCertificates } from '../services/getCertificates'

export const useCertificates = () => {
  const data = getCertificates()
  return data.allDatoCmsCertificate.edges[0].node.certificates.map(certificate => certificate)
}

export default useCertificates
