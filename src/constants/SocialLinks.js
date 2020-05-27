import React from "react"
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "www.linkedin.com/in/silviu-petrea",
    image: <FaLinkedin className="youtube-icon" />,
  },
  {
    id: Math.random(),
    url: "https://twitter.com/larry_sly",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
  {
    id: Math.random(),
    url: "https://github.com/petreasil",
    image: <FaGithubSquare className="github-icon icon" />,
  },
]
