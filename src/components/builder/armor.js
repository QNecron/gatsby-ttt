import React from "react"

import Input from "../../components/forms/input"

import { modifier } from "./functions"

const Armor = ({ ...props }) => {

  const modDex = modifier(
    props.character.attributes.dex,
    props.character.racial_attributes.dex,
    props.character.item_attributes.dex
  )

  function armor(a, b, c, d, e, f, g) {
    let ac = 0

    ac = 10 + parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f) + parseInt(g)

    return ac.toString()

  }

  function size(s) {
    let bonus = 0

    if (s === "Small") {
      bonus = 1
    }
    else {
      bonus = 0
    }

    return bonus

  }

  return(

    <>

      <div className="block-container armor">
        <h2 className="block-defined heading-5">AC</h2>
        <div className="block">{armor(
          modDex,
          props.character.ac.armor,
          props.character.ac.shield,
          props.character.ac.deflection,
          props.character.ac.natural,
          size(props.character.size),
          0
        )}</div>
      </div>

      <div className="block-container">
        <Input
          inputType="number"
          inputId="armor"
          inputValue={props.character.ac.armor}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            ac: {
              ...props.character.ac,
              armor: e.target.value
            }
          })}
          inputLabel="Armor"
        />
        <Input
          inputType="number"
          inputId="shield"
          inputValue={props.character.ac.shield}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            ac: {
              ...props.character.ac,
              shield: e.target.value
            }
          })}
          inputLabel="Shield"
        />
        <Input
          inputType="number"
          inputId="deflection"
          inputValue={props.character.ac.deflection}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            ac: {
              ...props.character.ac,
              deflection: e.target.value
            }
          })}
          inputLabel="Deflection"
        />
        <Input
          inputType="number"
          inputId="natural"
          inputValue={props.character.ac.natural}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            ac: {
              ...props.character.ac,
              natural: e.target.value
            }
          })}
          inputLabel="Natural"
        />
      </div>

      <div className="block-container">
        <Input
          inputType="number"
          inputId="touch"
          inputDisabled={true}
          inputValue={armor(modDex, size(props.character.size), props.character.ac.deflection, 0, 0, 0, 0)}
          inputChange={() => null}
          inputLabel="Touch"
        />
        <Input
          inputType="number"
          inputId="flatfooted"
          inputDisabled={true}
          inputValue={armor(
            props.character.ac.armor,
            props.character.ac.shield,
            props.character.ac.deflection,
            props.character.ac.natural,
            size(props.character.size),
            0, 0
          )}
          inputChange={() => null}
          inputLabel="Flat-footed"
        />
        <Input
          inputType="number"
          inputId="spellresistance"
          inputDisabled={props.dm === "enabled" ? false : true}
          inputValue={props.character.spell_resistance}
          inputChange={(e) => props.characterUpdate({...props.character, spell_resistance: e.target.value})}
          inputLabel="Spell Resistance"
        />
      </div>

    </>

  )

}

export default Armor
