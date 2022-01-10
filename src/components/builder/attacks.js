import React, { useState } from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

import { modifier, total } from "./functions"

const Attacks = ({ ...props }) => {

  const [attrMelee, attrMeleeUpdate] = useState("STR")
  const [attrRange, attrRangeUpdate] = useState("DEX")

  const modStr = modifier(
    props.character.attributes.str,
    props.character.racial_attributes.str,
    props.character.item_attributes.str
  )

  const modDex = modifier(
    props.character.attributes.dex,
    props.character.racial_attributes.dex,
    props.character.item_attributes.dex
  )

  function attacks(b, a, s) {
    let full = ""
    let mod = 0
    let atk1 = ""
    let atk2 = ""
    let atk3 = ""
    let size = 0

    if (a === "DEX") {
      mod = modDex
    }
    else {
      mod = modStr
    }

    if (s === "Small") {
      size = -1
    }

    if (parseInt(b) >= 0) {
      atk1 = (parseInt(b) + mod + size).toString()
    }

    if (parseInt(b) - 5 >= 1) {
      atk2 = " / " + (parseInt(b) - 5 + mod + size).toString()
    }

    if (parseInt(b) - 10 >= 1) {
      atk3 = " / " + (parseInt(b) - 10 + mod + size).toString()
    }

    full = atk1 + atk2 + atk3

    return full

  }

  function sizing(background) {
    let size = 0
    return size
  }

  return(

    <>

    <div className="block-container bab">
      <h2 className="block-defined heading-5">BAB</h2>
      <div className="block">{total(
        props.character.bab_1,
        props.character.bab_2,
        props.character.bab_3
      )}</div>
    </div>

    <div className="block-container bab">
      <Input
        inputType="number"
        inputId="cmb"
        inputDisabled={true}
        inputValue={total(
          props.character.bab_1 + props.character.bab_2 + props.character.bab_3,
          modStr,
          sizing(props.character.size)
        )}
        inputChange={() => null}
        inputSRT="true"
        inputLabel="Combat Maneuver Bonus"
        inputHelper="CMB"
      />
      <Input
        inputType="number"
        inputId="cmd"
        inputDisabled={true}
        inputValue={total(
          props.character.bab_1 + props.character.bab_2 + props.character.bab_3,
          modStr + modDex,
          10 + sizing(props.character.size)
        )}
        inputChange={() => null}
        inputSRT="true"
        inputLabel="Combat Maneuver Defence"
        inputHelper="CMD"
      />
    </div>

    <div className="block-container bab">
      <h2 className="block-defined heading-5">Melee</h2>
      <div className="block">{attacks(
        total(
          props.character.bab_1,
          props.character.bab_2,
          props.character.bab_3
        ),
        attrMelee,
        props.character.size
      )}</div>
      <Select
        inputId="melee"
        inputValue={attrMelee}
        inputChange={(e) => attrMeleeUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Melee Attack Modifier"
        inputHelper="Mod"
      >
        <option value="str">STR</option>
        <option value="dex">DEX</option>
      </Select>
    </div>

    <div className="block-container bab">
      <h2 className="block-defined heading-5">Range</h2>
      <div className="block">{attacks(
        total(
          props.character.bab_1,
          props.character.bab_2,
          props.character.bab_3
        ),
        attrRange,
        props.character.size
      )}</div>
      <Select
        inputId="range"
        inputValue={attrRange}
        inputChange={(e) => attrRangeUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Range Attack Modifier"
        inputHelper="Mod"
      >
        <option value="DEX">DEX</option>
        <option value="STR">STR</option>
      </Select>
    </div>

    </>

  )

}

export default Attacks
