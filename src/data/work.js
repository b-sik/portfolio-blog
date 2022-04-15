const workItemData = workItem => {
  switch (workItem) {
    case "work-item-0":
      return {
        title: "custom WordPress themes",
        description:
          "A WordPress theme is what turns your data and content into the website that people see. I can create a fully mobile-friendly and responsive custom theme for your small business, personal project, band, or whatever you do.",
        items: {
          breathtobody: {
            name: "Breath To Body",
            description:
              "Rehabbed a bloated WordPress site with a custom theme and easy-to-update Content Management System.",
            buttons: [["visit site", "http://breathtobody.com"]],
          },
          westferry: {
            name: "West Ferry",
            description:
              "Created a central hub for this band to show off their work, run a blog, and archive their shows and albums.",
            buttons: [["visit site", "https://westferrymusic.com"]],
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
                "http://breathtobody.comhttps://wordpress.org/plugins/dynamic-block-content/",
              ],
              ["github", "https://github.com/bszyk/dynamic-block-content"],
            ],
          },
          advacc: {
            name: "Advanced Access for LearnDash",
            description:
              "A plugin for LearnDash which adds functionality to control access to courses, including creating a digital WooCommerce access pass.",
            buttons: [["github", "http://github.com/bszyk/adv-acc-ld-wc"]],
          },
          sso: {
            name: "Custom SSO for WordPress",
            description:
              "A custom SSO for WordPress utilizing JWT Auth tokens.",
            buttons: [["github", "https://wordpress.org/plugins/bszyk-sso"]],
          },
        },
      }
    case "work-item-2":
      return {
        title: "other work",
        description:
          "Not limited to WordPress, I'm skilled in React and happy to take up whatever challenge approaches.",
        items: {
          dynamiccontent: {
            name: "Take Your Meds Bot",
            description:
              "ADHD-inspired Twitter bot powered by AWS Lambda functions and written with Python.",
            buttons: [
              ["twitter", "https://twitter.com/takeyourmedsbot"],
              ["github", "https://github.com/bszyk/twitter-bots"],
            ],
          },
          advacc: {
            name: "Zip WP",
            description:
              "Bash script delivered via Composer package to prepare a zip archive for a WordPress plugin.",
            buttons: [["github", "http://github.com/bszyk/bszyk-zip-wp"]],
          },
          sso: {
            name: "This Website",
            description:
              "Fully static custom site made with Gatsby, React, and Bootstrap.",
            buttons: [["github", "https://github.com/bszyk/portfolio-blog"]],
          },
        },
      }
    default:
      break
  }
}

export default workItemData
