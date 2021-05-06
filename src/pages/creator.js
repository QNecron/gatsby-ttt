import React, { useState, useEffect } from "react"

import Seo from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Input from "../components/forms/input"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"

import { modifier } from "../components/builder/functions"

import Storage from "../components/builder/storage"
import Backgrounds from "../components/builder/backgrounds"
import Classes from "../components/builder/classes"
import Attributes from "../components/builder/attributes"
import Saves from "../components/builder/saves"
import Armor from "../components/builder/armor"
import Attacks from "../components/builder/attacks"
import HitPoints from "../components/builder/hitpoints"
import Initiative from "../components/builder/initiative"
import Skills from "../components/builder/skills"
import Speed from "../components/builder/speed"

import ImgDesktop from "../images/hero/hero-05.jpg"
import ImgMobile from "../images/hero/hero-05-mobile.jpg"

const Creator = ({ menu, menuUpdate }) => {

  const [createCharacter, createCharacterUpdate] = useState("")
  const [listedCharacter, listedCharacterUpdate] = useState("")

  const [bg, bgUpdate] = useState("")
  const [bgBonus, bgBonusUpdate] = useState("")

  const [bgSize, bgSizeUpdate] = useState("Medium")

  const [class1, class1Update] = useState("None")
  const [class1Level, class1LevelUpdate] = useState(0)
  const [class2, class2Update] = useState("None")
  const [class2Level, class2LevelUpdate] = useState(0)
  const [class3, class3Update] = useState("None")
  const [class3Level, class3LevelUpdate] = useState(0)

  // add to save + load
  const [save1, save1Update] = useState("None")
  const [save2, save2Update] = useState("None")
  const [save3, save3Update] = useState("None")

  const [bab1, bab1Update] = useState(0)
  const [bab2, bab2Update] = useState(0)
  const [bab3, bab3Update] = useState(0)

  const [armorClass, armorClassUpdate] = useState(10)
  const [armorTotal, armorTotalUpdate] = useState(armorClass)

  const [armor, armorUpdate] = useState(0)
  const [shield, shieldUpdate] = useState(0)
  const [natural, naturalUpdate] = useState(0)
  const [deflection, deflectionUpdate] = useState(0)

  const [spellresistance, spellresistanceUpdate] = useState(0)

  const [fortitude1, fortitude1Update] = useState(0)
  const [fortitude2, fortitude2Update] = useState(0)
  const [fortitude3, fortitude3Update] = useState(0)
  const [fortitude1Item, fortitude1ItemUpdate] = useState(0)

  const [reflex1, reflex1Update] = useState(0)
  const [reflex2, reflex2Update] = useState(0)
  const [reflex3, reflex3Update] = useState(0)
  const [reflex1Item, reflex1ItemUpdate] = useState(0)

  const [will1, will1Update] = useState(0)
  const [will2, will2Update] = useState(0)
  const [will3, will3Update] = useState(0)
  const [will1Item, will1ItemUpdate] = useState(0)

  const [str, strUpdate] = useState(8)
  const [strRace, strRaceUpdate] = useState(0)
  const [strItem, strItemUpdate] = useState(0)

  const [dex, dexUpdate] = useState(8)
  const [dexRace, dexRaceUpdate] = useState(0)
  const [dexItem, dexItemUpdate] = useState(0)

  const [con, conUpdate] = useState(8)
  const [conRace, conRaceUpdate] = useState(0)
  const [conItem, conItemUpdate] = useState(0)

  const [int, intUpdate] = useState(8)
  const [intRace, intRaceUpdate] = useState(0)
  const [intItem, intItemUpdate] = useState(0)

  const [wis, wisUpdate] = useState(8)
  const [wisRace, wisRaceUpdate] = useState(0)
  const [wisItem, wisItemUpdate] = useState(0)

  const [cha, chaUpdate] = useState(8)
  const [chaRace, chaRaceUpdate] = useState(0)
  const [chaItem, chaItemUpdate] = useState(0)

  const [init, initUpdate] = useState(0)

  const [speed, speedUpdate] = useState(30)
  const [speedClass, speedClassUpdate] = useState(0)
  const [speedArmor, speedArmorUpdate] = useState(0)
  const [speedFly, speedFlyUpdate] = useState(0)
  const [speedSwim, speedSwimUpdate] = useState(0)
  const [speedClimb, speedClimbUpdate] = useState(0)
  const [speedBurrow, speedBurrowUpdate] = useState(0)

  const [acrobatics, acrobaticsUpdate] = useState(0)
  const [acrobaticsItem, acrobaticsItemUpdate] = useState(0)

  const [appraise, appraiseUpdate] = useState(0)
  const [appraiseItem, appraiseItemUpdate] = useState(0)

  const [bluff, bluffUpdate] = useState(0)
  const [bluffItem, bluffItemUpdate] = useState(0)

  const [climb, climbUpdate] = useState(0)
  const [climbItem, climbItemUpdate] = useState(0)

  const [craft1, craft1Update] = useState(0)
  const [craft1Item, craft1ItemUpdate] = useState(0)

  const [craft2, craft2Update] = useState(0)
  const [craft2Item, craft2ItemUpdate] = useState(0)

  const [diplomacy, diplomacyUpdate] = useState(0)
  const [diplomacyItem, diplomacyItemUpdate] = useState(0)

  const [device, deviceUpdate] = useState(0)
  const [deviceItem, deviceItemUpdate] = useState(0)

  const [disguise, disguiseUpdate] = useState(0)
  const [disguiseItem, disguiseItemUpdate] = useState(0)

  const [escape, escapeUpdate] = useState(0)
  const [escapeItem, escapeItemUpdate] = useState(0)

  const [fly, flyUpdate] = useState(0)
  const [flyItem, flyItemUpdate] = useState(0)

  const [handle, handleUpdate] = useState(0)
  const [handleItem, handleItemUpdate] = useState(0)

  const [heal, healUpdate] = useState(0)
  const [healItem, healItemUpdate] = useState(0)

  const [intimidate, intimidateUpdate] = useState(0)
  const [intimidateItem, intimidateItemUpdate] = useState(0)

  const [karcana, karcanaUpdate] = useState(0)
  const [karcanaItem, karcanaItemUpdate] = useState(0)

  const [kdungeon, kdungeonUpdate] = useState(0)
  const [kdungeonItem, kdungeonItemUpdate] = useState(0)

  const [kengineer, kengineerUpdate] = useState(0)
  const [kengineerItem, kengineerItemUpdate] = useState(0)

  const [kgeography, kgeographyUpdate] = useState(0)
  const [kgeographyItem, kgeographyItemUpdate] = useState(0)

  const [khistory, khistoryUpdate] = useState(0)
  const [khistoryItem, khistoryItemUpdate] = useState(0)

  const [klocal, klocalUpdate] = useState(0)
  const [klocalItem, klocalItemUpdate] = useState(0)

  const [knature, knatureUpdate] = useState(0)
  const [knatureItem, knatureItemUpdate] = useState(0)

  const [knobility, knobilityUpdate] = useState(0)
  const [knobilityItem, knobilityItemUpdate] = useState(0)

  const [kplanes, kplanesUpdate] = useState(0)
  const [kplanesItem, kplanesItemUpdate] = useState(0)

  const [kreligion, kreligionUpdate] = useState(0)
  const [kreligionItem, kreligionItemUpdate] = useState(0)

  const [linguistics, linguisticsUpdate] = useState(0)
  const [linguisticsItem, linguisticsItemUpdate] = useState(0)

  const [perception, perceptionUpdate] = useState(0)
  const [perceptionItem, perceptionItemUpdate] = useState(0)

  const [perform1, perform1Update] = useState(0)
  const [perform1Item, perform1ItemUpdate] = useState(0)

  const [perform2, perform2Update] = useState(0)
  const [perform2Item, perform2ItemUpdate] = useState(0)

  const [profession1, profession1Update] = useState(0)
  const [profession1Item, profession1ItemUpdate] = useState(0)

  const [profession2, profession2Update] = useState(0)
  const [profession2Item, profession2ItemUpdate] = useState(0)

  const [ride, rideUpdate] = useState(0)
  const [rideItem,rideItemUpdate] = useState(0)

  const [motive, motiveUpdate] = useState(0)
  const [motiveItem, motiveItemUpdate] = useState(0)

  const [sleight, sleightUpdate] = useState(0)
  const [sleightItem, sleightItemUpdate] = useState(0)

  const [spellcraft, spellcraftUpdate] = useState(0)
  const [spellcraftItem, spellcraftItemUpdate] = useState(0)

  const [stealth, stealthUpdate] = useState(0)
  const [stealthItem, stealthItemUpdate] = useState(0)

  const [survival, survivalUpdate] = useState(0)
  const [survivalItem, survivalItemUpdate] = useState(0)

  const [swim, swimUpdate] = useState(0)
  const [swimItem, swimItemUpdate] = useState(0)

  const [usemagic, usemagicUpdate] = useState(0)
  const [usemagicItem, usemagicItemUpdate] = useState(0)

  const saveCharacter = (
    name,
    bg,
    bgBonus,
    bgSize,
    bgSizeUpdate,
    class1,
    class2,
    class3,
    class1Level,
    class2Level,
    class3Level,
    bab1,
    bab2,
    bab3,
    armor,
    shield,
    natural,
    deflection,
    spellresistance,
    fortitude1,
    fortitude2,
    fortitude3,
    fortitude1Item,
    reflex1,
    reflex2,
    reflex3,
    reflex1Item,
    will1,
    will2,
    will3,
    will1Item,
    str,
    strItem,
    dex,
    dexItem,
    con,
    conItem,
    int,
    intItem,
    wis,
    wisItem,
    cha,
    chaItem,
    init,
    speedArmor,
    acrobatics,
    acrobaticsItem,
    appraise,
    appraiseItem,
    bluff,
    bluffItem,
    climb,
    climbItem,
    craft1,
    craft1Item,
    craft2,
    craft2Item,
    diplomacy,
    diplomacyItem,
    device,
    deviceItem,
    disguise,
    disguiseItem,
    escape,
    escapeItem,
    fly,
    flyItem,
    handle,
    handleItem,
    heal,
    healItem,
    intimidate,
    intimidateItem,
    karcana,
    karcanaItem,
    kdungeon,
    kdungeonItem,
    kengineer,
    kengineerItem,
    kgeography,
    kgeographyItem,
    khistory,
    khistoryItem,
    klocal,
    klocalItem,
    knature,
    knatureItem,
    knobility,
    knobilityItem,
    kplanes,
    kplanesItem,
    kreligion,
    kreligionItem,
    linguistics,
    linguisticsItem,
    perception,
    perceptionItem,
    perform1,
    perform1Item,
    perform2,
    perform2Item,
    profession1,
    profession1Item,
    profession2,
    profession2Item,
    ride,
    rideItem,
    motive,
    motiveItem,
    sleight,
    sleightItem,
    spellcraft,
    spellcraftItem,
    stealth,
    stealthItem,
    survival,
    survivalItem,
    swim,
    swimItem,
    usemagic,
    usemagicItem
  ) => {

    if (!name) return;

    const data = JSON.stringify({
      name: {
        "name": name,
        "attributes": {
          "str": str,
          "dex": dex,
          "con": con,
          "int": int,
          "wis": wis,
          "cha": cha
        },
        "racial_background": bg,
        "racial_attribute": bgBonus,
        "class_1_name": class1,
        "class_1_level": class1Level,
        "class_1_bab": bab1,
        "class_1_saves": {
          "fortitude": fortitude1,
          "reflex": reflex1,
          "will": will1
        },
        "class_2_name": class2,
        "class_2_level": class2Level,
        "class_2_bab": bab2,
        "class_2_saves": {
          "fortitude": fortitude2,
          "reflex": reflex2,
          "will": will2
        },
        "class_3_name": class3,
        "class_3_level": class3Level,
        "class_3_bab": bab3,
        "class_3_saves": {
          "fortitude": fortitude3,
          "reflex": reflex3,
          "will": will3
        },
        "items": {
          "armor": armor,
          "armor_speed": speedArmor,
          "shield": shield,
          "deflection": deflection,
          "natural": natural,
          "attributes": {
            "str": strItem,
            "dex": dexItem,
            "con": conItem,
            "int": intItem,
            "wis": wisItem,
            "cha": chaItem
          },
          "fortitude": fortitude1Item,
          "reflex": reflex1Item,
          "will": will1Item,
          "skills": {
            "acrobaticsItem": acrobaticsItem,
            "appraiseItem": appraiseItem,
            "bluffItem": bluffItem,
            "climbItem": climbItem,
            "craft1Item": craft1Item,
            "craft2Item": craft2Item,
            "diplomacyItem": diplomacyItem,
            "deviceItem": deviceItem,
            "disguiseItem": disguiseItem,
            "escapeItem": escapeItem,
            "flyItem": flyItem,
            "handleItem": handleItem,
            "healItem": healItem,
            "intimidateItem": intimidateItem,
            "karcanaItem": karcanaItem,
            "kdungeonItem": kdungeonItem,
            "kengineerItem": kengineerItem,
            "kgeographyItem": kgeographyItem,
            "khistoryItem": khistoryItem,
            "klocalItem": klocalItem,
            "knatureItem": knatureItem,
            "knobilityItem": knobilityItem,
            "kplanesItem": kplanesItem,
            "kreligionItem": kreligionItem,
            "linguisticsItem": linguisticsItem,
            "perceptionItem": perceptionItem,
            "perform1Item": perform1Item,
            "perform2Item": perform2Item,
            "profession1Item": profession1Item,
            "profession2Item": profession2Item,
            "rideItem": rideItem,
            "motiveItem": motiveItem,
            "sleightItem": sleightItem,
            "spellcraftItem": spellcraftItem,
            "stealthItem": stealthItem,
            "survivalItem": survivalItem,
            "swimItem": swimItem,
            "usemagicItem": usemagicItem
          }
        },
        "spellresistance": spellresistance,
        "initiative_bonus": init,
        "skill_ranks": {
          "acrobatics": acrobatics,
          "appraise": appraise,
          "bluff": bluff,
          "climb": climb,
          "craft1": craft1,
          "craft2": craft2,
          "diplomacy": diplomacy,
          "device": device,
          "disguise": disguise,
          "escape": escape,
          "fly": fly,
          "handle": handle,
          "heal": heal,
          "intimidate": intimidate,
          "karcana": karcana,
          "kdungeon": kdungeon,
          "kengineer": kengineer,
          "kgeography": kgeography,
          "khistory": khistory,
          "klocal": klocal,
          "knature": knature,
          "knobility": knobility,
          "kplanes": kplanes,
          "kreligion": kreligion,
          "linguistics": linguistics,
          "perception": perception,
          "perform1": perform1,
          "perform2": perform2,
          "profession1": profession1,
          "profession2": profession2,
          "ride": ride,
          "motive": motive,
          "sleight": sleight,
          "spellcraft": spellcraft,
          "stealth": stealth,
          "survival": survival,
          "swim": swim,
          "usemagic": usemagic
        }
      }
    })

    const storage = window.localStorage
    storage.setItem(name, data)

    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      // let value = storage.getItem(key);
      characters.push(key);
    }

    listedCharacterUpdate(characters)

  }

  const loadCharacter = (name) => {

    if (!name) return;

    const storage = window.localStorage
    const character = storage.getItem(name)

    if (character) {
      let data = JSON.parse(character, null, -1).name

      createCharacterUpdate(data.name)
      bgUpdate(data.racial_background)
      bgBonusUpdate(data.racial_attribute)
      if (data.racial_attribute === "str") { strRaceUpdate(2) }
      if (data.racial_attribute === "dex") { dexRaceUpdate(2) }
      if (data.racial_attribute === "con") { conRaceUpdate(2) }
      if (data.racial_attribute === "int") { intRaceUpdate(2) }
      if (data.racial_attribute === "wis") { wisRaceUpdate(2) }
      if (data.racial_attribute === "cha") { chaRaceUpdate(2) }
      class1Update(data.class_1_name)
      class1LevelUpdate(data.class_1_level)
      class2Update(data.class_2_name)
      class2LevelUpdate(data.class_2_level)
      class3Update(data.class_3_name)
      class3LevelUpdate(data.class_3_level)
      bab1Update(data.class_1_bab)
      bab2Update(data.class_2_bab)
      bab3Update(data.class_3_bab)
      fortitude1Update(data.class_1_saves.fortitude)
      fortitude2Update(data.class_2_saves.fortitude)
      fortitude3Update(data.class_3_saves.fortitude)
      reflex1Update(data.class_1_saves.reflex)
      reflex2Update(data.class_2_saves.reflex)
      reflex3Update(data.class_3_saves.reflex)
      will1Update(data.class_1_saves.will)
      will2Update(data.class_2_saves.will)
      will3Update(data.class_3_saves.will)
      armorUpdate(data.items.armor)
      speedArmorUpdate(data.items.armor_speed)
      shieldUpdate(data.items.shield)
      naturalUpdate(data.items.natural)
      deflectionUpdate(data.items.deflection)
      spellresistanceUpdate(data.spellresistance)
      fortitude1ItemUpdate(data.items.fortitude)
      reflex1ItemUpdate(data.items.reflex)
      will1ItemUpdate(data.items.will)
      strUpdate(data.attributes.str)
      strItemUpdate(data.items.attributes.str)
      dexUpdate(data.attributes.dex)
      dexItemUpdate(data.items.attributes.dex)
      conUpdate(data.attributes.con)
      conItemUpdate(data.items.attributes.con)
      intUpdate(data.attributes.int)
      intItemUpdate(data.items.attributes.int)
      wisUpdate(data.attributes.wis)
      wisItemUpdate(data.items.attributes.wis)
      chaUpdate(data.attributes.cha)
      chaItemUpdate(data.items.attributes.cha)
      initUpdate(data.initiative_bonus)

      acrobaticsUpdate(data.skill_ranks.acrobatics)
      acrobaticsItemUpdate(data.items.skills.acrobaticsItem)
      appraiseUpdate(data.skill_ranks.appraise)
      appraiseItemUpdate(data.items.skills.appraiseItem)
      bluffUpdate(data.skill_ranks.bluff)
      bluffItemUpdate(data.items.skills.bluffItem)
      climbUpdate(data.skill_ranks.climb)
      climbItemUpdate(data.items.skills.climbItem)
      craft1Update(data.skill_ranks.craft1)
      craft1ItemUpdate(data.items.skills.craft1Item)
      craft2Update(data.skill_ranks.craft2)
      craft2ItemUpdate(data.items.skills.craft2Item)
      diplomacyUpdate(data.skill_ranks.diplomacy)
      diplomacyItemUpdate(data.items.skills.diplomacyItem)
      deviceUpdate(data.skill_ranks.device)
      deviceItemUpdate(data.items.skills.deviceItem)
      disguiseUpdate(data.skill_ranks.disguise)
      disguiseItemUpdate(data.items.skills.disguiseItem)
      escapeUpdate(data.skill_ranks.escape)
      escapeItemUpdate(data.items.skills.escapeItem)
      flyUpdate(data.skill_ranks.fly)
      flyItemUpdate(data.items.skills.flyItem)
      handleUpdate(data.skill_ranks.handle)
      handleItemUpdate(data.items.skills.handleItem)
      healUpdate(data.skill_ranks.heal)
      healItemUpdate(data.items.skills.healItem)
      intimidateUpdate(data.skill_ranks.intimidate)
      intimidateItemUpdate(data.items.skills.intimidateItem)
      karcanaUpdate(data.skill_ranks.karcana)
      karcanaItemUpdate(data.items.skills.karcanaItem)
      kdungeonUpdate(data.skill_ranks.kdungeon)
      kdungeonItemUpdate(data.items.skills.kdungeonItem)
      kengineerUpdate(data.skill_ranks.kengineer)
      kengineerItemUpdate(data.items.skills.kengineerItem)
      kgeographyUpdate(data.skill_ranks.kgeography)
      kgeographyItemUpdate(data.items.skills.kgeographyItem)
      khistoryUpdate(data.skill_ranks.khistory)
      khistoryItemUpdate(data.items.skills.khistoryItem)
      klocalUpdate(data.skill_ranks.klocal)
      klocalItemUpdate(data.items.skills.klocalItem)
      knatureUpdate(data.skill_ranks.knature)
      knatureItemUpdate(data.items.skills.knatureItem)
      knobilityUpdate(data.skill_ranks.knobility)
      knobilityItemUpdate(data.items.skills.knobilityItem)
      kplanesUpdate(data.skill_ranks.kplanes)
      kplanesItemUpdate(data.items.skills.kplanesItem)
      kreligionUpdate(data.skill_ranks.kreligion)
      kreligionItemUpdate(data.items.skills.kreligionItem)
      linguisticsUpdate(data.skill_ranks.linguistics)
      linguisticsItemUpdate(data.items.skills.linguisticsItem)
      perceptionUpdate(data.skill_ranks.perception)
      perceptionItemUpdate(data.items.skills.perceptionItem)
      perform1Update(data.skill_ranks.perform1)
      perform1ItemUpdate(data.items.skills.perform1Item)
      perform2Update(data.skill_ranks.perform2)
      perform2ItemUpdate(data.items.skills.perform2Item)
      profession1Update(data.skill_ranks.profession1)
      profession1ItemUpdate(data.items.skills.profession1Item)
      profession2Update(data.skill_ranks.profession2)
      profession2ItemUpdate(data.items.skills.profession2Item)
      rideUpdate(data.skill_ranks.ride)
      rideItemUpdate(data.items.skills.rideItem)
      motiveUpdate(data.skill_ranks.motive)
      motiveItemUpdate(data.items.skills.motiveItem)
      sleightUpdate(data.skill_ranks.sleight)
      sleightItemUpdate(data.items.skills.sleightItem)
      spellcraftUpdate(data.skill_ranks.spellcraft)
      spellcraftItemUpdate(data.items.skills.spellcraftItem)
      stealthUpdate(data.skill_ranks.stealth)
      stealthItemUpdate(data.items.skills.stealthItem)
      survivalUpdate(data.skill_ranks.survival)
      survivalItemUpdate(data.items.skills.survivalItem)
      swimUpdate(data.skill_ranks.swim)
      swimItemUpdate(data.items.skills.swimItem)
      usemagicUpdate(data.skill_ranks.usemagic)
      usemagicItemUpdate(data.items.skills.usemagicItem)
    }
    else {
      console.log("No saved character data found.")
    }

  }

  useEffect(() => {

    const storage = window.localStorage
    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      // let value = storage.getItem(key);
      characters.push(key);
    }

    listedCharacterUpdate(characters)

  }, [])

  const [flyout, flyoutUpdate] = useState("false")

  return(

    <Page
      flyout={flyout}
      flyoutUpdate={flyoutUpdate}
    >

      <Seo title="Character Builder" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Creator"
        size="small"
      />


      <Section type="both">

        <Wrapper wrapper="structure">

          <nav className="nav-utility" role="navigation">

            <button
              className="nav-utility-link"
              onClick={(e) => saveCharacter(
                createCharacter, bg, bgBonus, bgSize, bgSizeUpdate, class1, class2, class3, class1Level, class2Level, class3Level, bab1, bab2, bab3, armor, shield, natural, deflection, spellresistance,
                fortitude1, fortitude2, fortitude3, fortitude1Item, reflex1, reflex2, reflex3, reflex1Item, will1, will2, will3, will1Item, str, strItem, dex, dexItem, con, conItem, int, intItem, wis, wisItem, cha, chaItem,
                init, speedArmor, acrobatics, acrobaticsItem, appraise, appraiseItem, bluff, bluffItem, climb, climbItem, craft1, craft1Item, craft2, craft2Item, diplomacy, diplomacyItem, device, deviceItem, disguise, disguiseItem,
                escape, escapeItem, fly, flyItem, handle, handleItem, heal, healItem, intimidate, intimidateItem, karcana, karcanaItem, kdungeon, kdungeonItem, kengineer, kengineerItem, kgeography, kgeographyItem, khistory,
                khistoryItem, klocal, klocalItem, knature, knatureItem, knobility, knobilityItem, kplanes, kplanesItem, kreligion, kreligionItem,
                linguistics, linguisticsItem, perception, perceptionItem, perform1, perform1Item, perform2, perform2Item, profession1, profession1Item, profession2, profession2Item,
                ride, rideItem, motive, motiveItem, sleight, sleightItem, spellcraft, spellcraftItem, stealth, stealthItem, survival, survivalItem, swim, swimItem, usemagic, usemagicItem
              )}>
              <span className="material-icons" aria-hidden="true">cloud_upload</span> Save
            </button>

            <button
              className="nav-utility-link"
              aria-haspopup="true"
              aria-controls="character-storage"
              onClick={(e) => flyoutUpdate("true")}
            >
              <span className="material-icons" aria-hidden="true">settings</span> Manage
            </button>

          </nav>

          <Grid desktop="2" tablet="2" mobile="1">

            <div className="left">

              <div className="block-container name">

                <Input
                  inputType="text"
                  inputId="saveCharacter"
                  inputValue={createCharacter}
                  inputChange={(e) => createCharacterUpdate(e.target.value)}
                  inputLabel="Character Name"
                />

              </div>

              <Backgrounds
                bg={bg}
                bgUpdate={bgUpdate}
                bgBonus={bgBonus}
                bgBonusUpdate={bgBonusUpdate}
                bgSize={bgSize}
                bgSizeUpdate={bgSizeUpdate}
                strRace={strRace}
                strRaceUpdate={strRaceUpdate}
                dexRace={dexRace}
                dexRaceUpdate={dexRaceUpdate}
                conRace={conRace}
                conRaceUpdate={conRaceUpdate}
                intRace={intRace}
                intRaceUpdate={intRaceUpdate}
                wisRace={wisRace}
                wisRaceUpdate={wisRaceUpdate}
                chaRace={chaRace}
                chaRaceUpdate={chaRaceUpdate}
              />

              <Classes
                class1={class1}
                class1Update={class1Update}
                class1Level={class1Level}
                class1LevelUpdate={class1LevelUpdate}
                class2={class2}
                class2Update={class2Update}
                class2Level={class2Level}
                class2LevelUpdate={class2LevelUpdate}
                class3={class3}
                class3Update={class3Update}
                class3Level={class3Level}
                class3LevelUpdate={class3LevelUpdate}
                bab1={bab1}
                bab1Update={bab1Update}
                bab2={bab2}
                bab2Update={bab2Update}
                bab3={bab3}
                bab3Update={bab3Update}
                save1={save1}
                save1Update={save1Update}
                save2={save2}
                save2Update={save2Update}
                save3={save3}
                save3Update={save3Update}
                fortitude1Update={fortitude1Update}
                fortitude2Update={fortitude2Update}
                fortitude3Update={fortitude3Update}
                reflex1Update={reflex1Update}
                reflex2Update={reflex2Update}
                reflex3Update={reflex3Update}
                will1Update={will1Update}
                will2Update={will2Update}
                will3Update={will3Update}
              />

              <Attributes
                str={str}
                strUpdate={strUpdate}
                strRace={strRace}
                strRaceUpdate={strRaceUpdate}
                strItem={strItem}
                strItemUpdate={strItemUpdate}
                dex={dex}
                dexUpdate={dexUpdate}
                dexRace={dexRace}
                dexRaceUpdate={dexRaceUpdate}
                dexItem={dexItem}
                dexItemUpdate={dexItemUpdate}
                con={con}
                conUpdate={conUpdate}
                conRace={conRace}
                conRaceUpdate={conRaceUpdate}
                conItem={conItem}
                conItemUpdate={conItemUpdate}
                int={int}
                intUpdate={intUpdate}
                intRace={intRace}
                intRaceUpdate={intRaceUpdate}
                intItem={intItem}
                intItemUpdate={intItemUpdate}
                wis={wis}
                wisUpdate={wisUpdate}
                wisRace={wisRace}
                wisRaceUpdate={wisRaceUpdate}
                wisItem={wisItem}
                wisItemUpdate={wisItemUpdate}
                cha={cha}
                chaUpdate={chaUpdate}
                chaRace={chaRace}
                chaRaceUpdate={chaRaceUpdate}
                chaItem={chaItem}
                chaItemUpdate={chaItemUpdate}
              />

              <HitPoints
                class1={class1}
                class1Level={class1Level}
                class2={class2}
                class2Level={class2Level}
                class3={class3}
                class3Level={class3Level}
                con={modifier(con, conRace, conItem)}
              />

              <Initiative
                init={init}
                initUpdate={initUpdate}
                dex={modifier(dex, dexRace, dexItem)}
              />

              <Armor
                bgSize={bgSize}
                armorClass={armorClass}
                armorClassUpdate={armorClassUpdate}
                armor={armor}
                armorUpdate={armorUpdate}
                shield={shield}
                shieldUpdate={shieldUpdate}
                natural={natural}
                naturalUpdate={naturalUpdate}
                deflection={deflection}
                deflectionUpdate={deflectionUpdate}
                armorTotal={armorTotal}
                armorTotalUpdate={armorTotalUpdate}
                spellresistance={spellresistance}
                spellresistanceUpdate={spellresistanceUpdate}
                dex={modifier(dex, dexRace, dexItem)}
              />

              <Saves
                fortitude1={fortitude1}
                fortitude1Update={fortitude1Update}
                fortitude1Item={fortitude1Item}
                fortitude1ItemUpdate={fortitude1ItemUpdate}
                fortitude2={fortitude2}
                fortitude2Update={fortitude2Update}
                fortitude3={fortitude3}
                fortitude3Update={fortitude3Update}
                reflex1={reflex1}
                reflex1Update={reflex1Update}
                reflex1Item={reflex1Item}
                reflex1ItemUpdate={reflex1ItemUpdate}
                reflex2={reflex2}
                reflex2Update={reflex2Update}
                reflex3={reflex3}
                reflex3Update={reflex3Update}
                will1={will1}
                will1Update={will1Update}
                will1Item={will1Item}
                will1ItemUpdate={will1ItemUpdate}
                will2={will2}
                will2Update={will2Update}
                will3={will3}
                will3Update={will3Update}
                con={modifier(con, conRace, conItem)}
                dex={modifier(dex, dexRace, dexItem)}
                wis={modifier(wis, wisRace, wisItem)}
              />

              <Attacks
                bgSize={bgSize}
                bab1={bab1}
                bab2={bab2}
                bab3={bab3}
                str={modifier(str, strRace, strItem)}
                dex={modifier(dex, dexRace, dexItem)}
              />

              <Speed
                bg={bg}
                class1={class1}
                class1Level={class1Level}
                class2={class2}
                class2Level={class2Level}
                class3={class3}
                class3Level={class3Level}
                speed={speed}
                speedUpdate={speedUpdate}
                speedClass={speedClass}
                speedClassUpdate={speedClassUpdate}
                speedArmor={speedArmor}
                speedArmorUpdate={speedArmorUpdate}
                speedFly={speedFly}
                speedFlyUpdate={speedFlyUpdate}
                speedSwim={speedSwim}
                speedSwimUpdate={speedSwimUpdate}
                speedClimb={speedClimb}
                speedClimbUpdate={speedClimbUpdate}
                speedBurrow={speedBurrow}
                speedBurrowUpdate={speedBurrowUpdate}
              />

            </div>

            <div className="right">

              <Skills
                bgSize={bgSize}
                acrobatics={acrobatics}
                acrobaticsUpdate={acrobaticsUpdate}
                acrobaticsItem={acrobaticsItem}
                acrobaticsItemUpdate={acrobaticsItemUpdate}
                appraise={appraise}
                appraiseUpdate={appraiseUpdate}
                appraiseItem={appraiseItem}
                appraiseItemUpdate={appraiseItemUpdate}
                bluff={bluff}
                bluffUpdate={bluffUpdate}
                bluffItem={bluffItem}
                bluffItemUpdate={bluffItemUpdate}
                climb={climb}
                climbUpdate={climbUpdate}
                climbItem={climbItem}
                climbItemUpdate={climbItemUpdate}
                craft1={craft1}
                craft1Update={craft1Update}
                craft1Item={craft1Item}
                craft1ItemUpdate={craft1ItemUpdate}
                craft2={craft2}
                craft2Update={craft2Update}
                craft2Item={craft2Item}
                craft2ItemUpdate={craft2ItemUpdate}
                diplomacy={diplomacy}
                diplomacyUpdate={diplomacyUpdate}
                diplomacyItem={diplomacyItem}
                diplomacyItemUpdate={diplomacyItemUpdate}
                device={device}
                deviceUpdate={deviceUpdate}
                deviceItem={deviceItem}
                deviceItemUpdate={deviceItemUpdate}
                disguise={disguise}
                disguiseUpdate={disguiseUpdate}
                disguiseItem={disguiseItem}
                disguiseItemUpdate={disguiseItemUpdate}
                escape={escape}
                escapeUpdate={escapeUpdate}
                escapeItem={escapeItem}
                escapeItemUpdate={escapeItemUpdate}
                fly={fly}
                flyUpdate={flyUpdate}
                flyItem={flyItem}
                flyItemUpdate={flyItemUpdate}
                handle={handle}
                handleUpdate={handleUpdate}
                handleItem={handleItem}
                handleItemUpdate={handleItemUpdate}
                heal={heal}
                healUpdate={healUpdate}
                healItem={healItem}
                healItemUpdate={healItemUpdate}
                intimidate={intimidate}
                intimidateUpdate={intimidateUpdate}
                intimidateItem={intimidateItem}
                intimidateItemUpdate={intimidateItemUpdate}
                karcana={karcana}
                karcanaUpdate={karcanaUpdate}
                karcanaItem={karcanaItem}
                karcanaItemUpdate={karcanaItemUpdate}
                kdungeon={kdungeon}
                kdungeonUpdate={kdungeonUpdate}
                kdungeonItem={kdungeonItem}
                kdungeonItemUpdate={kdungeonItemUpdate}
                kengineer={kengineer}
                kengineerUpdate={kengineerUpdate}
                kengineerItem={kengineerItem}
                kengineerItemUpdate={kengineerItemUpdate}
                kgeography={kgeography}
                kgeographyUpdate={kgeographyUpdate}
                kgeographyItem={kgeographyItem}
                kgeographyItemUpdate={kgeographyItemUpdate}
                khistory={khistory}
                khistoryUpdate={khistoryUpdate}
                khistoryItem={khistoryItem}
                khistoryItemUpdate={khistoryItemUpdate}
                klocal={klocal}
                klocalUpdate={klocalUpdate}
                klocalItem={klocalItem}
                klocalItemUpdate={klocalItemUpdate}
                knature={knature}
                knatureUpdate={knatureUpdate}
                knatureItem={knatureItem}
                knatureItemUpdate={knatureItemUpdate}
                knobility={knobility}
                knobilityUpdate={knobilityUpdate}
                knobilityItem={knobilityItem}
                knobilityItemUpdate={knobilityItemUpdate}
                kplanes={kplanes}
                kplanesUpdate={kplanesUpdate}
                kplanesItem={kplanesItem}
                kplanesItemUpdate={kplanesItemUpdate}
                kreligion={kreligion}
                kreligionUpdate={kreligionUpdate}
                kreligionItem={kreligionItem}
                kreligionItemUpdate={kreligionItemUpdate}
                linguistics={linguistics}
                linguisticsUpdate={linguisticsUpdate}
                linguisticsItem={linguisticsItem}
                linguisticsItemUpdate={linguisticsItemUpdate}
                perception={perception}
                perceptionUpdate={perceptionUpdate}
                perceptionItem={perceptionItem}
                perceptionItemUpdate={perceptionItemUpdate}
                perform1={perform1}
                perform1Update={perform1Update}
                perform1Item={perform1Item}
                perform1ItemUpdate={perform1ItemUpdate}
                perform2={perform2}
                perform2Update={perform2Update}
                perform2Item={perform2Item}
                perform2ItemUpdate={perform2ItemUpdate}
                profession1={profession1}
                profession1Update={profession1Update}
                profession1Item={profession1Item}
                profession1ItemUpdate={profession1ItemUpdate}
                profession2={profession2}
                profession2Update={profession2Update}
                profession2Item={profession2Item}
                profession2ItemUpdate={profession2ItemUpdate}
                ride={ride}
                rideUpdate={rideUpdate}
                rideItem={rideItem}
                rideItemUpdate={rideItemUpdate}
                motive={motive}
                motiveUpdate={motiveUpdate}
                motiveItem={motiveItem}
                motiveItemUpdate={motiveItemUpdate}
                sleight={sleight}
                sleightUpdate={sleightUpdate}
                sleightItem={sleightItem}
                sleightItemUpdate={sleightItemUpdate}
                spellcraft={spellcraft}
                spellcraftUpdate={spellcraftUpdate}
                spellcraftItem={spellcraftItem}
                spellcraftItemUpdate={spellcraftItemUpdate}
                stealth={stealth}
                stealthUpdate={stealthUpdate}
                stealthItem={stealthItem}
                stealthItemUpdate={stealthItemUpdate}
                survival={survival}
                survivalUpdate={survivalUpdate}
                survivalItem={survivalItem}
                survivalItemUpdate={survivalItemUpdate}
                swim={swim}
                swimUpdate={swimUpdate}
                swimItem={swimItem}
                swimItemUpdate={swimItemUpdate}
                usemagic={usemagic}
                usemagicUpdate={usemagicUpdate}
                usemagicItem={usemagicItem}
                usemagicItemUpdate={usemagicItemUpdate}
                str={modifier(str, strRace, strItem)}
                dex={modifier(dex, dexRace, dexItem)}
                int={modifier(int, intRace, intItem)}
                wis={modifier(wis, wisRace, wisItem)}
                cha={modifier(cha, chaRace, chaItem)}
              />

            </div>

          </Grid>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="character-storage"
        flyoutType={"right"}
        flyoutOpen={flyout}
        flyout={flyout}
        flyoutUpdate={flyoutUpdate}
      >

        <Storage
          listedCharacter={listedCharacter}
          listedCharacterUpdate={listedCharacterUpdate}
          loadCharacter={loadCharacter}
        />

      </Flyout>

    </Page>

  )

}

export default Creator
