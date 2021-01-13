import React from "react"

import Input from "../../components/forms/input"

import { total } from "./functions"

const Saves = ({ ...props }) => {

  return(

    <>

      <div className="block-container fortitude">
        <h2 className="block-defined heading-5">Fort</h2>
        <div className="block">{total(props.fortitude1, props.fortitude2, props.fortitude3) + parseInt(props.con) + parseInt(props.fortitude1Item)}</div>
        <div className="block">{total(props.fortitude1, props.fortitude2, props.fortitude3)}</div>
        <div className="block">{props.con}</div>
        <Input
          inputType="number"
          inputId="fortitude1Item"
          inputValue={props.fortitude1Item}
          inputChange={(e) => props.fortitude1ItemUpdate(e.target.value)}
          inputSRT="true"
          inputLabel="Fortitude Bonus"
          inputHelper="Bonus"
        />
      </div>

      <div className="block-container reflex">
        <h2 className="block-defined heading-5">Reflex</h2>
        <div className="block">{total(props.reflex1, props.reflex2, props.reflex3) + parseInt(props.dex) + parseInt(props.reflex1Item)}</div>
        <div className="block">{total(props.reflex1, props.reflex2, props.reflex3)}</div>
        <div className="block">{props.dex}</div>
        <Input
          inputType="number"
          inputId="reflex1Item"
          inputValue={props.reflex1Item}
          inputChange={(e) => props.reflex1ItemUpdate(e.target.value)}
          inputSRT="true"
          inputLabel="Reflex Bonus"
          inputHelper="Bonus"
        />
      </div>

      <div className="block-container will">
      <h2 className="block-defined heading-5">Will</h2>
        <div className="block">{total(props.will1, props.will2, props.will3) + parseInt(props.wis) + parseInt(props.will1Item)}</div>
        <div className="block">{total(props.will1, props.will2, props.will3)}</div>
        <div className="block">{props.wis}</div>
        <Input
          inputType="number"
          inputId="will1Item"
          inputValue={props.will1Item}
          inputChange={(e) => props.will1ItemUpdate(e.target.value)}
          inputSRT="true"
          inputLabel="Will Bonus"
          inputHelper="Bonus"
        />
      </div>

    </>

  )

}

export default Saves
