import React, { useState } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import ThemeContext from "../../context/theme"

import Wrapper from "../../components/wrapper/wrapper"
import Flyout from "../../components/flyout/flyout"
import Input from "../../components/forms/input"

import { diceroll } from "../../components/builder/functions"

import Logo from "../../images/logo-tabletop-tools.png"

const Header = ({ ...props }) => {

  const [flyout, flyoutUpdate] = useState("false")
  const [roll, rollUpdate] = useState("false")
  const [dice, diceUpdate] = useState(0)
  const [count, countUpdate] = useState(1)

  return (

    <ThemeContext.Consumer>
      {theme => (
        <div className="header-container">

          <header className="header" role="banner">

            <Wrapper wrapper="structure">

              <button
                className="header-menu"
                aria-haspopup="true"
                aria-controls="nav-primary-container"
                onClick={(e) => flyoutUpdate("true")}
              >
                <span className="material-icons" aria-hidden="true">menu</span> Menu
              </button>

              {/*
              <button
                className="header-menu"
                aria-haspopup="true"
                aria-controls="roll-dice-container"
                onClick={(e) => rollUpdate("true")}
              >
               Dice Bag
              </button>
              */}

              <Link className="header-logo" to="/">
                <span data-srt="true">{props.title}</span>
                <img className="logo" src={Logo} alt=" " aria-hidden="true" />
              </Link>

            </Wrapper>

          </header>

          <Flyout
            flyoutId="nav-primary-container"
            flyoutType={"left"}
            flyoutOpen={flyout}
            flyout={flyout}
            flyoutUpdate={flyoutUpdate}
          >

            <nav className="nav-primary" role="navigation">
              <Link className="nav-primary-link" to="/">Home</Link>
              <Link className="nav-primary-link" to="/creator/">Creator</Link>
              <Link className="nav-primary-link" to="/spells/">Spells</Link>
              <Link className="nav-primary-link" to="/feats/">Feats</Link>
              <Link className="nav-primary-link" to="/bestiary/">Bestiary</Link>
              <Link className="nav-primary-link" to="/initiative/">Initiative</Link>
            </nav>

            <div className="theme-title">Themes</div>

            <div className="theme-container">

              <button
                className="theme-link blue"
                theme-active={theme.color === "blue" ? "true" : "false" }
                onClick={(e) => theme.colorUpdate("blue")}
              >
                <span data-srt="true">Blue</span>
              </button>

              <button
                className="theme-link green"
                theme-active={theme.color === "green" ? "true" : "false" }
                onClick={(e) => theme.colorUpdate("green")}
              >
                <span data-srt="true">Green</span>
              </button>

              <button
                className="theme-link orange"
                theme-active={theme.color === "orange" ? "true" : "false" }
                onClick={(e) => theme.colorUpdate("orange")}
              >
                <span data-srt="true">Orange</span>
              </button>

              <button
                className="theme-link purple"
                theme-active={theme.color === "purple" ? "true" : "false" }
                onClick={(e) => theme.colorUpdate("purple")}
              >
                <span data-srt="true">Purple</span>
              </button>

              <button
                className="theme-link red"
                theme-active={theme.color === "red" ? "true" : "false" }
                onClick={(e) => theme.colorUpdate("red")}
              >
                <span data-srt="true">Red</span>
              </button>

            </div>

          </Flyout>

          <Flyout
            flyoutId="roll-dice-container"
            flyoutType={"left"}
            flyoutOpen={roll}
            flyout={roll}
            flyoutUpdate={rollUpdate}
          >

            <div className="dice-list">
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d2", count))}>d2</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d3", count))}>d3</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d4", count))}>d4</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d6", count))}>d6</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d8", count))}>d8</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d10", count))}>d10</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d12", count))}>d12</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d20", count))}>d20</button>
              <button className="btn btn-secondary dice" onClick={(e) => diceUpdate(diceroll("d100", count))}>d100</button>
            </div>

            <div className="dice-amount-result">

              <Input
                inputType="number"
                inputId="dicecount"
                inputValue={count}
                inputChange={(e) => countUpdate(e.target.value)}
                inputLabel="Numer of Dice"
              />

              <div className="dice-result">
                <span data-srt="true">Roll:</span> {dice}
              </div>

            </div>

          </Flyout>

        </div>
      )}
    </ThemeContext.Consumer>

  )

}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
