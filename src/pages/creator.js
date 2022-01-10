import React, { useState } from "react"
//useEffect
import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Input from "../components/forms/input"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"
// import Panels from "../components/panels/panels"

import Armor from "../components/builder/armor"
import Attacks from "../components/builder/attacks"
import Attributes from "../components/builder/attributes"
import Backgrounds from "../components/builder/backgrounds"
import Classes from "../components/builder/classes"
import HitPoints from "../components/builder/hitpoints"
import Initiative from "../components/builder/initiative"
import Saves from "../components/builder/saves"
import SkillsGeneral from "../components/builder/skills-general"
import SkillsKnowledge from "../components/builder/skills-knowledge"

import Speed from "../components/builder/speed"
// import Storage from "../components/builder/storage"

import ImgDesktop from "../images/hero/hero-05.jpg"
import ImgMobile from "../images/hero/hero-05-mobile.jpg"

const Creator = ({ menu, menuUpdate }) => {

  const [flyout, flyoutUpdate] = useState("false")
  const [dm, dmUpdate] = useState("disabled")
  const [panel, panelUpdate] = useState(1)

  const [character, characterUpdate] = useState({
    name: "",
    race: "",
    racial_bonus: "",
    racial_attributes: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    },
    item_attributes: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    size: "Medium",
    class_1: "",
    level_1: 0,
    bab_1: 0,
    saves_class_1: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    skill_points_1: 0,
    class_2: "",
    level_2: 0,
    bab_2: 0,
    saves_class_2: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    skill_points_2: 0,
    class_3: "",
    level_3: 0,
    bab_3: 0,
    saves_class_3: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    skill_points_3: 0,
    skills: {
      acrobatics: 0,
      appraise: 0,
      bluff: 0,
      climb: 0,
      diplomacy: 0,
      disable_device: 0,
      disguise: 0,
      escape_artist: 0,
      fly: 0,
      handle_animal: 0,
      heal: 0,
      intimidate: 0,
      k_arcana: 0,
      k_dungeoneering: 0,
      k_engineering: 0,
      k_geography: 0,
      k_history: 0,
      k_local: 0,
      k_nature: 0,
      k_nobility: 0,
      k_planes: 0,
      k_religion: 0,
      linguistics: 0,
      perception: 0,
      ride: 0,
      sense_motive: 0,
      sleight_of_hand: 0,
      spellcraft: 0,
      stealth: 0,
      survival: 0,
      swim: 0,
      use_magic_device: 0,
    },
    saves_item: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    skills_item: {
      acrobatics: 0,
      appraise: 0,
      bluff: 0,
      climb: 0,
      diplomacy: 0,
      disable_device: 0,
      disguise: 0,
      escape_artist: 0,
      fly: 0,
      handle_animal: 0,
      heal: 0,
      intimidate: 0,
      k_arcana: 0,
      k_dungeoneering: 0,
      k_engineering: 0,
      k_geography: 0,
      k_history: 0,
      k_local: 0,
      k_nature: 0,
      k_nobility: 0,
      k_planes: 0,
      k_religion: 0,
      linguistics: 0,
      perception: 0,
      ride: 0,
      sense_motive: 0,
      sleight_of_hand: 0,
      spellcraft: 0,
      stealth: 0,
      survival: 0,
      swim: 0,
      use_magic_device: 0,
    },
    init: 0,
    ac: {
      armor_type: "Cloth",
      armor: 0,
      shield: 0,
      deflection: 0,
      natural: 0,
    },
    spell_resistance: 0,
    speed: {
      penalty: 0,
      movement: 30,
      swim: 0,
      fly: 0,
      climb: 0,
      burrow: 0
    }
  })

  return(

    <Page
      flyout={flyout}
      flyoutUpdate={flyoutUpdate}
    >

      <Seo title="Creator" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Creator"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <nav className="nav-utility" role="navigation">

            <button
              className="nav-utility-link nav-utility-dm"
              data-mode={dm}
              aria-live="polite"
              onClick={(e) => dmUpdate(dm === "disabled" ? "enabled" : "disabled")}
            >
              <span className="material-icons" aria-hidden="true">auto_fix_high</span> DM
              <span data-srt="true">tools {dm}.</span>
            </button>

            <button className="nav-utility-link" onClick={null}>
              <span className="material-icons" aria-hidden="true">cloud_upload</span> Save
            </button>

            <button
              className="nav-utility-link"
              aria-haspopup="true"
              aria-controls="character-storage"
              onClick={(e) => flyoutUpdate("true")}
            >
              <span className="material-icons" aria-hidden="true">settings</span> Manage
            </button>

          </nav>

          <Grid desktop="2" tablet="2" mobile="1">

            <div className="left">

              <div className="block-container name">

                <Input
                  inputType="text"
                  inputId="characterName"
                  inputValue={character.name}
                  inputChange={(e) => characterUpdate({...character, name: e.target.value})}
                  inputLabel="Character Name"
                />

              </div>

              <Backgrounds
                character={character}
                characterUpdate={characterUpdate}
                dm={dm}
              />

              <Attributes
                character={character}
                characterUpdate={characterUpdate}
              />

              <Classes
                character={character}
                characterUpdate={characterUpdate}
                dm={dm}
              />

              <HitPoints
                character={character}
                characterUpdate={characterUpdate}
              />

              <Saves
                character={character}
                characterUpdate={characterUpdate}
              />

              <Initiative
                character={character}
                characterUpdate={characterUpdate}
              />

              <Attacks
                character={character}
                characterUpdate={characterUpdate}
              />

              <Armor
                character={character}
                characterUpdate={characterUpdate}
                dm={dm}
              />

              <Speed
                character={character}
                characterUpdate={characterUpdate}
                dm={dm}
              />

            </div>

            <div className="right">

              {/* @README This needs to be made into a component! */}
              <div className="panels-container" role="tablist" aria-label="Skills">

                <div className="panel-nav" data-panel={panel}>

                  <button
                    id="nav-1"
                    className="panel-nav-tab"
                    role="tab"
                    aria-selected={panel === 1 ? true : false}
                    aria-controls="panel-1"
                    onClick={(e) => panelUpdate(1)}
                  >
                      General
                  </button>

                  <button
                    id="nav-2"
                    className="panel-nav-tab"
                    role="tab"
                    aria-selected={panel === 2 ? true : false}
                    aria-controls="panel-2"
                    onClick={(e) => panelUpdate(2)}
                  >
                      Knowledge
                  </button>

                  <button
                    id="nav-3"
                    className="panel-nav-tab"
                    role="tab"
                    aria-selected={panel === 3 ? true : false}
                    aria-controls="panel-3"
                    onClick={(e) => panelUpdate(3)}
                  >
                      Crafting
                  </button>

                  <button
                    id="nav-4"
                    className="panel-nav-tab"
                    role="tab"
                    aria-selected={panel === 4 ? true : false}
                    aria-controls="panel-4"
                    onClick={(e) => panelUpdate(4)}
                  >
                      Professions
                  </button>


                </div>

                <div id="panel-1" className="panel-content" data-panel="1" aria-labelledby="nav-1" role="tabpanel">

                  <SkillsGeneral
                    character={character}
                    characterUpdate={characterUpdate}
                  />

                </div>

                <div id="panel-2" className="panel-content" data-panel="2" aria-labelledby="nav-2" role="tabpanel">

                  <SkillsKnowledge
                    character={character}
                    characterUpdate={characterUpdate}
                  />

                </div>

                <div id="panel-3" className="panel-content" data-panel="3" aria-labelledby="nav-3" role="tabpanel">Hello Mars</div>

                <div id="panel-4" className="panel-content" data-panel="4" aria-labelledby="nav-4" role="tabpanel">Hello Venus</div>

              </div>



            </div>

          </Grid>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="character-storage"
        flyoutType={"right"}
        flyoutOpen={flyout}
        flyout={flyout}
        flyoutUpdate={flyoutUpdate}
      >

        Hello

      </Flyout>

    </Page>

  )

}

export default Creator
