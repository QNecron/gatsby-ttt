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
