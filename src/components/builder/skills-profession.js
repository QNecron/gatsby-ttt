import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const SkillsProfession = ({ ...props }) => {

  const modWis = modifier(
    props.character.attributes.wis,
    props.character.racial_attributes.wis,
    props.character.item_attributes.wis
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
      architect,
      baker,
      barrister,
      brewer,
      butcher,
      clerk,
      cook,
      courtesan,
      driver,
      engineer,
      farmer,
      fisherman,
      gambler,
      gardener,
      herbalist,
      innkeeper,
      librarian,
      merchant,
      midwife,
      miller,
      miner,
      porter,
      sailor,
      scribe,
      shepherd,
      stable master,
      soldier,
      tanner,
      trapper, 
      woodcutter
    */}

    </>

  )

}

export default SkillsProfession
