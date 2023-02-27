import React, { useEffect } from "react"
import axios from "axios"
// import { publicIpv4 } from "public-ip"

import Seo from "../components/seo"
import Header from "./sections/header"
import Work from "./sections/work"
import Contact from "./sections/contact"

const Index = () => {
  useEffect(() => {
    logVisitor()
  }, [])

  return (
    <div className="global-wrapper" data-is-root-path={true}>
      <a rel="me" class="d-none" href="https://mstdn.social/@bsik">
        Mastodon
      </a>
      <Seo />
      <Header />
      <Work />
      <Contact />
    </div>
  )
}
export default Index

const logVisitor = async () => {
  await axios
    .post(`https://bsik.dev/api/visitorLog`, { clientIp: await getClientIp() })
    .catch(err => console.log(err))
}

const getClientIp = async () => {
  return await axios
    .get("https://api.ipify.org?format=json")
    .catch(err => console.log(err))
}
