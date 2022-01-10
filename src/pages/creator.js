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

// import Armor from "../components/builder/armor"
import Attacks from "../components/builder/attacks"
import Attributes from "../components/builder/attributes"
import Backgrounds from "../components/builder/backgrounds"
import Classes from "../components/builder/classes"
import HitPoints from "../components/builder/hitpoints"
import Initiative from "../components/builder/initiative"
import Saves from "../components/builder/saves"
// import Skills from "../components/builder/skills"
// import Speed from "../components/builder/speed"
// import Storage from "../components/builder/storage"

import ImgDesktop from "../images/hero/hero-05.jpg"
import ImgMobile from "../images/hero/hero-05-mobile.jpg"

const Creator = ({ menu, menuUpdate }) => {

  const [flyout, flyoutUpdate] = useState("false")
  const [dm, dmUpdate] = useState("disabled")

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
    class_2: "",
    level_2: 0,
    bab_2: 0,
    saves_class_2: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    class_3: "",
    level_3: 0,
    bab_3: 0,
    saves_class_3: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    saves_item: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    init: 0
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

            </div>

            <div className="right">

              <div>DM: {dm}</div>
              <div>Name: {character.name}</div>
              <div>Race: {character.race} | Choice: {character.racial_bonus}</div>

              <hr />
              <div>STR: {character.attributes.str} + {character.racial_attributes.str} + {character.item_attributes.str}</div>
              <div>DEX: {character.attributes.dex} + {character.racial_attributes.dex} + {character.item_attributes.dex}</div>
              <div>CON: {character.attributes.con} + {character.racial_attributes.con} + {character.item_attributes.con}</div>
              <div>INT: {character.attributes.int} + {character.racial_attributes.int} + {character.item_attributes.int}</div>
              <div>WIS: {character.attributes.wis} + {character.racial_attributes.wis} + {character.item_attributes.wis}</div>
              <div>CHA: {character.attributes.cha} + {character.racial_attributes.cha} + {character.item_attributes.cha}</div>

              <hr />
              <div>Size: {character.size}</div>

              <hr />
              <div>Class 1: {character.class_1}</div>
              <div>Level 1: {character.level_1}</div>
              <div>F: {character.saves_class_1.fortitude} | R: {character.saves_class_1.reflex} | W: {character.saves_class_1.will}</div>

              <hr />
              <div>Class 2: {character.class_2}</div>
              <div>Level 2: {character.level_2}</div>
              <div>F: {character.saves_class_2.fortitude} | R: {character.saves_class_2.reflex} | W: {character.saves_class_2.will}</div>

              <Input
                inputType="checkbox"
                inputId="dm"
                inputValue={dm}
                inputChange={(e) => dmUpdate(dm === "disabled" ? "enabled" : "disabled")}
                inputLabel="DM Mode"
              />

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
