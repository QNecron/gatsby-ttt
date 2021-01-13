import React from "react"

import Input from "../../components/forms/input"
import Select from "../../components/forms/select"

const Speed = ({ ...props }) => {

  const movement = (base, armor, bg, class1, level1) => {
    let move = 0
    let bonus = 0

    switch (bg) {

      case "Dwarf":
      case "Gnome":
      case "Halfling":
        move = base - 10
      break;

      default:
        move = base
      break;

    }

    switch (armor) {

      case "Heavy":
      case "Medium":
        if (!bg === "Dwarf") bonus -= 10
        else if (bg === "Gnome" || bg === "Halfling") bonus -= 5
      break;

      default:
        // none
      break;

    }

    // barbarian movement
    if (class1 === "Barbarian" && level1 >= 1 && armor !== "Heavy") bonus += 10

    // monk movement
    if (armor === "Cloth" && class1 === "Monk" && level1 >= 18) bonus += 60
    else if (armor === "Cloth" && class1 === "Monk" && level1 >= 15) bonus += 50
    else if (armor === "Cloth" && class1 === "Monk" && level1 >= 12) bonus += 40
    else if (armor === "Cloth" && class1 === "Monk" && level1 >= 9) bonus += 30
    else if (armor === "Cloth" && class1 === "Monk" && level1 >= 6) bonus += 20
    else if (armor === "Cloth" && class1 === "Monk" && level1 >= 3) bonus += 10

    return move + bonus

  }

  return(

    <>

    <div className="block-container speed">
      <h2 className="block-defined heading-5">Speed</h2>
      <div className="block">{movement(props.speed, props.speedArmor, props.bg, props.class1, props.class1Level)}ft</div>
      <Select
        inputId="speedArmor"
        inputValue={props.speedArmor}
        inputChange={(e) => props.speedArmorUpdate(e.target.value)}
        inputLabel="Armor"
      >
        <option value="Cloth">None</option>
        <option value="Light">Light</option>
        <option value="Medium">Medium</option>
        <option value="Heavy">Heavy</option>
      </Select>
    </div>

    <div className="block-container speed">
      <Input
        inputType="number"
        inputId="speedFly"
        inputValue={props.speedFly}
        inputChange={(e) => props.speedFlyUpdate(e.target.value)}
        inputStep={5}
        inputSRT="true"
        inputLabel="Fly Movement Speed"
        inputHelper="Fly"
      />
      <Input
        inputType="number"
        inputId="speedSwim"
        inputValue={props.speedSwim}
        inputChange={(e) => props.speedSwimUpdate(e.target.value)}
        inputStep={5}
        inputSRT="true"
        inputLabel="Swim Movement Speed"
        inputHelper="Swim"
      />
      <Input
        inputType="number"
        inputId="speedClimb"
        inputValue={props.speedClimb}
        inputChange={(e) => props.speedClimbUpdate(e.target.value)}
        inputStep={5}
        inputSRT="true"
        inputLabel="Climb Movement Speed"
        inputHelper="Climb"
      />
      <Input
        inputType="number"
        inputId="speedBurrow"
        inputValue={props.speedBurrow}
        inputChange={(e) => props.speedBurrowUpdate(e.target.value)}
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
