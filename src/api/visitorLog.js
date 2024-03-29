const axios = require("axios")
const { nanoid } = require("nanoid")

export default async function visitorLogPOST(req, res) {
  const url = `${process.env.BSIK_SERVER}/visitor-log`

  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.CLIENT_TOKEN}`,
  }

  const data = {
    uid: nanoid(16),
    ip_addr: req.body?.clientIp?.data?.ip,
    timestamp: new Date(),
    origin: req.headers.host,
  }

  if (typeof data.ip_addr === 'undefined' ) {
    return;
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
