const axios = require("axios")
const crypto = require("crypto")

export default async function visitorLogPOST(req, res) {
  const url = "http://68.183.113.10:3000/visitor-log"

  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.CLIENT_TOKEN}`,
  }

  const data = {
    uid: crypto.randomBytes(16).toString("hex"),
    ip_addr: "gatsby-test-axios",
    timestamp: new Date(),
  }

  try {
    const result = await axios
      .post(url, data, {
        headers,
      })
      .then(postRes => {
        console.log("Axios POST: " + postRes.status)
        return res.status(postRes.status).json({
          status: postRes.status,
          message: postRes.statusText,
        })
      })
  } catch (error) {
    res.status(500).send(error)
  }
}
