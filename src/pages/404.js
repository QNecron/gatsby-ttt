import React from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"

import Hero from "../components/hero/hero"

import ImgDesktop from "../images/hero/hero-06.webp"
import ImgMobile from "../images/hero/hero-06-mobile.webp"

const NotFoundPage = () => {

  return(

    <Page>

      <Seo title="404: Not found" />

      <Hero
        title="404 Not Found"
        copy="Looks like you've failed your survival check and ended up lost."
        cta="Take Me Home"
        link="/"
        desktop={ImgDesktop}
        mobile={ImgMobile}
        height={"1080"}
        width={"1920"}
        size="full"
      />

    </Page>

  )

}

export default NotFoundPage
