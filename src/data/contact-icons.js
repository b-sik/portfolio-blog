import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubAlt,
  faLinkedin,
  faMastodon
} from "@fortawesome/free-brands-svg-icons"

const contactIcons = size => ({
  email: {
    label: "email",
    icon: <FontAwesomeIcon icon={faEnvelope} size={size} />,
    url: 'mailto:b.siklinski@gmail.com',
    color: 'danger',
    border: ['bottom', 'end']
  },
  github: {
    label: "github",
    icon: <FontAwesomeIcon icon={faGithubAlt} size={size} />,
    url: 'https://github.com/b-sik',
    color: 'secondary',
    border: ['bottom', 'start']
  },
  empty: {
    label: "mastodon",
    icon: <FontAwesomeIcon icon={faMastodon} size={size} />,
    url: 'https://masto.ai/@bsik',
    color: 'info',
    border: ['top', 'end']
  },
  linkedin: {
    label: "linkedin",
    icon: <FontAwesomeIcon icon={faLinkedin} size={size} />,
    url: 'https://www.linkedin.com/in/brian-siklinski/',
    color: 'primary',
    border: ['top', 'start']
  },
})

export default contactIcons
