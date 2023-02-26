import axios from "axios"

exports.handler = async function triggerVisitorLog(event, context) {
  const request = await axios
    .post("https://bsik.dev/api/visitorLog", {
      clientIp: event.headers["x-nf-client-connection-ip"],
    })
    .catch(function (error) {
      console.log(error)
    })

  console.log(request.status)
}
