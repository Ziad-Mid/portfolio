import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaHackerrank,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiCodingame, SiLeetcode } from "react-icons/si";

const social = {
  copyright: `Copyright © ${new Date().getFullYear()} El Midaoui Ziad. All Rights Reserved.`,
  author: {
    name: "El Midaoui Ziad",
    accounts: [
      {
        url: "https://www.linkedin.com/in/el-midaoui-ziad/",
        name: "LinkedIn",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://github.com/Ziad-Mid",
        name: "Github",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "mailto:elmidaoui.ziad@gmail.com",
        name: "Mail",
        type: "red",
        icon: <FiMail />,
      },
      {
        url: "https://twitter.com/MidZiad",
        name: "Twitter",
        type: "twitter",
        icon: <FaTwitter />,
      },
      {
        url: "https://leetcode.com/ZiadMid/",
        name: "LeetCode",
        type: "orange",
        icon: <SiLeetcode />,
      },
      {
        url: "https://www.hackerrank.com/elmidaoui_ziad",
        name: "Hackerrank",
        type: "green",
        icon: <FaHackerrank />,
      },
      {
        url: "https://www.codingame.com/profile/f4465ee6a3a56d124eb46a90eb379d405100124",
        name: "Codingame",
        type: "yellow",
        icon: <SiCodingame />,
      },
      {
        url: "https://stackoverflow.com/users/16119204/ziad-mid",
        name: "Stack Overflow",
        type: "orange",
        icon: <FaStackOverflow />,
      },
    ],
  },
};

export default social;
