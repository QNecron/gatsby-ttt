import React from "react"

import Wrapper from "../wrapper/wrapper"

// import Pathfinder from "../../images/logo-paizo-pathfinder-2e.png"

const Copyright = () => {

  return(

    <section className="section section-copyright" section-type="top">

      <Wrapper wrapper="content">

        <p className="paizo-copyright">
          This website uses trademarks and/or copyrights owned by Paizo Publishing,
          LLC, which are used under Paizo's Community Use Policy. We are expressly
          prohibited from charging you to use or access this content. This website
          is not published, endorsed, or specifically approved by Paizo Publishing.
          For more information about Paizo's Community Use Policy, please visit
          paizo.com/communityuse. For more information about Paizo Publishing and
          Paizo products, please visit paizo.com.
        </p>

      </Wrapper>

    </section>

  )

}

export default Copyright
