import React, { useState } from "react"

import Select from "../../components/forms/select"

import { modifier } from "./functions"

const BonusSpells = ({ ...props }) => {

  const [mod, modUpdate] = useState("None")
  const [sdc, sdcUpdate] = useState(0)

  const [spl1, spl1Update] = useState(0)
  const [spl2, spl2Update] = useState(0)
  const [spl3, spl3Update] = useState(0)
  const [spl4, spl4Update] = useState(0)
  const [spl5, spl5Update] = useState(0)
  const [spl6, spl6Update] = useState(0)
  const [spl7, spl7Update] = useState(0)
  const [spl8, spl8Update] = useState(0)
  const [spl9, spl9Update] = useState(0)

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

  const bonus = (v) => {

    let mod = 0

    if (v === "INT") mod = modInt
    else if (v === "WIS") mod = modWis
    else if (v === "CHA") mod = modCha
    else mod = 0

    switch (mod) {

      case 1:
        spl1Update(1)
      break;

      case 2:
        spl1Update(1)
        spl2Update(1)
      break;

      case 3:
        spl1Update(1)
        spl2Update(1)
        spl3Update(1)
      break;

      case 4:
        spl1Update(1)
        spl2Update(1)
        spl3Update(1)
        spl4Update(1)
      break;

      case 5:
        spl1Update(2)
        spl2Update(1)
        spl3Update(1)
        spl4Update(1)
        spl5Update(1)
      break;

      case 6:
        spl1Update(2)
        spl2Update(2)
        spl3Update(1)
        spl4Update(1)
        spl5Update(1)
        spl6Update(1)
      break;

      case 7:
        spl1Update(2)
        spl2Update(2)
        spl3Update(2)
        spl4Update(1)
        spl5Update(1)
        spl6Update(1)
        spl7Update(1)
      break;

      case 8:
        spl1Update(2)
        spl2Update(2)
        spl3Update(2)
        spl4Update(2)
        spl5Update(1)
        spl6Update(1)
        spl7Update(1)
        spl8Update(1)
      break;

      case 9:
        spl1Update(3)
        spl2Update(2)
        spl3Update(2)
        spl4Update(2)
        spl5Update(2)
        spl6Update(1)
        spl7Update(1)
        spl8Update(1)
        spl9Update(1)
      break;

      default:
        spl1Update(0)
        spl2Update(0)
        spl3Update(0)
        spl4Update(0)
        spl5Update(0)
        spl6Update(0)
        spl7Update(0)
        spl8Update(0)
        spl9Update(0)
      break;

    }

    sdcUpdate(mod)
    modUpdate(v)

  }

  return(

    <>

    <div className="block-container spells">
      <Select
        inputId="casterAttribute"
        inputValue={mod}
        inputChange={(e) => bonus(e.target.value)}
        inputLabel="Caster Attribute"
      >
        <option vaule="None">-</option>
        <option value="INT">Intelligence</option>
        <option value="WIS">Wisdom</option>
        <option value="CHA">Charisma</option>
      </Select>
      <div className="block modifier">
        {mod === "INT" ? modInt : ""}
        {mod === "WIS" ? modWis : ""}
        {mod === "CHA" ? modCha : ""}
      </div>
    </div>
    <div className="spell-bonuses-container">
      <div className="spell-bonus">
        <span className="spell-level">0th</span>
        <div className="spell-dc">DC{10 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">1st</span> +{spl1} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{11 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">2nd</span> +{spl2} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{12 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">3rd</span> +{spl3} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{13 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">4th</span> +{spl4} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{14 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">5th</span> +{spl5} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{15 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">6th</span> +{spl6} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{16 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">7th</span> +{spl7} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{17 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">8th</span> +{spl8} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{18 + sdc}</div>
      </div>
      <div className="spell-bonus">
        <span className="spell-level">9th</span> +{spl9} <span data-srt="true">bonus spells</span>
        <div className="spell-dc">DC{19 + sdc}</div>
      </div>
    </div>

    </>

  )

}

export default BonusSpells
