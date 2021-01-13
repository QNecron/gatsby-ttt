import React from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

const Classes = ({ ...props }) => {

  function calculate(value, classed, property) {
    let bab = 0
    let fort = 0
    let refl = 0
    let will = 0

    switch (classed) {

      case "Barbarian":
      case "Fighter":
      case "Paladin":
      case "Ranger":
      case "Construct":
      case "Dragon":
      case "MagicalBeast":
      case "MonstrousHumanoid":
      case "Outsider":
        bab = Math.floor(value * 1)
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
        bab = Math.floor(value * .75)
      break;

      default:
        bab = Math.floor(value * .5)
      break;

    }

    switch (classed) {

      case "Barbarian":
      case "Fighter":
      case "Plant":
      case "Vermin":
        // FSS
        fort = Math.floor(2 + value * .5)
        refl = Math.floor(0 + value * .3333)
        will = Math.floor(0 + value * .3333)
      break;

      case "Bard":
      case "Fey":
      case "MonstrousHumanoid":
      case "Outsider":
        // SFF
        fort = Math.floor(0 + value * .3333)
        refl = Math.floor(2 + value * .5)
        will = Math.floor(2 + value * .5)
      break;

      case "Cleric":
      case "Druid":
      case "Paladin":
        // FSF
        fort = Math.floor(2 + value * .5)
        refl = Math.floor(0 + value * .3333)
        will = Math.floor(2 + value * .5)
      break;

      case "Monk":
      case "Dragon":
        // FFF
        fort = Math.floor(2 + value * .5)
        refl = Math.floor(2 + value * .5)
        will = Math.floor(2 + value * .5)
      break;

      case "Ranger":
      case "Animal":
      case "MagicalBeast":
        // FFS
        fort = Math.floor(2 + value * .5)
        refl = Math.floor(2 + value * .5)
        will = Math.floor(0 + value * .3333)
      break;

      case "Rogue":
      case "Humanoid":
        // SFS
        fort = Math.floor(0 + value * .3333)
        refl = Math.floor(2 + value * .5)
        will = Math.floor(0 + value * .3333)
      break;

      case "Sorcerer":
      case "Wizard":
      case "Aberration":
      case "Undead":
        // SSF
        fort = Math.floor(0 + value * .3333)
        refl = Math.floor(0 + value * .3333)
        will = Math.floor(2 + value * .5)
      break;

      case "Construct":
      case "Ooze":
        // SSS
        fort = Math.floor(0 + value * .3333)
        refl = Math.floor(0 + value * .3333)
        will = Math.floor(2 + value * .3333)
      break;

      default:
        // none
      break;

    }

    if (property === 1) {
      props.class1LevelUpdate(value)
      props.bab1Update(bab)
      props.fortitude1Update(fort)
      props.reflex1Update(refl)
      props.will1Update(will)
    }

    if (property === 2) {
      props.class2LevelUpdate(value)
      props.bab2Update(bab)
      props.fortitude2Update(fort)
      props.reflex2Update(refl)
      props.will2Update(will)
    }

    if (property === 3) {
      props.class3LevelUpdate(value)
      props.bab3Update(bab)
      props.fortitude3Update(fort)
      props.reflex3Update(refl)
      props.will3Update(will)
    }

  }

  function saves(classed, property) {

    switch(classed) {

      case "Barbarian":
      case "Fighter":
        // FSS
        if (property === 1) props.save1Update("FSS")
        if (property === 2) props.save2Update("FSS")
        if (property === 3) props.save3Update("FSS")
      break;

      case "Bard":
        // SFF
        if (property === 1) props.save1Update("SFF")
        if (property === 2) props.save2Update("SFF")
        if (property === 3) props.save3Update("SFF")
      break;

      case "Cleric":
      case "Druid":
      case "Paladin":
        // FSF
        if (property === 1) props.save1Update("FSF")
        if (property === 2) props.save2Update("FSF")
        if (property === 3) props.save3Update("FSF")
      break;

      case "Monk":
        // FFF
        if (property === 1) props.save1Update("FFF")
        if (property === 2) props.save2Update("FFF")
        if (property === 3) props.save3Update("FFF")
      break;

      case "Ranger":
        // FFS
        if (property === 1) props.save1Update("FFS")
        if (property === 2) props.save2Update("FFS")
        if (property === 3) props.save3Update("FFS")
      break;

      case "Rogue":
        // SFS
        if (property === 1) props.save1Update("SFS")
        if (property === 2) props.save2Update("SFS")
        if (property === 3) props.save3Update("SFS")
      break;

      case "Sorcerer":
      case "Wizard":
        // SSF
        if (property === 1) props.save1Update("SSF")
        if (property === 2) props.save2Update("SSF")
        if (property === 3) props.save3Update("SSF")
      break;

      // SSS

      default:
      if (property === 1) props.save1Update("None")
      if (property === 2) props.save2Update("None")
      if (property === 3) props.save3Update("None")
      break;

    }

    if (property === 1) {
      props.class1Update(classed)
    }

    if (property === 2) {
      props.class2Update(classed)
    }

    if (property === 2) {
      props.class3Update(classed)
    }

  }

  return(

    <>

    <div className="block-container">

      <Select
        inputId="class1"
        inputValue={props.class1}
        inputChange={(e) => saves(e.target.value, 1)}
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
      </Select>

      <Input
        inputType="number"
        inputId="level1"
        inputValue={props.class1Level}
        inputChange={(e) => calculate(e.target.value, props.class1, 1)}
        inputLabel="Level"
      />

      <Select
        inputId="save1"
        inputValue={props.save1}
        inputDisabled={true}
        inputChange={() => null}
        inputLabel="Saves"
      >
        <option value="None">-</option>
        <option value="FSS">F / S / S</option>
        <option value="SFF">S / F / F</option>
        <option value="FSF">F / S / F</option>
        <option value="FFF">F / F / F</option>
        <option value="FFS">F / F / S</option>
        <option value="SFS">S / F / S</option>
        <option value="SSF">S / S / F</option>
        <option value="SSS">F / S / S</option>
      </Select>

    </div>

    <div className="block-container">

      <Select
        inputId="class2"
        inputValue={props.class2}
        inputChange={(e) => saves(e.target.value, 2)}
        inputSRT="true"
        inputLabel="Class 2"
        inputHelper="Class"
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
      </Select>

      <Input
        inputType="number"
        inputId="level2"
        inputValue={props.class2Level}
        inputChange={(e) => calculate(e.target.value, props.class2, 2)}
        inputSRT="true"
        inputLabel="Class 2 Level"
        inputHelper="Level"
      />

      <Select
        inputId="save2"
        inputValue={props.save2}
        inputDisabled={true}
        inputChange={() => null}
        inputLabel="Saves"
      >
        <option value="None">-</option>
        <option value="FSS">F / S / S</option>
        <option value="SFF">S / F / F</option>
        <option value="FSF">F / S / F</option>
        <option value="FFF">F / F / F</option>
        <option value="FFS">F / F / S</option>
        <option value="SFS">S / F / S</option>
        <option value="SSF">S / S / F</option>
        <option value="SSS">F / S / S</option>
      </Select>

    </div>

    <div className="block-container">

      <Select
        inputId="class3"
        inputValue={props.class3}
        inputChange={(e) => saves(e.target.value, 3)}
        inputSRT="true"
        inputLabel="Class 3"
        inputHelper="Class"
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
      </Select>

      <Input
        inputType="number"
        inputId="level3"
        inputValue={props.class3Level}
        inputChange={(e) => calculate(e.target.value, props.class3, 3)}
        inputSRT="true"
        inputLabel="Class 3 Level"
        inputHelper="Level"
      />

      <Select
        inputId="save3"
        inputValue={props.save3}
        inputDisabled={true}
        inputChange={() => null}
        inputLabel="Saves"
      >
        <option value="None">-</option>
        <option value="FSS">F / S / S</option>
        <option value="SFF">S / F / F</option>
        <option value="FSF">F / S / F</option>
        <option value="FFF">F / F / F</option>
        <option value="FFS">F / F / S</option>
        <option value="SFS">S / F / S</option>
        <option value="SSF">S / S / F</option>
        <option value="SSS">F / S / S</option>
      </Select>

    </div>

    </>

  )

}

export default Classes

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
