import axios from "axios"
import crypto from "crypto"
import { publicIpv4 } from "public-ip"

export default async function visitorLogPOST(req, res) {
  const url = "http://68.183.113.10:3000/visitor-log"

  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.CLIENT_TOKEN}`,
  }

  const clientIp = await getClientIp()

  const data = {
    uid: crypto.randomBytes(16).toString("hex"),
    ip_addr: clientIp,
    timestamp: new Date(),
  }

  try {
    const result = await axios
      .post(url, data, {
        headers,
        timeout: 3000,
      })
      .then(postRes => {
        console.log("Axios POST: " + postRes.status)
        return res.status(postRes.status).json({
          status: postRes.status,
          message: postRes.statusText,
          data,
        })
      })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getClientIp = async () =>
  await publicIpv4({
    fallbackUrls: ["https://ifconfig.co/ip"],
    timeout: 3000,
  })
