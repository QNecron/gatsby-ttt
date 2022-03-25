import React from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"

import Copyright from "../components/copyright/copyright"
import Hero from "../components/hero/hero"
import Card from "../components/card/card"

import ImgDesktop from "../images/hero/hero-02.webp"
import ImgMobile from "../images/hero/hero-02-mobile.webp"

import MCBestiary from "../images/cards/mc_bestiary.webp"
import MCCreator from "../images/cards/mc_creator.webp"
import MCFeats from "../images/cards/mc_feats.webp"
import MCSpells from "../images/cards/mc_spells.webp"
import MCInitiative from "../images/hero/hero-06-mobile.webp"

const IndexPage = () => {

  return(

    <Page>

      <Seo title="Home" />

      <Hero
        title="Tabletop Tools"
        copy="Try the beta version of the Creator, supporting core races and classes. Save your characters and manage who stays and who goes."
        cta="Try Creator Now"
        link="/creator/"
        desktop={ImgDesktop}
        mobile={ImgMobile}
        height={"1133"}
        width={"1680"}
        size="large"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <Grid desktop="4" tablet="4" mobile="2" gap="4">

            <Card
              title="Creator"
              copy="Create, level, manage and delete your characters and monsters."
              cta="Creator"
              link="/creator/"
              desktop={MCCreator}
              mobile={MCCreator}
              type="showcase"
            />

            <Card
              title="Spells"
              copy="Filter through hundreds of spells by book, class, level, type and subtype."
              cta="Spells"
              link="/spells/"
              desktop={MCSpells}
              mobile={MCSpells}
              type="showcase"
            />

            <Card
              title="Feats"
              cta="Feats"
              copy="Filter though hundreds of feats for your character by book and type."
              link="/feats/"
              desktop={MCFeats}
              mobile={MCFeats}
              type="showcase"
            />

            <Card
              title="Bestiary"
              cta="Bestiary"
              copy="Includes 1st, 2nd, 3rd and 4th bestiaries to filter through. BETA version."
              link="/bestiary/"
              desktop={MCBestiary}
              mobile={MCBestiary}
              type="showcase"
            />

          </Grid>

        </Wrapper>

      </Section>

      <Section type="both secondary">

        <Wrapper wrapper="content">

          <h2 className="heading-2">Welcome</h2>

          <p className="gutter-top-16">
            All the tools here are free to use, full functonality, without a pay wall.
            Features will continue to be added and expanded upon with more data that's
            available to me. This includes more classes, spells, feats, monsters and
            supporting books.
          </p>

        </Wrapper>

      </Section>

      <Section type="both">

        <Wrapper wrapper="structure">

          <Grid desktop="2" tablet="2" mobile="1" gap="4">

            <Card
              title="Initiative"
              copy="Add your players, monsters, and/or NPCs to the tracker, after that it will automatically arrange them in the proper order - highest to lowest."
              cta="Initiative"
              link="/initiative/"
              desktop={MCInitiative}
              mobile={MCInitiative}
              height="479"
              width="767"
              type="showcase"
            />

          </Grid>

        </Wrapper>

      </Section>

      <Copyright />

    </Page>

  )

}

export default IndexPage
