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
      <h2 className="block-defined heading-6">Profession 1</h2>
      <div className="block">{total(
        props.character.skills.profession_1,
        props.character.skills_item.profession_1,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="profession1"
        inputValue={props.character.skills.profession_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            profession_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 1 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="profession1Item"
        inputValue={props.character.skills_item.profession_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            profession_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 1 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Profession 2</h2>
      <div className="block">{total(
        props.character.skills.profession_2,
        props.character.skills_item.profession_2,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="profession2"
        inputValue={props.character.skills.profession_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            profession_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 2 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="profession2Item"
        inputValue={props.character.skills_item.profession_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            profession_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 2 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Profession 3</h2>
      <div className="block">{total(
        props.character.skills.profession_3,
        props.character.skills_item.profession_3,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="profession3"
        inputValue={props.character.skills.profession_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            profession_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 3 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="profession3Item"
        inputValue={props.character.skills_item.profession_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            profession_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Profession 3 Skill Bonus"
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
