import React from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

import { modifier } from "./functions"

const Classes = ({ ...props }) => {

  const modInt = modifier(
    props.character.attributes.int,
    props.character.racial_attributes.int,
    props.character.item_attributes.int
  )

  const stats = (c, l) => {
    let bab = 0
    let fort = 0
    let refl = 0
    let will = 0
    let skill = 0

    switch (c) {

      case "Barbarian":
      case "Fighter":
      case "Paladin":
      case "Ranger":
      case "Construct":
      case "Dragon":
      case "MagicalBeast":
      case "MonstrousHumanoid":
      case "Outsider":
        bab = Math.floor(l * 1)
      break;

      case "Bard":
      case "Cleric":
      case "Druid":
      case "Monk":
      case "Rogue":
      case "Aberration":
      case "Animal":
      case "Humanoid":
      case "Ooze":
      case "Plant":
      case "Undead":
      case "Vermin":
        bab = Math.floor(l * .75)
      break;

      default:
        bab = Math.floor(l * .5)
      break;

    }

    switch (c) {

      case "Barbarian":
      case "Fighter":
        // FSS
        fort = Math.floor(2 + l * .5)
        refl = Math.floor(0 + l * .3333)
        will = Math.floor(0 + l * .3333)
      break;

      case "Bard":
        // SFF
        fort = Math.floor(0 + l * .3333)
        refl = Math.floor(2 + l * .5)
        will = Math.floor(2 + l * .5)
      break;

      case "Cleric":
      case "Druid":
      case "Paladin":
        // FSF
        fort = Math.floor(2 + l * .5)
        refl = Math.floor(0 + l * .3333)
        will = Math.floor(2 + l * .5)
      break;

      case "Monk":
        // FFF
        fort = Math.floor(2 + l * .5)
        refl = Math.floor(2 + l * .5)
        will = Math.floor(2 + l * .5)
      break;

      case "Ranger":
        // FFS
        fort = Math.floor(2 + l * .5)
        refl = Math.floor(2 + l * .5)
        will = Math.floor(0 + l * .3333)
      break;

      case "Rogue":
        // SFS
        fort = Math.floor(0 + l * .3333)
        refl = Math.floor(2 + l * .5)
        will = Math.floor(0 + l * .3333)
      break;

      case "Sorcerer":
      case "Wizard":
        // SSF
        fort = Math.floor(0 + l * .3333)
        refl = Math.floor(0 + l * .3333)
        will = Math.floor(2 + l * .5)
      break;

      default:
        // none
      break;

    }

    switch (c) {

      case "Rogue":
        skill = Math.floor((8 + modInt) * l)
      break;

      case "Bard":
      case "Ranger":
        skill = Math.floor((6 + modInt) * l)
      break;

      case "Barbarian":
      case "Druid":
      case "Monk":
        skill = Math.floor((4 + modInt) * l)
      break;

      case "Cleric":
      case "Fighter":
      case "Paladin":
      case "Sorcerer":
      case "Wizard":
        skill = Math.floor((2 + modInt) * l)
      break;

      default:
        // none
      break;

    }

    if (c === "0") {
      bab = 0
    }

    if (l === "0") {
      fort = 0
      refl = 0
      will = 0
      skill = 0
    }

    if (c === props.character.class_1) {

      props.characterUpdate({
        ...props.character,
        level_1: l,
        bab_1: bab,
        saves_class_1: {
          ...props.character.saves_class_1,
          fortitude: fort,
          reflex: refl,
          will: will
        },
        skill_points_1: skill
      })

    }
    else if (c === props.character.class_2) {

      props.characterUpdate({
        ...props.character,
        level_2: l,
        bab_2: bab,
        saves_class_2: {
          ...props.character.saves_class_2,
          fortitude: fort,
          reflex: refl,
          will: will
        },
        skill_points_2: skill
      })

    }
    else {
      console.log("No class property defined.")
    }

  }

  return(

    <>

    <div className="block-container">

      <Select
        inputId="class1"
        inputValue={props.character.class_1}
        inputChange={(e) => props.characterUpdate({...props.character, class_1: e.target.value})}
        inputLabel="Class"
      >
        <option value="None">-</option>
        <optgroup label="Core Classes">
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Wizard">Wizard</option>
        </optgroup>
        {props.dm === "enabled" &&
        <optgroup label="Racial Types">
          <option value="Aberration">Aberration</option>
          <option value="Animal">Animal</option>
          <option value="Construct">Construct</option>
          <option value="Dragon">Dragon</option>
          <option value="Fey">Fey</option>
          <option value="Humanoid">Humanoid</option>
          <option value="MagicalBeast">Magical Beast</option>
          <option value="MonstrousHumanoid">Monstrous Humanoid</option>
          <option value="Ooze">Ooze</option>
          <option value="Outsider">Outsider</option>
          <option value="Plant">Plant</option>
          <option value="Undead">Undead</option>
          <option value="Vermin">Vermin</option>
        </optgroup>
        }
      </Select>

      <Input
        inputType="number"
        inputId="level1"
        inputValue={props.character.level_1}
        inputChange={(e) => stats(props.character.class_1, e.target.value)}
        inputLabel="Level"
      />

    </div>

    <div className="block-container">

      <Select
        inputId="class2"
        inputValue={props.character.class_2}
        inputChange={(e) => props.characterUpdate({...props.character, class_2: e.target.value})}
        inputLabel="Class"
      >
        <option value="None">-</option>
        <optgroup label="Core Classes">
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Wizard">Wizard</option>
        </optgroup>
        {props.dm === "enabled" &&
        <optgroup label="Racial Types">
          <option value="Aberration">Aberration</option>
          <option value="Animal">Animal</option>
          <option value="Construct">Construct</option>
          <option value="Dragon">Dragon</option>
          <option value="Fey">Fey</option>
          <option value="Humanoid">Humanoid</option>
          <option value="MagicalBeast">Magical Beast</option>
          <option value="MonstrousHumanoid">Monstrous Humanoid</option>
          <option value="Ooze">Ooze</option>
          <option value="Outsider">Outsider</option>
          <option value="Plant">Plant</option>
          <option value="Undead">Undead</option>
          <option value="Vermin">Vermin</option>
        </optgroup>
        }
      </Select>

      <Input
        inputType="number"
        inputId="level2"
        inputValue={props.character.level_2}
        inputChange={(e) => stats(props.character.class_2, e.target.value)}
        inputLabel="Level"
      />

    </div>

    </>

  )

}

export default Classes
