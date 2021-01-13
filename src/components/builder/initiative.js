import React from "react"

import Input from "../../components/forms/input"

import { total } from "./functions"

const Initiative = ({ ...props }) => {

  return(

    <>

      <div className="block-container speed">
        <h2 className="block-defined heading-5">Initiative</h2>
        <div className="block">{total(props.dex, props.init, 0)}</div>
        <Input
          inputType="number"
          inputId="init"
          inputValue={props.init}
          inputChange={(e) => props.initUpdate(e.target.value)}
          inputSRT="true"
          inputLabel="Initiative Bonus from Feats / Traits"
          inputHelper="Bonus"
        />
      </div>

    </>

  )

}

export default Initiative
