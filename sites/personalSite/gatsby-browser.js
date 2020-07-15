const React = require('react')
const { Helmet } = require('react-helmet')
const { Layout } = require('./src/components/Layout')

exports.wrapRootElement = ({ element }) => {
  return (
    <>
    <Helmet>
      <html className="has-navbar-fixed-top" />
    </Helmet>
    <Layout>
      {element}
    </Layout>
    </>
  )
}