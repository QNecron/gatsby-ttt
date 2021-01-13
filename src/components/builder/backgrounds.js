import React, { useState } from "react"

import Select from "../../components/forms/select"

const Backgrounds = ({ ...props }) => {

  const [sizeForce, sizeForceUpdate] = useState(false)

  function backgroundBonus(value, race) {

    if (value === race) return;

    if (value !== "Human" || value !== "Half-elf" || value !== "Half-orc") {
      props.bgBonusUpdate("none")
    }

    props.bgUpdate(value)
    props.strRaceUpdate(0)
    props.dexRaceUpdate(0)
    props.conRaceUpdate(0)
    props.intRaceUpdate(0)
    props.wisRaceUpdate(0)
    props.chaRaceUpdate(0)

    // attributes
    switch (value) {

      case "Dwarf":
        props.conRaceUpdate(2)
        props.wisRaceUpdate(2)
        props.chaRaceUpdate("-2")
      break;

      case "Elf":
        props.dexRaceUpdate(2)
        props.intRaceUpdate(2)
        props.conRaceUpdate("-2")
      break;

      case "Gnome":
        props.conRaceUpdate(2)
        props.chaRaceUpdate(2)
        props.strRaceUpdate("-2")
      break;

      case "Halfling":
        props.dexRaceUpdate(2)
        props.chaRaceUpdate(2)
        props.conRaceUpdate("-2")
      break;

      default:
        // none
      break;

    }

    // size
    switch (value) {

      case "Halfling":
      case "Gnome":
        props.bgSizeUpdate("Small")
        sizeForceUpdate(true)
      break;

      default:
        props.bgSizeUpdate("Medium")
        sizeForceUpdate(false)
      break;

    }

  }

  function backgroundSelection(value, bonus) {

    if (bonus === value) return;

    props.bgBonusUpdate(value)
    props.strRaceUpdate(0)
    props.dexRaceUpdate(0)
    props.conRaceUpdate(0)
    props.intRaceUpdate(0)
    props.wisRaceUpdate(0)
    props.chaRaceUpdate(0)

    if (value === "str") props.strRaceUpdate(2)
    if (value === "dex") props.dexRaceUpdate(2)
    if (value === "con") props.conRaceUpdate(2)
    if (value === "int") props.intRaceUpdate(2)
    if (value === "wis") props.wisRaceUpdate(2)
    if (value === "cha") props.chaRaceUpdate(2)

  }

  function backgroundSize(value) {

    props.bgSizeUpdate(value)

  }

  return(

    <>

    <div className="block-container background">

      <Select
        inputId="bg"
        inputValue={props.bg}
        inputChange={(e) => backgroundBonus(e.target.value, props.bg)}
        inputLabel="Background"
      >
        <option value="None">-</option>
        <optgroup label="Core Races">
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Half-elf">Half-elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-orc">Half-orc</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
        </optgroup>
      </Select>

      <Select
        inputId="bgBonus"
        inputValue={props.bgBonus}
        inputDisabled={props.bg === "Human" || props.bg === "Half-elf" || props.bg === "Half-orc" ? false : true}
        inputChange={(e) => backgroundSelection(e.target.value, props.bgBonus)}
        inputLabel="Racial Bonus"
      >
        <option value="none">-</option>
        <option value="str">+2 STR</option>
        <option value="dex">+2 DEX</option>
        <option value="con">+2 CON</option>
        <option value="int">+2 INT</option>
        <option value="wis">+2 WIS</option>
        <option value="chr">+2 CHA</option>
      </Select>

      <Select
        inputId="bgSize"
        inputValue={props.bgSize}
        inputDisabled={sizeForce}
        inputChange={(e) => backgroundSize(e.target.value)}
        inputLabel="Size"
      >
        <option value="Diminutive">Diminutive</option>
        <option value="Tiny">Tiny</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="Huge">Huge</option>
        <option value="Gargantuan">Gargantuan</option>
        <option value="Colossal">Colossal</option>
      </Select>

    </div>

    </>

  )

}

export default Backgrounds


// @TODO
// <optgroup label="Racial Types">
//   <option value="Aberration">Aberration</option>
//   <option value="Animal">Animal</option>
//   <option value="Construct">Construct</option>
//   <option value="Dragon">Dragon</option>
//   <option value="Fey">Fey</option>
//   <option value="Humanoid">Humanoid</option>
//   <option value="MagicalBeast">Magical Beast</option>
//   <option value="MonstrousHumanoid">Monstrous Humanoid</option>
//   <option value="Ooze">Ooze</option>
//   <option value="Outsider">Outsider</option>
//   <option value="Plant">Plant</option>
//   <option value="Undead">Undead</option>
//   <option value="Vermin">Vermin</option>
// </optgroup>
