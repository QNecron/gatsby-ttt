import React from "react"

import { total } from "./functions"

const HitPoints = ({ ...props }) => {

  function hitdie(class1) {

    let hd = ""

    switch (class1) {

      case "Barbarian":
      case "Dragon":
        hd = "d12"
      break;

      case "Fighter":
      case "Paladin":
      case "Ranger":
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
      case "Fey":
        hd = "d6"
      break;

      default:
        // none
      break;

    }

    return hd

  }

  return(

    <div className="block-container hit-points">
      <h2 className="block-defined heading-5">Hit Points</h2>
      <div className="block">
        {props.class1Level >= 1 ? props.class1Level + hitdie(props.class1) + " + " : ""}
        {props.class2Level >= 1 ? props.class2Level + hitdie(props.class2) + " + " : ""}
        {props.class3Level >= 1 ? props.class3Level + hitdie(props.class3) + " + " : ""}
        {total(props.class1Level, props.class2Level, props.class3Level) * props.con}
      </div>
    </div>

  )

}

export default HitPoints
