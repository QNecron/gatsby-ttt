import React, { useState } from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

import { total } from "./functions"

const Attacks = ({ ...props }) => {

  const [attrMelee, attrMeleeUpdate] = useState('str')
  const [attrRange, attrRangeUpdate] = useState('dex')

  function attacks(value, attr, background) {
    let bab = ""
    let mod = 0
    let atk1 = ""
    let atk2 = ""
    let atk3 = ""
    let size = 0

    if (attr === "dex") {
      mod = props.dex
    }
    else {
      mod = props.str
    }

    if (background === "Small") {
      size = 1
    }
    else {
      size = 0
    }

    if (parseInt(value) >= 0) {
      atk1 = (parseInt(value) + mod + size).toString()
    }

    if (parseInt(value) - 5 >= 1) {
      atk2 = " / " + (parseInt(value) - 5 + mod + size).toString()
    }

    if (parseInt(value) - 10 >= 1) {
      atk3 = " / " + (parseInt(value) - 10 + mod + size).toString()
    }

    bab = atk1 + atk2 + atk3

    return bab
  }

  function sizing(background) {
    let size = 0

    if (background === "Small") {
      size = -1
    }
    else {
      size = 0
    }

    return size

  }

  return(

    <>

    <div className="block-container bab">
      <h2 className="block-defined heading-5">Base Attack Bonus</h2>
      <div className="block">{total(props.bab1, props.bab2, props.bab3)}</div>
    </div>

    <div className="block-container bab">
      <Input
        inputType="number"
        inputId="cmb"
        inputDisabled={true}
        inputValue={total(props.bab1 + props.bab2 + props.bab3, props.str, sizing(props.bgSize))}
        inputChange={() => null}
        inputSRT="true"
        inputLabel="Combat Maneuver Bonus"
        inputHelper="CMB"
      />
      <Input
        inputType="number"
        inputId="cmd"
        inputDisabled={true}
        inputValue={total(props.bab1 + props.bab2 + props.bab3, props.str + props.dex, 10 + sizing(props.bgSize))}
        inputChange={() => null}
        inputSRT="true"
        inputLabel="Combat Maneuver Defence"
        inputHelper="CMD"
      />
    </div>

    <div className="block-container bab">
      <h2 className="block-defined heading-5">Melee</h2>
      <div className="block">{attacks(total(props.bab1, props.bab2, props.bab3), attrMelee, props.bgSize)}</div>
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
      <div className="block">{attacks(total(props.bab1, props.bab2, props.bab3), attrRange, props.bgSize)}</div>
      <Select
        inputId="range"
        inputValue={attrRange}
        inputChange={(e) => attrRangeUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Range Attack Modifier"
        inputHelper="Mod"
      >
        <option value="dex">DEX</option>
        <option value="str">STR</option>
      </Select>
    </div>

    </>

  )

}

export default Attacks
