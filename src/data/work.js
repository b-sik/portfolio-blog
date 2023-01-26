const workItemData = workItem => {
  switch (workItem) {
    case "work-item-0":
      return {
        title: "custom WordPress themes",
        description:
          "A WordPress theme is what turns your data and content into the website that people see. I can create a fully mobile-friendly and responsive custom theme for your small business, personal project, band, or whatever you do.",
        items: {
          wheeliebabes: {
            name: "Wheelie Babes",
            description:
              "Created a blog that uses GPX location data and OpenStreetMaps to keep track of a cross-country bicycle trip.",
            buttons: [["visit site", "http://bsik.site/wheelie-babes"]],
          },
          westferry: {
            name: "West Ferry",
            description:
              "Created a central hub for this band to show off their work, run a blog, and archive their shows and albums.",
            buttons: [["visit site", "https://westferrymusic.com"]],
          },
          breathtobody: {
            name: "Breath To Body",
            description:
              "Rehabbed a bloated WordPress site with a custom theme and easy-to-update Content Management System.",
            buttons: [["visit site", "http://breathtobody.com"]],
          },
        },
      }
    case "work-item-1":
      return {
        title: "custom WordPress plugins",
        description:
          "A WordPress plugin changes the function of WordPress itself and/or other plugins. Need to do something special but can't figure out how? I can build it for you.",
        items: {
          dynamiccontent: {
            name: "Dynamic Content",
            description:
              "A plugin for the WordPress editor which allows core blocks to become dynamic, updating automatically on the frontend if a database change is detected.",
            buttons: [
              [
                "wordpress",
                "https://wordpress.org/plugins/dynamic-block-content/",
              ],
              ["github", "https://github.com/b-sik/dynamic-block-content"],
            ],
          },
          advacc: {
            name: "Advanced Access for LearnDash",
            description:
              "A plugin for LearnDash which adds functionality to control access to courses, including creating a digital WooCommerce access pass.",
            buttons: [["github", "http://github.com/b-sik/adv-acc-ld-wc"]],
          },
          sso: {
            name: "Custom SSO for WordPress",
            description:
              "A custom SSO for WordPress utilizing JWT Auth tokens.",
            buttons: [["github", "https://github.com/b-sik/bszyk-sso"]],
          },
        },
      }
    case "work-item-2":
      return {
        title: "other work",
        description:
          "Not limited to WordPress, I'm skilled in React and happy to take up whatever challenge approaches.",
        items: {
          zipwp: {
            name: "Zip WP",
            description:
              "Bash script delivered via Composer package to prepare a zip archive for a WordPress plugin.",
            buttons: [["github", "http://github.com/b-sik/bszyk-zip-wp"]],
          },
          bsikdev: {
            name: "This Website",
            description:
              "From-scratch portfolio made with Gatsby, React, and Bootstrap.",
            buttons: [["github", "https://github.com/b-sik/portfolio-blog"]],
          },
        },
      }
    default:
      break
  }
}

export default workItemData
