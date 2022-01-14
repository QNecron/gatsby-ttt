import React, { useState } from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
// import Input from "../components/forms/input"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"

import ImgDesktop from "../images/hero/hero-06.jpg"
import ImgMobile from "../images/hero/hero-06-mobile.jpg"

const Combat = () => {

  const [magic, magicUpdate] = useState("false")
  const [melee, meleeUpdate] = useState("false")

  return(

    <Page>

      <Seo title="Combat Tracker" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Combat"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          Combat tool here.

        </Wrapper>

      </Section>

      <Section type="both secondary">

        <Wrapper wrapper="structure">

          <Grid desktop="2" tablet="2" mobile="1">

            <div className="combat-magical">

              <h2 className="heading-2">Magical</h2>

              <p className="gutter-top-16">Fill out your appropriate attribute score
              below, the spell level of the spell you want to know about, then check
              which (if any) feats you have that would impact the spell DC. Upon
              calculation you'll receive the following information: your attribute
              modifier, the spell level, the spell DC, and a list of bonus
              spell slots/castings your character would have.</p>

            </div>

            <div className="combat-melee">

              <h2 className="heading-2">Melee</h2>

              <p className="gutter-top-16">Fill out your appropriate attribute score
              below, BAB, weapon bonus and any magical bonuses that would impact
              your attack roll. Upon calculation you'll recieve the follwing information:
              your attribute modifer, how many attacks and what the bonus is and your
              total should you attempt anything with a CMB check.</p>

            </div>

          </Grid>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="combatmagic"
        flyoutType={"right"}
        flyoutOpen={magic}
        flyout={magic}
        flyoutUpdate={magicUpdate}
      >

        Magic

      </Flyout>

      <Flyout
        flyoutId="combatmelee"
        flyoutType={"right"}
        flyoutOpen={melee}
        flyout={melee}
        flyoutUpdate={meleeUpdate}
      >

        Melee

      </Flyout>

    </Page>

  )

}

export default Combat
