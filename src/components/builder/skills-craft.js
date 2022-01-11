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
      <h2 className="block-defined heading-6">Arcana</h2>
      <div className="block">{total(
        props.character.skills.k_arcana,
        props.character.skills_item.k_arcana,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="karcana"
        inputValue={props.character.skills.k_arcana}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_arcana: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Arcana Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="karcanaItem"
        inputValue={props.character.skills_item.k_arcana}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_arcana: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Arcana Skill Bonus"
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
