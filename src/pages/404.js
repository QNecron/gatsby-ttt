import React from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"

const NotFoundPage = () => {

  return(

    <Page>

      <Seo title="404: Not found" />

      <h1>NOT FOUND</h1>

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    </Page>

  )

}

export default NotFoundPage
