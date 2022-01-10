import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const SkillsKnowledge = ({ ...props }) => {

  const modStr = modifier(
    props.character.attributes.str,
    props.character.racial_attributes.str,
    props.character.item_attributes.str
  )

  const modDex = modifier(
    props.character.attributes.dex,
    props.character.racial_attributes.dex,
    props.character.item_attributes.dex
  )

  const modInt = modifier(
    props.character.attributes.int,
    props.character.racial_attributes.int,
    props.character.item_attributes.int
  )

  const modWis = modifier(
    props.character.attributes.wis,
    props.character.racial_attributes.wis,
    props.character.item_attributes.wis
  )

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

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Dungeoneering</h2>
      <div className="block">{total(
        props.character.skills.k_dungeoneering,
        props.character.skills_item.k_dungeoneering,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="kdungeoneering"
        inputValue={props.character.skills.k_dungeoneering}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_dungeoneering: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Dungeoneering Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="kdungeoneeringItem"
        inputValue={props.character.skills_item.k_dungeoneering}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_dungeoneering: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Dungeoneering Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Engineering</h2>
      <div className="block">{total(
        props.character.skills.k_engineering,
        props.character.skills_item.k_engineering,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="kengineering"
        inputValue={props.character.skills.k_engineering}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_engineering: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Engineering Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="kengineeringItem"
        inputValue={props.character.skills_item.k_engineering}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_engineering: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Engineering Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Geography</h2>
      <div className="block">{total(
        props.character.skills.k_geography,
        props.character.skills_item.k_geography,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="kgeography"
        inputValue={props.character.skills.k_geography}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_geography: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Geography Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="kgeographyItem"
        inputValue={props.character.skills_item.k_geography}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_geography: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Geography Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">History</h2>
      <div className="block">{total(
        props.character.skills.k_history,
        props.character.skills_item.k_history,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="khistory"
        inputValue={props.character.skills.k_history}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_history: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="History Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="khistoryItem"
        inputValue={props.character.skills_item.k_history}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_history: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="History Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Local</h2>
      <div className="block">{total(
        props.character.skills.k_local,
        props.character.skills_item.k_local,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="klocal"
        inputValue={props.character.skills.k_local}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_local: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Local Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="klocalItem"
        inputValue={props.character.skills_item.k_local}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_local: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Local Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Nature</h2>
      <div className="block">{total(
        props.character.skills.k_nature,
        props.character.skills_item.k_nature,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="knature"
        inputValue={props.character.skills.k_nature}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_nature: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Nature Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="knatureItem"
        inputValue={props.character.skills_item.k_nature}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_nature: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Nature Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Nobility</h2>
      <div className="block">{total(
        props.character.skills.k_nobility,
        props.character.skills_item.k_nobility,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="knobility"
        inputValue={props.character.skills.k_nobility}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_nobility: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Nobility Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="knobilityItem"
        inputValue={props.character.skills_item.k_nobility}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_nobility: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Nobility Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Planes</h2>
      <div className="block">{total(
        props.character.skills.k_planes,
        props.character.skills_item.k_planes,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="kplanes"
        inputValue={props.character.skills.k_planes}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_planes: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Planes Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="kplanesItem"
        inputValue={props.character.skills_item.k_planes}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_planes: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Planes Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Religion</h2>
      <div className="block">{total(
        props.character.skills.k_religion,
        props.character.skills_item.k_religion,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="kreligion"
        inputValue={props.character.skills.k_religion}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            k_religion: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Religion Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="kreligionItem"
        inputValue={props.character.skills_item.k_religion}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            k_religion: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Religion Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    </>

  )

}

export default SkillsKnowledge
