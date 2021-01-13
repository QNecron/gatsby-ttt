import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
// import Grid from "../components/grid/grid"

import Copyright from "../components/copyright/copyright"
import Hero from "../components/hero/hero"

import ImgDesktop from "../images/hero/hero-02.jpg"
import ImgMobile from "../images/hero/hero-02.jpg"

const IndexPage = () => {

  return(

    <Page>

      <SEO title="Home" />

      <Hero
        title="Tabletop Tools"
        copy="Try the beta version Character Builder, supporting core races and classes. Save your characters and manage who stays and who goes, all local to your device."
        cta="Character Builder"
        link="/character/"
        desktop={ImgDesktop}
        mobile={ImgMobile}
        size="large"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <h2 className="heading-2">More to come..</h2>

          <p className="gutter-top-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
          </p>

        </Wrapper>

      </Section>

      <Copyright />

    </Page>

  )

}

export default IndexPage
