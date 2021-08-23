import React from "react"

import Input from "../../components/forms/input"

import Data from "../../../json/skills_v1.json"

import { total } from "./functions"

const Skills = ({ ...props }) => {

  const combine = (name) => {
    return eval("{"+name+"}") // eslint-disable-line no-eval
  }

  // let class1skills = props.class1Level * total(props.skills1, props.intModifier)
  // let class2skills = props.class2Level * total(props.skills2, props.intModifier)
  // let class3skills = props.class3Level * total(props.skills3, props.intModifier)

  return(

    <>

    {/*
    <div className="block-container skill-count">
      {total(class1skills, class2skills, class3skills)}
      {total(props.acrobatics, props.appraise, props.bluff)}
    </div>
    */}

    {Data.map((s, index) => {

      return(
        <div className="block-container skill" key={index}>
          <h2 className="block-defined heading-6">{s.name}</h2>
          <div className="block">{total(combine(s.modifier), combine(s.base), combine(s.item))}</div>
          <div className="block">{combine(s.modifier)}</div>
          <Input
            inputType="number"
            inputId={"SkillRank" + index}
            inputValue={combine(s.base) ? combine(s.base) : 0}
            inputChange={(e) => combine(s.baseUpdate)(e.target.value)} // {props.SKILL_NAME(e.target.value)}
            inputSRT="true"
            inputLabel={s.name + " Skill Ranks"}
            inputHelper="Ranks"
          />
          <Input
            inputType="number"
            inputId={"SkillItem" + index}
            inputValue={combine(s.item) ? combine(s.item) : 0}
            inputChange={(e) => combine(s.itemUpdate)(e.target.value)}
            inputSRT="true"
            inputLabel={s.name + " Skill Bonus"}
            inputHelper="Bonus"
          />
        </div>
      )

    })}

    </>

  )

}

export default Skills
