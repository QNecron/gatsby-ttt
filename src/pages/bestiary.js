import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
// import Grid from "../components/grid/grid"
import Hero from "../components/hero/hero"
import Tabs from "../components/tabs/tabs"

import Books from "../../json/books_bestiary_v1.json"
import Data from "../../json/bestiary_v2.json"

import ImgDesktop from "../images/hero/hero-01.jpg"
import ImgMobile from "../images/hero/hero-01-mobile.jpg"

function Bestiary() {

  const [book, setBook] = useState('Bestiary');

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

          <Tabs
            data={Books}
            state={book}
            click={setBook}
          />

          <table className="table">

            <tbody className="table-info">

            <tr className="table-row table-heading">
              <td className="table-col large">Name</td>
              <td className="table-col large">Type</td>
              <td className="table-col small">CR</td>
              <td className="table-col medium">XP</td>
            </tr>

            {Data.sort((a, b) => a.Name > b.Name ? 1 : -1).map((d, index) => {

              const url = "./" + d.Name.replace(/\s/g , "-").toLowerCase() + "/"

              if (d.Source === book) {
                return(
                  <tr className="table-row" key={index}>
                    <td className="table-col feat-name">
                      <Link className="" to={url}>{d.LinkText ? d.LinkText : d.Name}</Link>
                    </td>
                    <td className="table-col feat-">{d.Type}</td>
                    <td className="table-col feat-">{d.CR}</td>
                    <td className="table-col feat-">{d.XP}</td>
                  </tr>
                )
              }
              else { return null }

            })}

            </tbody>

          </table>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Bestiary
