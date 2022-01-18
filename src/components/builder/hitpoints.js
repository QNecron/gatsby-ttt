import React from "react"

import { modifier, total } from "./functions"

const HitPoints = ({ ...props }) => {

  function hitdie(c) {

    let hd = ""

    switch (c) {

      case "Barbarian":
      case "Dragon":
        hd = "d12"
      break;

      case "Fighter":
      case "Paladin":
      case "Ranger":
      case "Cavalier":
      case "Construct":
      case "MagicalBeast":
      case "MonstrousHumanoid":
      case "Outsider":
        hd = "d10"
      break;

      case "Bard":
      case "Cleric":
      case "Druid":
      case "Monk":
      case "Rogue":
      case "Alchemist":
      case "Inquisitor":
      case "Oracle":
      case "Summoner":
      case "Aberration":
      case "Animal":
      case "Humanoid":
      case "Ooze":
      case "Plant":
      case "Undead":
      case "Vermin":
        hd = "d8"
      break;

      case "Sorcerer":
      case "Wizard":
      case "Witch":
      case "Fey":
        hd = "d6"
      break;

      default:
        // none
      break;

    }

    return hd

  }

  let tot = total(
    props.character.level_1,
    props.character.level_2,
    props.character.level_3
  )

  let mod = modifier(
    props.character.attributes.con,
    props.character.racial_attributes.con,
    props.character.item_attributes.con
  )

  return(

    <div className="block-container hit-points">
      <h2 className="block-defined heading-5">HP</h2>
      <div className="block">
        {props.character.level_1 >= 1 ? props.character.level_1 + hitdie(props.character.class_1) + " + " : ""}
        {props.character.level_2 >= 1 ? props.character.level_2 + hitdie(props.character.class_2) + " + " : ""}
        {props.character.level_3 >= 1 ? props.character.level_3 + hitdie(props.character.class_3) + " + " : ""}
        {tot * mod}
      </div>
    </div>

  )

}

export default HitPoints
