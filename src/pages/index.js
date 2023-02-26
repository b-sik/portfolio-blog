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
  const res = await axios
    .get(`.netlify/functions/visitorLog-background`)
    .catch(err => console.log(err))

  console.log(res)
}

// const getClientIp = async () => {
//   await publicIpv4({
//     fallbackUrls: ["https://ifconfig.co/ip"],
//     timeout: 3000,
//   })
// }
