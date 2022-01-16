import React from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Hero from "../components/hero/hero"

function positiveNegative(string) {

  string = string.toString()

  if (string.charAt(0) === "+") {
    // do nothing
  }
  else if (string.charAt(0) !== "-" || string.charAt(0) !== "+") {
    string = "+" + string
  }

  return string

}

function splitStats(string) {

  string = string.toString()

  const attrs = string.split(',')

  return (

    <>
      <strong>{attrs[0].toString().substring(0, 4)}</strong> {attrs[0].toString().substring(4, 7)}
      <strong>{attrs[1].toString().substring(0, 4)}</strong> {attrs[1].toString().substring(4, 7)}
      <strong>{attrs[2].toString().substring(0, 4)}</strong> {attrs[2].toString().substring(4, 7)}
      <strong>{attrs[3].toString().substring(0, 4)}</strong> {attrs[3].toString().substring(4, 7)}
      <strong>{attrs[4].toString().substring(0, 4)}</strong> {attrs[4].toString().substring(4, 7)}
      <strong>{attrs[5].toString().substring(0, 4)}</strong> {attrs[5].toString().substring(4, 7)}
    </>
  )

}

function splitAbilities(string) {

  string = string.toString()

  // const abilities = string.split(' - ')
  // console.log(abilities)

  return string

}

const TemplateBestiary = ({ pageContext }) => (

  <>

  <Page>

    <Seo title={pageContext.title + " | Bestiary"} />

    <Hero
      title={pageContext.title}
      size="small"
    />

    <Section type="both">

      <Wrapper wrapper="structure">

        <Grid desktop="2" tablet="2" mobile="1" gap="32">

          <div className="monster-stats-container">

            <em className="monster-visual">
              {pageContext.visual}
            </em>

            <div className="monster-plate">
              <h2 className="heading-4 monster-name">{pageContext.name}</h2>
              <div className="heading-4 monster-cr">CR {pageContext.cr}</div>
              <div className="heading-4 monster-xp">XP {pageContext.xp}</div>
            </div>

            <div className="monster-stat">
              {pageContext.alignment} {pageContext.size} {pageContext.type} {pageContext.subtype}
            </div>

            <div className="monster-stat">
              Init {pageContext.init}; <strong>Senses</strong> {pageContext.senses}
            </div>

            {pageContext.aura && (
              <div className="monster-stat">
                <strong>Aura</strong> {pageContext.aura}
              </div>
            )}

            <h3 className="heading-5 monster-subplate">Defense</h3>

            <div className="monster-stat">
              <strong>AC</strong> {pageContext.ac}; {pageContext.ac_mods}
            </div>

            <div className="monster-stat">
              <strong>HP</strong> {pageContext.hp} {pageContext.hd} {pageContext.hp_mods ? "["+pageContext.hp_mods+"]" : ''}
            </div>

            <div className="monster-stat">
              <strong>Fort</strong> {pageContext.fortitude}, <strong>Ref</strong> {pageContext.reflex}, <strong>Will</strong> {pageContext.will}; {pageContext.save_mods}
            </div>

            {(pageContext.defensive_abilities || pageContext.dr || pageContext.immune || pageContext.resist || pageContext.sr) && (
              <div className="monster-stat">
                {pageContext.defensive_abilities ? <> <strong>Defensive Abilities</strong> {pageContext.defensive_abilities};</> : null}
                {pageContext.dr ? <> <strong>DR</strong> {pageContext.dr};</> : null}
                {pageContext.immune ? <> <strong>Immune</strong> {pageContext.immune};</> : null}
                {pageContext.resist ? <> <strong>Resist</strong> {pageContext.resist};</> : null}
                {pageContext.sr ? <> <strong>SR</strong> {pageContext.sr}</> : null}
              </div>
            )}

            {pageContext.weaknesses && (
              <div className="monster-stat">
                <strong>Weaknesses</strong> {pageContext.weaknesses}
              </div>
            )}

            <h3 className="heading-5 monster-subplate">Offense</h3>

            <div className="monster-stat">
              <strong>Speed</strong> {pageContext.speed}
            </div>

            {pageContext.melee && (
              <div className="monster-stat">
                <strong>Melee</strong> {pageContext.melee}
              </div>
            )}

            {pageContext.ranged && (
              <div className="monster-stat">
                 <strong>Range</strong> {pageContext.ranged}
              </div>
            )}

            {(pageContext.space || pageContext.reach) && (
              <div className="monster-stat">
                {pageContext.space ? <> <strong>Space</strong> {pageContext.space};</> : null}
                {pageContext.reach ? <> <strong>Reach</strong> {pageContext.reach}</> : null}
              </div>
            )}

            {pageContext.special_attacks && (
              <div className="monster-stat">
                <strong>Special Attacks</strong> {pageContext.special_attacks}
              </div>
            )}

            {(pageContext.spell_like_abilities) && (
              <div className="monster-stat">
                {pageContext.spell_like_abilities}
              </div>
            )}

            {(pageContext.spells_known) && (
              <div className="monster-stat">
                {pageContext.spells_known}
              </div>
            )}

            {(pageContext.spells_prepared) && (
              <div className="monster-stat">
                {pageContext.spells_prepared}
              </div>
            )}

            <h3 className="heading-5 monster-subplate">Statistics</h3>

            <div className="monster-stat">
              {/*pageContext.ability_scores*/}
              {splitStats(pageContext.ability_scores)}
            </div>

            <div className="monster-stat">
              <strong>Base Atk</strong> {positiveNegative(pageContext.bab)}; <strong>CMB</strong> {positiveNegative(pageContext.cmb)}; <strong>CMD</strong> {positiveNegative(pageContext.cmd)}
            </div>

            {pageContext.feats && (
              <div className="monster-stat">
                <strong>Feats</strong> {pageContext.feats}
              </div>
            )}

            {pageContext.skills && (
              <div className="monster-stat">
                <strong>Skills</strong> {pageContext.skills}
              </div>
            )}

            {pageContext.languages && (
              <div className="monster-stat">
                <strong>Languages</strong> {pageContext.languages}
              </div>
            )}

            {pageContext.sq && (
              <div className="monster-stat">
                <strong>SQ</strong> {pageContext.sq}
              </div>
            )}

            <h3 className="heading-5 monster-subplate">Ecology</h3>

            {pageContext.environment && (
              <div className="monster-stat">
                <strong>Environment</strong> {pageContext.environment}
              </div>
            )}

            {pageContext.organization && (
              <div className="monster-stat">
                <strong>Organization</strong> {pageContext.organization}
              </div>
            )}

            {pageContext.treaure && (
              <div className="monster-stat">
                <strong>Treasure</strong> {pageContext.treaure}
              </div>
            )}

            {pageContext.special_abilities && (
              <>

              <h3 className="heading-5 monster-subplate">Special Abilities</h3>

              <div className="monster-stat">
                {/*pageContext.special_abilities*/}
                {splitAbilities(pageContext.special_abilities)}
              </div>

              </>
            )}

          </div>

          <div className="right">
            <p>{pageContext.description}</p>
          </div>

        </Grid>

      </Wrapper>

    </Section>

  </Page>

  </>

)

export default TemplateBestiary
