import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const Saves = ({ ...props }) => {

  const modCon = modifier(
    props.character.attributes.con,
    props.character.racial_attributes.con,
    props.character.item_attributes.con
  )

  const modDex = modifier(
    props.character.attributes.dex,
    props.character.racial_attributes.dex,
    props.character.item_attributes.dex
  )

  const modWis = modifier(
    props.character.attributes.wis,
    props.character.racial_attributes.wis,
    props.character.item_attributes.wis
  )

  return(

    <>

      <div className="block-container fortitude">
        <h2 className="block-defined heading-5">Fort</h2>
        <div className="block total">{total(modCon, 0, props.character.saves_item.fortitude) + total(
          props.character.saves_class_1.fortitude,
          props.character.saves_class_2.fortitude,
          props.character.saves_class_3.fortitude
        )}</div>
        <div className="block modifier">{modCon}</div>
        <div className="block class">{total(
          props.character.saves_class_1.fortitude,
          props.character.saves_class_2.fortitude,
          props.character.saves_class_3.fortitude
        )}</div>        <Input
          inputType="number"
          inputId="itemFortitude"
          inputValue={props.character.saves_item.fortitude}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            saves_item: {
              ...props.character.saves_item,
              fortitude: e.target.value
            }
          })}
          inputSRT="true"
          inputLabel="Fortitude Bonus"
          inputHelper="Bonus"
        />
      </div>

      <div className="block-container reflex">
        <h2 className="block-defined heading-5">Reflex</h2>
        <div className="block total">{total(modDex, 0, props.character.saves_item.reflex) + total(
          props.character.saves_class_1.reflex,
          props.character.saves_class_2.reflex,
          props.character.saves_class_3.reflex
        )}</div>
        <div className="block modifier">{modDex}</div>
        <div className="block class">{total(
          props.character.saves_class_1.reflex,
          props.character.saves_class_2.reflex,
          props.character.saves_class_3.reflex
        )}</div>
        <Input
          inputType="number"
          inputId="itemReflex"
          inputValue={props.character.saves_item.reflex}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            saves_item: {
              ...props.character.saves_item,
              reflex: e.target.value
            }
          })}
          inputSRT="true"
          inputLabel="Reflex Bonus"
          inputHelper="Bonus"
        />
      </div>

      <div className="block-container will">
        <h2 className="block-defined heading-5">Will</h2>
        <div className="block total">{total(modWis, 0, props.character.saves_item.will) + total(
          props.character.saves_class_1.will,
          props.character.saves_class_2.will,
          props.character.saves_class_3.will
        )}</div>
        <div className="block modifier">{modWis}</div>
        <div className="block class">{total(
          props.character.saves_class_1.will,
          props.character.saves_class_2.will,
          props.character.saves_class_3.will
        )}</div>
        <Input
          inputType="number"
          inputId="itemWill"
          inputValue={props.character.saves_item.will}
          inputChange={(e) => props.characterUpdate({
            ...props.character,
            saves_item: {
              ...props.character.saves_item,
              will: e.target.value
            }
          })}
          inputSRT="true"
          inputLabel="Will Bonus"
          inputHelper="Bonus"
        />
      </div>

    </>

  )

}

export default Saves
