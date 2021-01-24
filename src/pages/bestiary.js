import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Select from "../components/forms/select"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"

import Background from "../../json/backgrounds.json"
import Books from "../../json/books_bestiary_v1.json"
import Challenge from "../../json/challenge_rating.json"
import Data from "../../json/bestiary_v2.json"

import ImgDesktop from "../images/hero/hero-01.jpg"
import ImgMobile from "../images/hero/hero-01-mobile.jpg"

function Bestiary() {

  const [book, setBook] = useState("Bestiary")
  const [creature, setCreature] = useState("all")
  const [challenge, setChallenge] = useState("all")
  // console.log(Data);
  const [filter, filterUpdate] = useState("false")

  function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return(

    <Page>

      <SEO title="Home" />

      <Hero
        title="Bestiary"
        desktop={ImgDesktop}
        mobile={ImgMobile}
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <nav className="nav-utility" role="navigation">

            <button
              className="nav-utility-link"
              onClick={(e) => filterUpdate("true")}
            >
              <span className="material-icons" aria-hidden="true">sort</span> Filters
            </button>

          </nav>

          <table className="table">

            <tbody className="table-info">

            <tr className="table-row table-heading">
              <td className="table-col large">Name</td>
              <td className="table-col large">Type</td>
              <td className="table-col medium">Size</td>
              <td className="table-col small">CR</td>
              <td className="table-col small">XP</td>
            </tr>

            {Data.sort((a, b) => a.Name > b.Name ? 1 : -1).map((d, index) => {

              const url = "./" + d.Name.replace(/\s/g , "-").toLowerCase() + "/"

              if (d.Source === book) {

                if (d.Type !== creature && creature !== "all") return null

                if (d.CR.toString() !== challenge && challenge !== "all") return null

                return(
                  <tr className="table-row" key={index}>
                    <td className="table-col bestiary-name">
                      <Link className="" to={url}>{d.LinkText ? d.LinkText : d.Name}</Link>
                    </td>
                    <td className="table-col bestiary-type">{capitalize(d.Type)}</td>
                    <td className="table-col bestiary-size">{d.Size}</td>
                    <td className="table-col bestiary-cr">{d.CR}</td>
                    <td className="table-col bestiary-xp">{d.XP}</td>
                  </tr>
                )

              }
              else { return null }

            })}

            </tbody>

          </table>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="filters"
        flyoutType={"right"}
        flyoutOpen={filter}
        flyout={filter}
        flyoutUpdate={filterUpdate}
      >

        <Select
          inputId="bestiary-books"
          inputValue={book}
          inputChange={(e) => setBook(e.target.value)}
          inputLabel="Books"
        >
          {Books.map((name, index) =>
            <option value={name} key={index}>{name}</option>
          )}
        </Select>

        <Select
          inputId="bestiary-creature"
          inputValue={creature}
          inputChange={(e) => setCreature(e.target.value)}
          inputLabel="Creature Type"
        >
          {Background.map((name, index) =>
            <option value={name} key={index}>{capitalize(name)}</option>
          )}
        </Select>

        <Select
          inputId="bestiary-challenge"
          inputValue={challenge}
          inputChange={(e) => setChallenge(e.target.value)}
          inputLabel="Challenge Rating"
        >
          {Challenge.map((name, index) =>
            <option value={name} key={index}>{capitalize(name)}</option>
          )}
        </Select>

      </Flyout>

    </Page>

  )

}

export default Bestiary
