import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const Initiative = ({ ...props }) => {

  let mod = modifier(
    props.character.attributes.dex,
    props.character.racial_attributes.dex,
    props.character.item_attributes.dex
  )

  return(

    <>

      <div className="block-container speed">
        <h2 className="block-defined heading-5">Init</h2>
        <div className="block">{total(mod, props.character.init, 0)}</div>
        <Input
          inputType="number"
          inputId="init"
          inputValue={props.character.init}
          inputChange={(e) => props.characterUpdate({...props.character, init: e.target.value})}
          inputSRT="true"
          inputLabel="Initiative Bonus from Feats / Traits"
          inputHelper="Bonus"
        />
      </div>

    </>

  )

}

export default Initiative
