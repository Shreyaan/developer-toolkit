import fs from "fs";
import path from "path";
import tools from "../toolsData.json" with { type: "json" };

const readmePath = path.join(process.cwd(), "README.md");
const readmeTemplate = `
# The Modern Developer's Toolkit

This repository contains a curated list of powerful tools, services, and libraries for building modern applications.

The list is managed via the \`toolsData.json\` file in this repository. The live site and this README are automatically updated when changes are merged into the \`main\` branch.

**[➡️ View the Live Toolkit Website](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)**

---

## Tools Overview

| Tool & Link | Category | Description | Pairs With |
|-------------|----------|-------------|------------|
`;

let tableContent = "";
tools.forEach((tool) => {
  const toolLink = tool.link ? `[${tool.tool}](${tool.link})` : tool.tool;
  tableContent += `| ${toolLink} | \`${tool.category}\` | ${
    tool.description
  } | ${tool.pairedWith || "N/A"} |\n`;
});

const finalReadme = readmeTemplate + tableContent;

fs.writeFileSync(readmePath, finalReadme);

console.log(" README.md has been successfully generated!");
