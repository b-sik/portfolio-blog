import * as React from "react"

import Seo from "../components/seo"

import Header from "./sections/header"
import Work from "./sections/work"
import Contact from "./sections/contact"

const Index = () => {
  return (
    <div className="global-wrapper" data-is-root-path={true}>
      <a rel="me" class="d-none" href="https://mstdn.social/@bsik">Mastodon</a>
      <Seo />
      <Header />
      <Work />
      <Contact />
    </div>
  )
}
export default Index
