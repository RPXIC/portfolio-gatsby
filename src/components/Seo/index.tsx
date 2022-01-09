import { Helmet } from 'react-helmet'
import { useSeo } from '../../hooks/useSeo'
import pathParser from '../../utils/pathParser'

const Seo = ({ defaultTitle, description: defaultDescription, image: defaultImage, pathName }: any) => {
  const { description, image, siteUrl, title, titleTemplate } = useSeo()

  const seo = {
    title: `${title} · ${pathParser({ pathName, headerTemplate: false })}` || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathName}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang='en' />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      {seo.url && <meta property='og:url' content={seo.url} />}
    </Helmet>
  )
}

export default Seo
