import React from "react"

import { deleteCharacter } from "../../components/builder/functions"

function Storage({ ...props }) {

  const saved = [].concat(props.listCharacter)

  const load = (name) => {

    if (!name) return;

    const storage = window.localStorage
    const saved = storage.getItem(name)

    if (saved) {
      let data = JSON.parse(saved, null, -1).character

      console.log(data)

      props.characterUpdate({
        ...props.character,
        name: data.name,
        race: data.race,
        racial_bonus: data.racial_bonus,
        racial_attributes: {
          ...props.character.racial_attributes,
          str: data.racial_attributes.str,
          dex: data.racial_attributes.dex,
          con: data.racial_attributes.con,
          int: data.racial_attributes.int,
          wis: data.racial_attributes.wis,
          cha: data.racial_attributes.cha
        },
        attributes: {
          ...props.character.attributes,
          str: data.attributes.str,
          dex: data.attributes.dex,
          con: data.attributes.con,
          int: data.attributes.int,
          wis: data.attributes.wis,
          cha: data.attributes.cha
        },
        item_attributes: {
          ...props.character.item_attributes,
          str: data.item_attributes.str,
          dex: data.item_attributes.dex,
          con: data.item_attributes.con,
          int: data.item_attributes.int,
          wis: data.item_attributes.wis,
          cha: data.item_attributes.cha
        },
        size: data.size,
        class_1: data.class_1,
        level_1: data.level_1,
        bab_1: data.bab_1,
        saves_class_1: {
          ...props.character.saves_class_1,
          progression: data.saves_class_1.progression,
          fortitude: data.saves_class_1.fortitude,
          reflex: data.saves_class_1.reflex,
          will: data.saves_class_1.will
        },
        skill_points_1: data.skill_points_1,
        class_2: data.class_2,
        level_2: data.level_2,
        bab_2: data.bab_2,
        saves_class_2: {
          ...props.character.saves_class_2,
          fortitude: data.saves_class_2.fortitude,
          reflex: data.saves_class_2.reflex,
          will: data.saves_class_2.will
        },
        skill_points_2: data.skill_points_2,
        class_3: data.class_3,
        level_3: data.level_3,
        bab_3: data.bab_3,
        saves_class_3: {
          ...props.character.saves_class_3,
          fortitude: data.saves_class_3.fortitude,
          reflex: data.saves_class_3.reflex,
          will: data.saves_class_3.will
        },
        skill_points_3: data.skill_points_3,
        skills: {
          ...props.character.skills,
          acrobatics: data.skills.acrobatics,
          appraise: data.skills.appraise,
          bluff: data.skills.bluff,
          climb: data.skills.climb,
          craft_1: data.skills.craft_1,
          craft_2: data.skills.craft_2,
          craft_3: data.skills.craft_3,
          diplomacy: data.skills.diplomacy,
          disable_device: data.skills.disable_device,
          disguise: data.skills.disguise,
          escape_artist: data.skills.escape_artist,
          fly: data.skills.fly,
          handle_animal: data.skills.handle_animal,
          heal: data.skills.heal,
          intimidate: data.skills.intimidate,
          k_arcana: data.skills.k_arcana,
          k_dungeoneering: data.skills.k_dungeoneering,
          k_engineering: data.skills.k_engineering,
          k_geography: data.skills.k_geography,
          k_history: data.skills.k_history,
          k_local: data.skills.k_local,
          k_nature: data.skills.k_nature,
          k_nobility: data.skills.k_nobility,
          k_planes: data.skills.k_planes,
          k_religion: data.skills.k_religion,
          linguistics: data.skills.linguistics,
          perception: data.skills.perception,
          perform_1: data.skills.perform_1,
          perform_2: data.skills.perform_2,
          perform_3: data.skills.perform_3,
          profession_1: data.skills.profession_1,
          profession_2: data.skills.profession_2,
          profession_3: data.skills.profession_3,
          ride: data.skills.ride,
          sense_motive: data.skills.sense_motive,
          sleight_of_hand: data.skills.sleight_of_hand,
          spellcraft: data.skills.spellcraft,
          stealth: data.skills.stealth,
          survival: data.skills.survival,
          swim: data.skills.swim,
          use_magic_device: data.skills.use_magic_device
        },
        saves_item: {
          ...props.character.saves_item,
          fortitude: data.saves_item.fortitude,
          reflex: data.saves_item.reflex,
          will: data.saves_item.will
        },
        skills_item: {
          ...props.character.skills_item,
          acrobatics: data.skills_item.acrobatics,
          appraise: data.skills_item.appraise,
          bluff: data.skills_item.bluff,
          climb: data.skills_item.climb,
          craft_1: data.skills_item.craft_1,
          craft_2: data.skills_item.craft_2,
          craft_3: data.skills_item.craft_3,
          diplomacy: data.skills_item.diplomacy,
          disable_device: data.skills_item.disable_device,
          disguise: data.skills_item.disguise,
          escape_artist: data.skills_item.escape_artist,
          fly: data.skills_item.fly,
          handle_animal: data.skills_item.handle_animal,
          heal: data.skills_item.heal,
          intimidate: data.skills_item.intimidate,
          k_arcana: data.skills_item.k_arcana,
          k_dungeoneering: data.skills_item.k_dungeoneering,
          k_engineering: data.skills_item.k_engineering,
          k_geography: data.skills_item.k_geography,
          k_history: data.skills_item.k_history,
          k_local: data.skills_item.k_local,
          k_nature: data.skills_item.k_nature,
          k_nobility: data.skills_item.k_nobility,
          k_planes: data.skills_item.k_planes,
          k_religion: data.skills_item.k_religion,
          linguistics: data.skills_item.linguistics,
          perception: data.skills_item.perception,
          perform_1: data.skills_item.perform_1,
          perform_2: data.skills_item.perform_2,
          perform_3: data.skills_item.perform_3,
          profession_1: data.skills_item.profession_1,
          profession_2: data.skills_item.profession_2,
          profession_3: data.skills_item.profession_3,
          ride: data.skills_item.ride,
          sense_motive: data.skills_item.sense_motive,
          sleight_of_hand: data.skills_item.sleight_of_hand,
          spellcraft: data.skills_item.spellcraft,
          stealth: data.skills_item.stealth,
          survival: data.skills_item.survival,
          swim: data.skills_item.swim,
          use_magic_device: data.skills_item.use_magic_device
        },
        init: data.init,
        ac: {
          ...props.character.ac,
          armor_type: data.ac.armor_type,
          armor: data.ac.armor,
          shield: data.ac.shield,
          deflection: data.ac.deflection,
          natural: data.ac.natural,
        },
        spell_resistance: data.spell_resistance,
        speed: {
          ...props.character.speed,
          penalty: data.speed.penalty,
          movement: data.speed.movement,
          bonus: data.speed.bonus,
          swim: data.speed.swim,
          fly: data.speed.fly,
          climb: data.speed.climb,
          burrow: data.speed.burrow
        }
      })

    }
    else {
      console.log("No saved character data found.")
    }

  }

  const remove = (item) => {
    deleteCharacter(item)

    const storage = window.localStorage
    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      // let value = storage.getItem(key);

      if (key !== "theme") characters.push(key)
    }

    props.listCharacterUpdate(characters)

  }

  return (

    <>

    {props.listCharacter[0] && (
      <ul className="character-storage-container">

        {saved.map(item => (

          <li className="character-storage-item" key={item}>

            <button
              className="btn-icon btn-secondary character-storage-load"
              data-save={item}
              onClick={(e) => load(item)}
            >
              <span className="material-icons" aria-hidden="true">cloud_download</span>
              <span data-srt="true">Load saved character {item}</span>
            </button>

            <button
              className="btn-icon btn-secondary character-storage-remove"
              data-save={item}
              onClick={(e) => remove(item)}
            >
              <span className="material-icons" aria-hidden="true">highlight_off</span>
              <span data-srt="true">Remove saved character {item}</span>
            </button>

            <div className="character-storage-name">{item}</div>

          </li>

        ))}

      </ul>
    )}

    {!props.listCharacter[0] && (
      <div className="character-storage-empty">
        <p className="character-storage-name">
          No saved characters found, click the "Save" button to store your progress.
        </p>
      </div>
    )}

    </>

  )

}

export default Storage
