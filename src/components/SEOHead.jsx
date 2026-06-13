import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}
