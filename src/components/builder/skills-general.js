import React from "react"

import Input from "../../components/forms/input"

import { modifier, total } from "./functions"

const SkillsGeneral = ({ ...props }) => {

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
      <h2 className="block-defined heading-6">Acrobatics</h2>
      <div className="block">{total(
        props.character.skills.acrobatics,
        props.character.skills_item.acrobatics,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="acrobatics"
        inputValue={props.character.skills.acrobatics}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            acrobatics: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Acrobatic Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="acrobaticsItem"
        inputValue={props.character.skills_item.acrobatics}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            acrobatics: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Acrobatic Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Appraise</h2>
      <div className="block">{total(
        props.character.skills.appraise,
        props.character.skills_item.appraise,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="appraise"
        inputValue={props.character.skills.appraise}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            appraise: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Appraise Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="appraiseItem"
        inputValue={props.character.skills_item.appraise}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            appraise: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Appraise Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Bluff</h2>
      <div className="block">{total(
        props.character.skills.bluff,
        props.character.skills_item.bluff,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="bluff"
        inputValue={props.character.skills.bluff}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            bluff: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Bluff Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="bluffItem"
        inputValue={props.character.skills_item.bluff}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            bluff: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Bluff Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Climb</h2>
      <div className="block">{total(
        props.character.skills.climb,
        props.character.skills_item.climb,
        modStr
      )}</div>
      <div className="block">{modStr}</div>
      <Input
        inputType="number"
        inputId="climb"
        inputValue={props.character.skills.climb}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            climb: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Climb Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="climbItem"
        inputValue={props.character.skills_item.climb}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            climb: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Climb Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Diplomacy</h2>
      <div className="block">{total(
        props.character.skills.diplomacy,
        props.character.skills_item.diplomacy,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="diplomacy"
        inputValue={props.character.skills.diplomacy}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            diplomacy: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Diplomacy Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="diplomacyItem"
        inputValue={props.character.skills_item.diplomacy}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            diplomacy: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Diplomacy Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Disable Device</h2>
      <div className="block">{total(
        props.character.skills.disable_device,
        props.character.skills_item.disable_device,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="disabledevice"
        inputValue={props.character.skills.disable_device}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            disable_device: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Disable Device Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="disabledeviceItem"
        inputValue={props.character.skills_item.disable_device}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            disable_device: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Disable Device Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Disguise</h2>
      <div className="block">{total(
        props.character.skills.disguise,
        props.character.skills_item.disguise,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="disguise"
        inputValue={props.character.skills.disguise}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            disguise: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Disguise Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="disguiseItem"
        inputValue={props.character.skills_item.disguise}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            disguise: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Disguise Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Escape Artist</h2>
      <div className="block">{total(
        props.character.skills.escape_artist,
        props.character.skills_item.escape_artist,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="escapeartist"
        inputValue={props.character.skills.escape_artist}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            escape_artist: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Escape Artist Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="escapeartistItem"
        inputValue={props.character.skills_item.escape_artist}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            escape_artist: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Escape Artist Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Fly</h2>
      <div className="block">{total(
        props.character.skills.fly,
        props.character.skills_item.fly,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="fly"
        inputValue={props.character.skills.fly}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            fly: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Fly Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="flyItem"
        inputValue={props.character.skills_item.fly}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            fly: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Fly Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Handle Animal</h2>
      <div className="block">{total(
        props.character.skills.handle_animal,
        props.character.skills_item.handle_animal,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="handleanimal"
        inputValue={props.character.skills.handle_animal}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            handle_animal: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Handle Animal Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="handleanimalItem"
        inputValue={props.character.skills_item.handle_animal}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            handle_animal: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Handle Animal Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Heal</h2>
      <div className="block">{total(
        props.character.skills.heal,
        props.character.skills_item.heal,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="heal"
        inputValue={props.character.skills.heal}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            heal: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Heal Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="healItem"
        inputValue={props.character.skills_item.heal}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            heal: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Heal Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Intimidate</h2>
      <div className="block">{total(
        props.character.skills.intimidate,
        props.character.skills_item.intimidate,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="intimidate"
        inputValue={props.character.skills.intimidate}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            intimidate: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Intimidate Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="intimidateItem"
        inputValue={props.character.skills_item.intimidate}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            intimidate: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Intimidate Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Linguistics</h2>
      <div className="block">{total(
        props.character.skills.linguistics,
        props.character.skills_item.linguistics,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="linguistics"
        inputValue={props.character.skills.linguistics}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            linguistics: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Linguistics Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="linguisticsItem"
        inputValue={props.character.skills_item.linguistics}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            linguistics: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Linguistics Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Perception</h2>
      <div className="block">{total(
        props.character.skills.perception,
        props.character.skills_item.perception,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="perception"
        inputValue={props.character.skills.perception}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            perception: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perception Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="perceptionItem"
        inputValue={props.character.skills_item.perception}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            perception: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Perception Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Ride</h2>
      <div className="block">{total(
        props.character.skills.ride,
        props.character.skills_item.ride,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="ride"
        inputValue={props.character.skills.ride}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            ride: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Ride Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="rideItem"
        inputValue={props.character.skills_item.ride}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            ride: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Ride Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Sense Motive</h2>
      <div className="block">{total(
        props.character.skills.sense_motive,
        props.character.skills_item.sense_motive,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="sensemotive"
        inputValue={props.character.skills.sense_motive}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            sense_motive: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Sense Motive Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="sensemotiveItem"
        inputValue={props.character.skills_item.sense_motive}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            sense_motive: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Sense Motive Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Sleight of Hand</h2>
      <div className="block">{total(
        props.character.skills.sleight_of_hand,
        props.character.skills_item.sleight_of_hand,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="sleightofhand"
        inputValue={props.character.skills.sleight_of_hand}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            sleight_of_hand: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Sleight of Hand Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="sleightofhandItem"
        inputValue={props.character.skills_item.sleight_of_hand}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            sleight_of_hand: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Sleight of Hand Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Spellcraft</h2>
      <div className="block">{total(
        props.character.skills.spellcraft,
        props.character.skills_item.spellcraft,
        modInt
      )}</div>
      <div className="block">{modInt}</div>
      <Input
        inputType="number"
        inputId="spellcraft"
        inputValue={props.character.skills.spellcraft}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            spellcraft: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Spellcraft Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="spellcraftItem"
        inputValue={props.character.skills_item.spellcraft}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            spellcraft: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Spellcraft Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Stealth</h2>
      <div className="block">{total(
        props.character.skills.stealth,
        props.character.skills_item.stealth,
        modDex
      )}</div>
      <div className="block">{modDex}</div>
      <Input
        inputType="number"
        inputId="stealth"
        inputValue={props.character.skills.stealth}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            stealth: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Stealth Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="stealthItem"
        inputValue={props.character.skills_item.stealth}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            stealth: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Stealth Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Survival</h2>
      <div className="block">{total(
        props.character.skills.survival,
        props.character.skills_item.survival,
        modWis
      )}</div>
      <div className="block">{modWis}</div>
      <Input
        inputType="number"
        inputId="survival"
        inputValue={props.character.skills.survival}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            survival: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Survival Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="survivalItem"
        inputValue={props.character.skills_item.survival}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            survival: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Survival Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">Swim</h2>
      <div className="block">{total(
        props.character.skills.swim,
        props.character.skills_item.swim,
        modStr
      )}</div>
      <div className="block">{modStr}</div>
      <Input
        inputType="number"
        inputId="swim"
        inputValue={props.character.skills.swim}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            swim: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Swim Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="swimItem"
        inputValue={props.character.skills_item.swim}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            swim: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Swim Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    <div className="block-container skill">
      <h2 className="block-defined heading-6">UMD</h2>
      <div className="block">{total(
        props.character.skills.use_magic_device,
        props.character.skills_item.use_magic_device,
        modCha
      )}</div>
      <div className="block">{modCha}</div>
      <Input
        inputType="number"
        inputId="usemagicdevice"
        inputValue={props.character.skills.use_magic_device}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills: {
            ...props.character.skills,
            use_magic_device: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Use Magic Device Skill Ranks"
        inputHelper="Ranks"
      />
      <Input
        inputType="number"
        inputId="usemagicdeviceItem"
        inputValue={props.character.skills_item.use_magic_device}
        inputMin="0"
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          skills_item: {
            ...props.character.skills_item,
            use_magic_device: e.target.value
          }
        })}
        inputSRT="true"
        inputLabel="Use Magic Device Skill Bonus"
        inputHelper="Bonus"
      />
    </div>

    </>

  )

}

export default SkillsGeneral
