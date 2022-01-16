import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ThemeContext from "../../context/theme"

import Header from "../header/header"
import Footer from "../footer/footer"

import "../../styles/style.scss"

const Page = ({...props }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <>

    <ThemeContext.Consumer>
      {theme => (
        <div site-theme={theme.color}>

          <Header
            flyout={props.flyout}
            flyoutUpdate={props.flyoutUpdate}
            title={data.site.siteMetadata.title}
          />

          <main role="main">
            {props.children}
          </main>

          <Footer title={data.site.siteMetadata.title} />

        </div>
      )}
    </ThemeContext.Consumer>

    </>

  )

}

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
