import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const Attributes = ({ ...props }) => {

  return(

    <>

    <div className="block-container str">
      <h2 className="block-defined heading-5">STR</h2>
      <div className="block">{total(props.str, props.strRace, props.strItem)}</div>
      <div className="block">{modifier(props.str, props.strRace, props.strItem)}</div>
      <Input
        inputType="number"
        inputId="str"
        inputValue={props.str}
        inputChange={(e) => props.strUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Strength Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="strItem"
        inputValue={props.strItem}
        inputChange={(e) => props.strItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Strength"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container dex">
      <h2 className="block-defined heading-5">DEX</h2>
      <div className="block">{total(props.dex, props.dexRace, props.dexItem)}</div>
      <div className="block">{modifier(props.dex, props.dexRace, props.dexItem)}</div>
      <Input
        inputType="number"
        inputId="dex"
        inputValue={props.dex}
        inputChange={(e) => props.dexUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Dexterity Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="dexItem"
        inputValue={props.dexItem}
        inputChange={(e) => props.dexItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Dexterity"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container con">
      <h2 className="block-defined heading-5">CON</h2>
      <div className="block">{total(props.con, props.conRace, props.conItem)}</div>
      <div className="block">{modifier(props.con, props.conRace, props.conItem)}</div>
      <Input
        inputType="number"
        inputId="con"
        inputValue={props.con}
        inputChange={(e) => props.conUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Constitution Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="conItem"
        inputValue={props.conItem}
        inputChange={(e) => props.conItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Constitution"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container int">
      <h2 className="block-defined heading-5">INT</h2>
      <div className="block">{total(props.int, props.intRace, props.intItem)}</div>
      <div className="block">{modifier(props.int, props.intRace, props.intItem)}</div>
      <Input
        inputType="number"
        inputId="int"
        inputValue={props.int}
        inputChange={(e) => props.intUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Intelligence Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="intItem"
        inputValue={props.intItem}
        inputChange={(e) => props.intItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Intelligence"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container wis">
      <h2 className="block-defined heading-5">WIS</h2>
      <div className="block">{total(props.wis, props.wisRace, props.wisItem)}</div>
      <div className="block">{modifier(props.wis, props.wisRace, props.wisItem)}</div>
      <Input
        inputType="number"
        inputId="wis"
        inputValue={props.wis}
        inputChange={(e) => props.wisUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Wisdom Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="wisItem"
        inputValue={props.wisItem}
        inputChange={(e) => props.wisItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Wisdom"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container wis">
      <h2 className="block-defined heading-5">CHA</h2>
      <div className="block">{total(props.cha, props.chaRace, props.chaItem)}</div>
      <div className="block">{modifier(props.cha, props.chaRace, props.chaItem)}</div>
      <Input
        inputType="number"
        inputId="cha"
        inputValue={props.cha}
        inputChange={(e) => props.chaUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Charisma Attribute"
        inputHelper="Base"
      />
      <Input
        inputType="number"
        inputId="chaItem"
        inputValue={props.chaItem}
        inputChange={(e) => props.chaItemUpdate(e.target.value)}
        inputSRT="true"
        inputLabel="Enhancement / Magical Bonus to Charisma"
        inputHelper="Bonus"
      />
    </div>

    </>

  )

}

export default Attributes
