export const modifier = (a, b, c) => {
  const add = parseInt(a) + parseInt(b) + parseInt(c)
  const total = Math.floor((add - 10) / 2)
  return total
}

export const total = (a, b, c) => {
  let one = parseInt(a) ? parseInt(a) : 0
  let two = parseInt(b) ? parseInt(b) : 0
  let three = parseInt(c) ? parseInt(c) : 0
  const add = one + two + three
  return add
}

export const diceroll = (dice, count) => {
  let die = 0
  let roll = 0
  let total = 0

  if (count === 0) return 0

  if (dice === "d100") { die = 99 }
  else if (dice === "d20") { die = 19 }
  else if (dice === "d12") { die = 11 }
  else if (dice === "d10") { die = 9 }
  else if (dice === "d8") { die = 7 }
  else if (dice === "d6") { die = 5 }
  else if (dice === "d4") { die = 3 }
  else if (dice === "d3") { die = 2 }
  else if (dice === "d2") { die = 1 }
  else {
    console.log("No dice defined")
  }

  while (count >=1) {
    roll = 1 + Math.floor(Math.random() * Math.floor(die))
    total += roll
    console.log("Roll: " + count + " Rolled: " + roll)
    count--
  }

  return total

}

//
export const deleteCharacter = (name) => {

  if (!name) return;

  const storage = window.localStorage
  storage.removeItem(name)
}
