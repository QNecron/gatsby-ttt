import React from "react"

import { deleteCharacter } from "../../components/builder/functions"

function Storage({ ...props }) {

  const saved = [].concat(props.listedCharacter)

  const updateCharacter = (item) => {
    deleteCharacter(item)

    const storage = window.localStorage
    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      // let value = storage.getItem(key);
      characters.push(key);
    }

    props.listedCharacterUpdate(characters)

  }

  return (

    <>

    {props.listedCharacter[0] && (
      <ul className="character-storage-container">

        {saved.map(item => (

          <li className="character-storage-item" key={item}>

            <button
              className="btn-icon btn-secondary character-storage-load"
              data-save={item}
              onClick={(e) => props.loadCharacter(item)}
            >
              <span className="material-icons" aria-hidden="true">cloud_download</span>
              <span data-srt="true">Load saved character {item}</span>
            </button>

            <button
              className="btn-icon btn-secondary character-storage-remove"
              data-save={item}
              onClick={(e) => updateCharacter(item)}
            >
              <span className="material-icons" aria-hidden="true">highlight_off</span>
              <span data-srt="true">Remove saved character {item}</span>
            </button>

            <div className="character-storage-name">{item}</div>

          </li>

        ))}

      </ul>
    )}

    {!props.listedCharacter[0] && (
      <div className="character-storage-empty">
        <p className="character-storage-name">
          Looks like you don't have any saved characters.
        </p>
      </div>
    )}

    </>

  )

}

export default Storage
