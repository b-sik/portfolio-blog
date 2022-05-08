import React from "react"

import contactIcons from "../data/contact-icons"

const IconList = ({ type, size }) => {
  const styles = type => {
    switch (type) {
      case "fixed":
        return {
          ulStyle: {
            listStyle: "none",
            top: "50%",
            right: "0",
            transform: "translate(-50%, -50%)",
          },
          ulClass: "d-none d-md-flex flex-column position-fixed align-items-center",
          liClass: "mt-3",
        }
      case "footer":
        return {
          ulStyle: {
            listStyle: "none",
          },
          ulClass: "w-100 d-flex align-items-center justify-content-between p-0 m-0",
          liClass: "",
        }
      default:
        break
    }
  }

  const { ulStyle, ulClass, liClass } = styles(type)

  return (
    <ul style={ulStyle} className={ulClass}>
      {Object.values(contactIcons(size)).map((data, i) => {
        const { icon, url, color } = data

        return (
          <li className={i === 0 ? "" : liClass}>
            <a className={`text-${color}`} href={url} rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default IconList
