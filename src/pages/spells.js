import React, { useState } from "react"

import SEO from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Hero from "../components/hero/hero"
import Tabs from "../components/tabs/tabs"

import Alphabet from "../../json/alphabet.json"
import Books from "../../json/spell_books.json"
import Data from "../../json/spells_v2.json"
// import Casters from "../../json/spell_casters.json"
import Schools from "../../json/spell_schools.json"
import SubSchools from "../../json/spell_subschools.json"

import ImgDesktop from "../images/hero/hero-02.jpg"
import ImgMobile from "../images/hero/hero-02-mobile.jpg"

const Spells = () => {

  const [book, setBook] = useState("Core")
  const [letter, setLetter] = useState("A")
  // const [caster, setCaster] = useState("all")
  const [school, setSchool] = useState("all")
  const [subschool, setSubSchool] = useState("all")
  // console.log(Data);

  return(

    <Page>

      <SEO title="Spells" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Spells"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <Tabs
            data={Books}
            state={book}
            click={setBook}
          />

          <Tabs
            data={Schools}
            state={school}
            click={setSchool}
          />

          <Tabs
            data={SubSchools}
            state={subschool}
            click={setSubSchool}
          />

          <Tabs
            data={Alphabet}
            state={letter}
            click={setLetter}
          />

          {Data.map((d, index) => {

            if (d.source === book && d.name.charAt(0) === letter) {

              // if all is chosen then show all of that letter, else show school of that letter
              if (d.school !== school && school !== "all") return null

              if (d.subschool !== subschool && subschool !== "all") return null

              return(
                <article class="spell-container" key={index}>
                  <div className="spell-info spell-name">{d.name}</div>
                  <div className="spell-info spell-school">School: {d.school} {d.subschool ? '(' + d.subschool + ')' : ''} {d.descriptor ? '[' + d.descriptor + ']' : ''}</div>
                  <div className="spell-info spell-level">
                    Level: {d.wiz !== 'NULL' ? 'sorcerer/wizard ' + d.wiz + ', ' : ''}
                    {d.cleric !== 'NULL' ? 'cleric ' + d.cleric + ', ' : ''}
                    {d.druid !== 'NULL' ? 'druid ' + d.druid + ', ' : ''}
                    {d.ranger !== 'NULL' ? 'ranger ' + d.ranger + ', ' : ''}
                    {d.bard !== 'NULL' ? 'bard ' + d.bard + ', ' : ''}
                    {d.paladin !== 'NULL' ? 'paladin ' + d.paladin + ', ' : ''}
                    {d.alchemist !== 'NULL' ? 'alchemist ' + d.alchemist + ', ' : ''}
                    {d.summoner !== 'NULL' ? 'summoner ' + d.summoner + ', ' : ''}
                    {d.witch !== 'NULL' ? 'witch ' + d.witch + ', ' : ''}
                    {d.inquisitor !== 'NULL' ? 'inquisitor ' + d.inquisitor + ', ' : ''}
                    {d.oracle !== 'NULL' ? 'oracle ' + d.oracle + ', ' : ''}
                    {d.antipaladin !== 'NULL' ? 'antipaladin ' + d.antipaladin + ', ' : ''}
                    {d.magus !== 'NULL' ? 'magus ' + d.magus + ' ' : ''}
                  </div>
                  <div className="spell-info spell-casting">Casting Time: {d.casting_time}</div>
                  <div className="spell-info spell-component">Components: {d.components} {d.costly_components !== 0 ? d.costly_components : ''}</div>
                  <div className="spell-info spell-range">Range: {d.range}</div>
                  <div className="spell-info spell-duration">Duration: {d.duration}</div>
                  <div className="spell-info spell-saving">Saving Throw: {d.saving_throw ? d.saving_throw : '-'}</div>
                  <div className="spell-info spell-resist">Spell Resistance: {d.spell_resistance ? d.spell_resistance : '-'}</div>
                  <div className="spell-info spell-descript">{d.short_description}</div>
                </article>
              )

            }
            else { return null }

          })}

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Spells
