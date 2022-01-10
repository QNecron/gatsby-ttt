import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const Attributes = ({ ...props }) => {

  return(

    <>

    <div className="block-container str">
      <h2 className="block-defined heading-5">STR</h2>
      <div className="block">{total(
        props.character.attributes.str,
        props.character.racial_attributes.str,
        props.character.item_attributes.str
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.str,
        props.character.racial_attributes.str,
        props.character.item_attributes.str
      )}</div>
      <Input
        inputType="number"
        inputId="str"
        inputValue={props.character.attributes.str}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            str: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Strength Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="strItem"
        inputValue={props.character.item_attributes.str}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            str: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Strength"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container dex">
      <h2 className="block-defined heading-5">DEX</h2>
      <div className="block">{total(
        props.character.attributes.dex,
        props.character.racial_attributes.dex,
        props.character.item_attributes.dex
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.dex,
        props.character.racial_attributes.dex,
        props.character.item_attributes.dex
      )}</div>
      <Input
        inputType="number"
        inputId="dex"
        inputValue={props.character.attributes.dex}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            dex: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Dexterity Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="dexItem"
        inputValue={props.character.item_attributes.dex}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            dex: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Dexterity"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container con">
      <h2 className="block-defined heading-5">CON</h2>
      <div className="block">{total(
        props.character.attributes.con,
        props.character.racial_attributes.con,
        props.character.item_attributes.con
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.con,
        props.character.racial_attributes.con,
        props.character.item_attributes.con
      )}</div>
      <Input
        inputType="number"
        inputId="con"
        inputValue={props.character.attributes.con}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            con: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Constitution Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="conItem"
        inputValue={props.character.item_attributes.con}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            con: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Constitution"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container int">
      <h2 className="block-defined heading-5">INT</h2>
      <div className="block">{total(
        props.character.attributes.int,
        props.character.racial_attributes.int,
        props.character.item_attributes.int
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.int,
        props.character.racial_attributes.int,
        props.character.item_attributes.int
      )}</div>
      <Input
        inputType="number"
        inputId="int"
        inputValue={props.character.attributes.int}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            int: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Intelligence Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="intItem"
        inputValue={props.character.item_attributes.int}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            int: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Intelligence"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container wis">
      <h2 className="block-defined heading-5">WIS</h2>
      <div className="block">{total(
        props.character.attributes.wis,
        props.character.racial_attributes.wis,
        props.character.item_attributes.wis
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.wis,
        props.character.racial_attributes.wis,
        props.character.item_attributes.wis
      )}</div>
      <Input
        inputType="number"
        inputId="wis"
        inputValue={props.character.attributes.wis}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            wis: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Wisdom Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="wisItem"
        inputValue={props.character.item_attributes.wis}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            wis: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Wisdom"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container cha">
      <h2 className="block-defined heading-5">CHA</h2>
      <div className="block">{total(
        props.character.attributes.cha,
        props.character.racial_attributes.cha,
        props.character.item_attributes.cha
      )}</div>
      <div className="block">{modifier(
        props.character.attributes.cha,
        props.character.racial_attributes.cha,
        props.character.item_attributes.cha
      )}</div>
      <Input
        inputType="number"
        inputId="cha"
        inputValue={props.character.attributes.cha}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          attributes: {
            ...props.character.attributes,
            cha: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Charisma Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="chaItem"
        inputValue={props.character.item_attributes.cha}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          item_attributes: {
            ...props.character.item_attributes,
            cha: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Charisma"
        inputHelper="Bonus"
      />
    </div>

    </>

  )

}

export default Attributes
