import React from "react"

import Hero from "./header-components/hero"
import NavBar from "./header-components/navbar"

const Header = () => {
  const navHeight = "50px"

  return (
    <>
      <NavBar navHeight={navHeight} />
      <Hero navHeight={navHeight} />
    </>
  )
}

export default Header
