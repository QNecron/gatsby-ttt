import React, { useState } from "react"
// import { Link } from "gatsby"

import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Input from "../components/forms/input"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"

import ImgDesktop from "../images/hero/hero-04.jpg"
import ImgMobile from "../images/hero/hero-04.jpg"

const Initiative = () => {

  const [init, initUpdate] = useState("false")
  const [initName, initNameUpdate] = useState("")
  const [initRoll, initRollUpdate] = useState("")
  const [roll, rollUpdate] = useState([])

  function calculate(name, result) {

    const obj = {
      "name": name,
      "roll": result
    }

    const array = roll.slice();

    array.push(obj);
    rollUpdate(array);

  }

  function reset() {
    rollUpdate([])
  }

  return(

    <Page>

      <Seo title="Initiative Tracker" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Initiative"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <p>At the start of a battle, each combatant makes an initiative check.
          An initiative check is a Dexterity check. Each character applies his
          or her Dexterity modifier to the roll, as well as other modifiers from
          feats, spells, and other effects. Characters act in order, counting
          down from the highest result to the lowest. In every round that
          follows, the characters act in the same order (unless a character
          takes an action that results in his or her initiative changing; see
          Special Initiative Actions).</p>

          <p>If two or more combatants have the same initiative check result,
          the combatants who are tied act in order of total initiative modifier
          (highest first). If there is still a tie, the tied characters should
          roll to determine which one of them goes before the other.</p>

        </Wrapper>

      </Section>

      <Section type="bot">

        <Wrapper wrapper="structure">

          <nav className="nav-utility" role="navigation">

            <button
              className="nav-utility-link"
              onClick={(e) => initUpdate("true")}
            >
              <span className="material-icons" aria-hidden="true">sort</span> Order
            </button>

          </nav>

          <div className="initiative">

            <Input
              inputType="number"
              inputId="initRoll"
              inputValue={initRoll}
              inputChange={(e) => initRollUpdate(e.target.value)}
              inputLabel="Roll"
            />

            <Input
              inputType="text"
              inputId="initName"
              inputValue={initName}
              inputChange={(e) => initNameUpdate(e.target.value)}
              inputLabel="PC / NPC"
            />

            <div className="init-calc">

              <button
                className="btn-icon btn-secondary init-add"
                onClick={(e) => calculate(initName, initRoll)}
              >
                <span className="material-icons" aria-hidden="true">done</span>
                <span data-srt="true">Combat Initiative</span>
              </button>

              <button
                className="btn-icon btn-secondary init-remove"
                onClick={(e) => reset()}
              >
                <span className="material-icons" aria-hidden="true">autorenew</span>
                <span data-srt="true">Reset Initiative</span>
              </button>

            </div>

          </div>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="initOrder"
        flyoutType={"right"}
        flyoutOpen={init}
        flyout={init}
        flyoutUpdate={initUpdate}
      >

        {[].concat(roll)
          .sort((a, b) => b.roll - a.roll)
          .map((d, index) =>
            <figure className="init-block" key={index}>

              <figcaption className="init-info">

                <div className="init-roll">{d.roll}</div>

                <div className="init-name">{d.name}</div>

              </figcaption>

            </figure>
        )}

      </Flyout>

    </Page>

  )

}

export default Initiative
