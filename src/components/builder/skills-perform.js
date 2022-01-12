import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const SkillsPerform = ({ ...props }) => {

  const modCha = modifier(
    props.character.attributes.cha,
    props.character.racial_attributes.cha,
    props.character.item_attributes.cha
  )

  return(

    <>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Perform 1</h2>
      <div className="block">{total(
        props.character.skills.perform_1,
        props.character.skills_item.perform_1,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="perform1"
        inputValue={props.character.skills.perform_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            perform_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 1 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="perform1Item"
        inputValue={props.character.skills_item.perform_1}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            perform_1: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 1 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Perform 2</h2>
      <div className="block">{total(
        props.character.skills.perform_2,
        props.character.skills_item.perform_2,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="perform2"
        inputValue={props.character.skills.perform_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            perform_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 2 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="perform2Item"
        inputValue={props.character.skills_item.perform_2}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            perform_2: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 2 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Perform 3</h2>
      <div className="block">{total(
        props.character.skills.perform_3,
        props.character.skills_item.perform_3,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="perform3"
        inputValue={props.character.skills.perform_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            perform_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 3 Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="perform3Item"
        inputValue={props.character.skills_item.perform_3}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            perform_3: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perform 3 Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    {/*
      Act (comedy, drama, pantomime)
      Comedy (buffoonery, limericks, joke-telling)
      Dance (ballet, waltz, jig)
      Keyboard instruments (harpsichord, piano, pipe organ)
      Oratory (epic, ode, storytelling)
      Percussion instruments (bells, chimes, drums, gong)
      String instruments (fiddle, harp, lute, mandolin)
      Wind instruments (flute, pan pipes, recorder, trumpet)
      Sing (ballad, chant, melody)
    */}

    </>

  )

}

export default SkillsPerform
