import React from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

const Speed = ({ ...props }) => {

  const movement = (v, r) => {
    let mov = 0

    if (v === "Heavy" || v === "Medium") {
      if (r === "Halfling" || r === "Gnome") mov = 5
      else if (r === "Dwarf") mov = 0
      else mov = 10
    }
    else {
      mov = 0
    }

    props.characterUpdate({
      ...props.character,
      ac: {
        ...props.character.ac,
        armor_type: v
      },
      speed: {
        ...props.character.speed,
        penalty: mov
      }
    })

  }

  return(

    <>

    <div className="block-container speed">
      <h2 className="block-defined heading-5">Speed</h2>
      <div className="block">{parseInt(props.character.speed.movement) - parseInt(props.character.speed.penalty)}ft
      </div>
      <Select
        inputId="speedArmor"
        inputValue={props.character.ac.armor_type}
        inputChange={(e) => movement(e.target.value, props.character.race)}
        inputLabel="Armor"
      >
        <option value="Cloth">Cloth</option>
        <option value="Light">Light</option>
        <option value="Medium">Medium</option>
        <option value="Heavy">Heavy</option>
      </Select>
    </div>

    <div className="block-container speed">
      <Input
        inputType="number"
        inputId="speedFly"
        inputDisabled={props.dm === "enabled" ? false : true}
        inputValue={props.character.speed.fly}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          speed: {
            ...props.character.speed,
            fly: e.target.value
          }
        })}
        inputStep={5}
        inputSRT="true"
        inputLabel="Fly Movement Speed"
        inputHelper="Fly"
      />
      <Input
        inputType="number"
        inputId="speedSwim"
        inputDisabled={props.dm === "enabled" ? false : true}
        inputValue={props.character.speed.swim}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          speed: {
            ...props.character.speed,
            swim: e.target.value
          }
        })}
        inputStep={5}
        inputSRT="true"
        inputLabel="Swim Movement Speed"
        inputHelper="Swim"
      />
      <Input
        inputType="number"
        inputId="speedClimb"
        inputDisabled={props.dm === "enabled" ? false : true}
        inputValue={props.character.speed.climb}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          speed: {
            ...props.character.speed,
            climb: e.target.value
          }
        })}
        inputStep={5}
        inputSRT="true"
        inputLabel="Climb Movement Speed"
        inputHelper="Climb"
      />
      <Input
        inputType="number"
        inputId="speedBurrow"
        inputDisabled={props.dm === "enabled" ? false : true}
        inputValue={props.character.speed.burrow}
        inputChange={(e) => props.characterUpdate({
          ...props.character,
          speed: {
            ...props.character.speed,
            burrow: e.target.value
          }
        })}
        inputStep={5}
        inputSRT="true"
        inputLabel="Burrow Movement Speed"
        inputHelper="Burrow"
      />
    </div>

    </>

  )

}

export default Speed
