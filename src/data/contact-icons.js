import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubAlt,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const contactIcons = size => ({
  email: {
    label: "email",
    icon: <FontAwesomeIcon icon={faEnvelope} size={size} />,
    url: 'mailto:info@bsik.dev',
    color: 'danger',
    border: ['bottom', 'end']
  },
  github: {
    label: "github",
    icon: <FontAwesomeIcon icon={faGithubAlt} size={size} />,
    url: 'https://github.com/bszyk',
    color: 'secondary',
    border: ['bottom', 'start']
  },
  twitter: {
    label: "twitter",
    icon: <FontAwesomeIcon icon={faTwitter} size={size} />,
    url: 'https://twitter.com/b_szyk',
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
