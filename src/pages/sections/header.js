import React from "react"

import Hero from "../../components/hero"
import NavBar from "../../components/navbar"

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
