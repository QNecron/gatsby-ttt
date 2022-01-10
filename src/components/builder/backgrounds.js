import React from "react"

import Select from "../../components/forms/select"

const Backgrounds = ({ ...props }) => {

  const race = (r) => {
    let str = 0
    let dex = 0
    let con = 0
    let int = 0
    let wis = 0
    let cha = 0
    let bonus = ""
    let size = "Medium"

    switch (r) {

      case "Human":
      case "Half-elf":
      case "Half-orc":
        size = "Medium"
      break;

      case "Dwarf":
        str = 0
        dex = 0
        con = 2
        int = 0
        wis = 2
        cha = -2
        size = "Medium"
      break;

      case "Elf":
        str = 0
        dex = 2
        con = -2
        int = 2
        wis = 0
        cha = 0
        size = "Medium"
      break;

      case "Gnome":
        str = -2
        dex = 0
        con = 2
        int = 0
        wis = 0
        cha = 2
        size = "Small"
      break;

      case "Halfling":
        str = -2
        dex = 2
        con = 0
        int = 0
        wis = 0
        cha = 2
        size = "Small"
      break;

      default:
        str = 0
        dex = 0
        con = 0
        int = 0
        wis = 0
        cha = 0
        size = "Medium"
      break;

    }

    props.characterUpdate({
      ...props.character,
      race: r,
      racial_bonus: bonus,
      racial_attributes: {
        ...props.character.racial_attributes,
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha
      },
      size: size
    })

  }

  const bonus = (a) => {
    let str = 0
    let dex = 0
    let con = 0
    let int = 0
    let wis = 0
    let cha = 0

    if (a === "STR") str = 2
    else if (a === "DEX") dex = 2
    else if (a === "CON") con = 2
    else if (a === "INT") int = 2
    else if (a === "WIS") wis = 2
    else if (a === "CHA") cha = 2
    else {
      str = 0
      dex = 0
      con = 0
      int = 0
      wis = 0
      cha = 0
    }

    props.characterUpdate({
      ...props.character,
      racial_bonus: a,
      racial_attributes: {
        ...props.character.racial_attributes,
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha
      }
    })

  }

  return(

    <>

    <div className="block-container background">

      <Select
        inputId="race"
        inputValue={props.character.race}
        inputChange={(e) => race(e.target.value)}
        inputLabel="Race"
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

      <Select
        inputId="racialBonus"
        inputValue={props.character.racial_bonus}
        inputDisabled={
          props.character.race === "Human" ||
          props.character.race === "Half-elf" ||
          props.character.race === "Half-orc" ? false : true
        }
        inputChange={(e) => bonus(e.target.value)}
        inputLabel="Racial Bonus"
      >
        <option value="None">-</option>
        <option value="STR">+2 STR</option>
        <option value="DEX">+2 DEX</option>
        <option value="CON">+2 CON</option>
        <option value="INT">+2 INT</option>
        <option value="WIS">+2 WIS</option>
        <option value="CHA">+2 CHA</option>
      </Select>

      <Select
        inputId="size"
        inputValue={props.character.size}
        inputDisabled={props.dm === "enabled" ? false : true}
        inputChange={(e) => props.characterUpdate({...props.character, size: e.target.value})}
        inputLabel="Size"
      >

        {props.dm === "enabled" &&
          <>
          <option value="Diminutive">Diminutive</option>
          <option value="Tiny">Tiny</option>
          </>
        }
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        {props.dm === "enabled" &&
          <>
          <option value="Large">Large</option>
          <option value="Huge">Huge</option>
          <option value="Gargantuan">Gargantuan</option>
          <option value="Colossal">Colossal</option>
          </>
        }
      </Select>

    </div>

    </>

  )

}

export default Backgrounds
