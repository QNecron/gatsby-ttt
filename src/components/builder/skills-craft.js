import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const SkillsCraft = ({ ...props }) => {

  const modInt = modifier(
    props.character.attributes.int,
    props.character.racial_attributes.int,
    props.character.item_attributes.int
  )

  return(

    <>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Craft 1</h2>
      <div className="block">{total(
        props.character.skills.craft_1,
        props.character.skills_item.craft_1,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="craft1"
        inputValue={props.character.skills.craft_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            craft_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 1 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="craft1Item"
        inputValue={props.character.skills_item.craft_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            craft_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 1 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Craft 2</h2>
      <div className="block">{total(
        props.character.skills.craft_2,
        props.character.skills_item.craft_2,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="craft2"
        inputValue={props.character.skills.craft_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            craft_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 2 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="craft2Item"
        inputValue={props.character.skills_item.craft_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            craft_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 2 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Craft 3</h2>
      <div className="block">{total(
        props.character.skills.craft_3,
        props.character.skills_item.craft_3,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="craft3"
        inputValue={props.character.skills.craft_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            craft_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 3 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="craft3Item"
        inputValue={props.character.skills_item.craft_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            craft_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Craft 3 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    {/*
      alchemy,
      armor,
      baskets,
      books,
      bows,
      calligraphy,
      carpentry,
      cloth,
      clothing,
      glass,
      jewelry,
      leather,
      locks,
      paintings,
      pottery,
      sculptures,
      ships,
      shoes,
      stonemasonry,
      traps,
      weapons
    */}

    </>

  )

}

export default SkillsCraft
