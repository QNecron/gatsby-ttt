import React, { useState } from "react"

import Seo from "../components/seo"
import Select from "../components/forms/select"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"
import Tabs from "../components/tabs/tabs"

import Alphabet from "../../json/alphabet.json"
import Books from "../../json/spell_books.json"
import Data from "../../json/spells_v2.json"
import Casters from "../../json/spell_casters.json"
import Schools from "../../json/spell_schools.json"
import SubSchools from "../../json/spell_subschools.json"

import ImgDesktop from "../images/hero/hero-02.jpg"
import ImgMobile from "../images/hero/hero-02-mobile.jpg"

const Spells = () => {

  const [filter, filterUpdate] = useState("false")
  const [book, setBook] = useState("Core")
  const [letter, setLetter] = useState("*")
  const [caster, setCaster] = useState("all")
  const [casterLvl, setCasterLvl] = useState("0")
  const [school, setSchool] = useState("all")
  const [subschool, setSubSchool] = useState("all")
  const [detail, detailUpdate] = useState("false")
  const [descriptName, descriptNameUpdate] = useState("")
  const [descriptFull, descriptFullUpdate] = useState("")

  const casterLvls = ["*","0","1","2","3","4","5","6","7","8","9"]

  function description(book, compare) {

    let name = "Error"
    let descript = "Spell not found."

    detailUpdate("true")

    Data.forEach((d, index) => {

      if (d.source === book && d.name === compare) {
        name = d.name
        descript = d.description_formatted
      }

    })

    descriptNameUpdate(name)
    descriptFullUpdate(descript)

  }

  function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  function spellCasters(data, level) {
    let casts = false

    if (parseInt(data.wiz) === level) casts = true
    if (parseInt(data.cleric) === level) casts = true
    if (parseInt(data.druid) === level) casts = true
    if (parseInt(data.ranger) === level) casts = true
    if (parseInt(data.bard) === level) casts = true
    if (parseInt(data.paladin) === level) casts = true
    if (parseInt(data.alchemist) === level) casts = true
    if (parseInt(data.summoner) === level) casts = true
    if (parseInt(data.witch) === level) casts = true
    if (parseInt(data.inquisitor) === level) casts = true
    if (parseInt(data.oracle) === level) casts = true
    if (parseInt(data.antipaladin) === level) casts = true
    if (parseInt(data.magus) === level) casts = true

    return casts

  }

  return(

    <Page>

      <Seo title="Spells" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Spells"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <nav className="nav-utility" role="navigation">

            <button
              className="nav-utility-link"
              onClick={(e) => filterUpdate("true")}
            >
              <span className="material-icons" aria-hidden="true">sort</span> Filters
            </button>

          </nav>

          {Data.map((d, index) => {

            let subFilter = false

            if (d.name.charAt(0) === letter || spellCasters(d, parseInt(casterLvl)) === true) {
              subFilter = true
            }

            if (d.source === book && subFilter === true) {

              // if all is chosen then show all of that letter, else show school of that letter
              if (d.school !== school && school !== "all") return null

              if (d.subschool !== subschool && subschool !== "all") return null

              if (d.name.charAt(0) !== letter && letter !== "*") return null

              if (spellCasters(d, parseInt(casterLvl)) !== true && casterLvl !== "*") return null

              if (!d.spell_level.includes(caster) && caster !== "all") return null

              subFilter = false;

              return(
                <article className="spell-container" key={'spells-' + index}>
                  <h2 className="spell-info spell-name heading-4">{d.name}</h2>
                  <div className="spell-info spell-school"><strong>School:</strong> {d.school} {d.subschool ? '(' + d.subschool + ')' : ''} {d.descriptor ? '[' + d.descriptor + ']' : ''}</div>
                  <div className="spell-info spell-level">
                    <strong>Level:</strong> {d.wiz !== 'NULL' ? 'sorcerer/wizard ' + d.wiz + ', ' : ''}
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
                  <div className="spell-info spell-casting"><strong>Casting Time:</strong> {d.casting_time}</div>
                  <div className="spell-info spell-component"><strong>Components:</strong> {d.components} {d.costly_components !== 0 ? d.costly_components : ''}</div>
                  <div className="spell-info spell-range"><strong>Range:</strong> {d.range}</div>
                  <div className="spell-info spell-duration"><strong>Duration:</strong> {d.duration}</div>
                  <div className="spell-info spell-saving"><strong>Saving Throw:</strong> {d.saving_throw ? d.saving_throw : '-'}</div>
                  <div className="spell-info spell-resist"><strong>Spell Resistance:</strong> {d.spell_resistance ? d.spell_resistance : '-'}</div>
                  <div className="spell-info spell-descript">{d.short_description}</div>
                  <div className="spell-info spell-details">
                    <button
                      className="link-utility"
                      aria-haspopup="true"
                      aria-controls="filters"
                      onClick={(e) => description(d.source, d.name)}
                    >
                      <span className="material-icons" aria-hidden="true">menu_open</span>
                    </button>
                  </div>
                </article>
              )

            }
            else {

              if (letter === "*" && casterLvl === "*" && index === 1) {

                return(
                  <article className="spell-container spell-results" key={index}>
                    <h2 className="spell-info spell-name heading-4">Filter Required</h2>
                    <div className="spell-info spell-descript">
                      In order to guarantee a good experience you'll need to apply
                      either the caster level or alphabetical filter.
                    </div>
                  </article>
                )

              }
              else if (letter !== "*" && casterLvl !== "*" && index === 1) {

                return(
                  <article className="spell-container spell-results" key={index}>
                    <h2 className="spell-info spell-name heading-4">No Results Found</h2>
                    <div className="spell-info spell-descript">
                      The combination you've selected has returned zero results, try
                      removing the caster level or alphabetical filter.
                    </div>
                  </article>
                )

              }
              else {

                return(
                  <div key={index}>{/* null */}</div>
                )

              }

            }

          })}

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="filters"
        flyoutType={"right"}
        flyoutOpen={filter}
        flyout={filter}
        flyoutUpdate={filterUpdate}
      >

        <Select
          inputId="spell-books"
          inputValue={book}
          inputChange={(e) => setBook(e.target.value)}
          inputLabel="Books"
        >
          {Books.map((name, index) =>
            <option value={name} key={'books-' + index}>{name}</option>
          )}
        </Select>

        <Select
          inputId="spell-schools"
          inputValue={school}
          inputChange={(e) => setSchool(e.target.value)}
          inputLabel="Schools"
        >
          {Schools.map((name, index) =>
            <option value={name} key={name + '-' + index}>{capitalize(name)}</option>
          )}
        </Select>

        <Select
          inputId="spell-subschool"
          inputValue={subschool}
          inputChange={(e) => setSubSchool(e.target.value)}
          inputLabel="Sub-Schools"
        >
          {SubSchools.map((name, index) =>
            <option value={name} key={name + '-' + index}>{capitalize(name)}</option>
          )}
        </Select>

        <Select
          inputId="spell-caster"
          inputValue={caster}
          inputChange={(e) => setCaster(e.target.value)}
          inputLabel="Caster"
        >
          {Casters.map((name, index) =>
            <option value={name} key={name + '-' + index}>{capitalize(name)}</option>
          )}
        </Select>

        <Tabs
          data={casterLvls}
          tabs="caster-lvls"
          state={casterLvl}
          click={setCasterLvl}
        />

        <Tabs
          data={Alphabet}
          tabs="alphabet"
          state={letter}
          click={setLetter}
        />

      </Flyout>

      <Flyout
        flyoutId="details"
        flyoutType={"right"}
        flyoutOpen={detail}
        flyout={detail}
        flyoutUpdate={detailUpdate}
      >
        <h3 className="heading-4">{descriptName}</h3>
        <div className="inner-html gutter-top-8" dangerouslySetInnerHTML={ {__html: descriptFull} } />
      </Flyout>

    </Page>

  )

}

export default Spells
