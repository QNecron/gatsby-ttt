import React from "react"

import Input from "../../components/forms/input"

const Armor = ({ ...props }) => {

  function armorAdd(a, b, c, d, e, f, g) {
    let ac = 0
    ac = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g)

    return ac.toString()

  }

  function sizing(background) {
    let size = 0

    if (background === "Small") {
      size = 1
    }
    else {
      size = 0
    }

    return size

  }

  return(

    <>

      <div className="block-container armor">
        <h2 className="block-defined heading-5">Armor Class</h2>
        <div className="block">{armorAdd(props.armorTotal, props.dex, props.armor, props.shield, props.deflection, props.natural, sizing(props.bgSize))}</div>
      </div>

      <div className="block-container">
        <Input
          inputType="number"
          inputId="armor"
          inputValue={props.armor}
          inputChange={(e) => props.armorUpdate(e.target.value)}
          inputLabel="Armor"
        />
        <Input
          inputType="number"
          inputId="shield"
          inputValue={props.shield}
          inputChange={(e) => props.shieldUpdate(e.target.value)}
          inputLabel="Shield"
        />
        <Input
          inputType="number"
          inputId="deflection"
          inputValue={props.deflection}
          inputChange={(e) => props.deflectionUpdate(e.target.value)}
          inputLabel="Deflection"
        />
        <Input
          inputType="number"
          inputId="natural"
          inputValue={props.natural}
          inputChange={(e) => props.naturalUpdate(e.target.value)}
          inputLabel="Natural"
        />
      </div>

      <div className="block-container">
        <Input
          inputType="number"
          inputId="touch"
          inputDisabled={true}
          inputValue={armorAdd(props.armorTotal, props.dex, 0, 0, props.deflection, 0, sizing(props.bgSize))}
          inputChange={() => null}
          inputLabel="Touch"
        />
        <Input
          inputType="number"
          inputId="flatfooted"
          inputDisabled={true}
          inputValue={armorAdd(props.armorTotal, 0, props.armor, props.shield, props.deflection, props.natural, sizing(props.bgSize))}
          inputChange={() => null}
          inputLabel="Flat-footed"
        />
        <Input
          inputType="number"
          inputId="spellresistance"
          inputValue={props.spellresistance}
          inputChange={(e) => props.spellresistanceUpdate(e.target.value)}
          inputLabel="Spell Resistance"
        />
      </div>

    </>

  )

}

export default Armor
