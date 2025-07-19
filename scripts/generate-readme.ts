import fs from "fs";
import path from "path";
import tools from "../toolsData.json" with { type: "json" };

const readmePath = path.join(process.cwd(), "README.md");

// Get statistics
const totalTools = tools.length;
const categories = new Set<string>();
tools.forEach((tool) => {
  tool.category.split(",").forEach((cat) => {
    categories.add(cat.trim());
  });
});
const uniqueCategories = categories.size;

// Group tools by category for better organization
const toolsByCategory = new Map<string, typeof tools>();
tools.forEach((tool) => {
  tool.category.split(",").forEach((cat) => {
    const trimmedCat = cat.trim();
    if (!toolsByCategory.has(trimmedCat)) {
      toolsByCategory.set(trimmedCat, []);
    }
    toolsByCategory.get(trimmedCat)!.push(tool);
  });
});

// Sort categories alphabetically
const sortedCategories = Array.from(toolsByCategory.keys()).sort();

// Keep it simple for URL length constraints
const toolsString = tools.map((tool) => tool.tool + ": " + tool.category).join(", ");

const queryParams = encodeURIComponent(`You are an expert Tech Lead and software architect specializing in modern development tools and infrastructure. You have access to a curated list of ${totalTools} carefully selected tools across ${uniqueCategories} categories for building modern, scalable applications.

List is called Modern Developer Toolkit and is at https://github.com/Shreyaan/modern-developer-toolkit 

## Available Tools:
${toolsString}

## Your Expertise:
- Tool selection and architecture recommendations
- Modern development best practices
- Cost-effective and scalable solutions
- Implementation strategies and trade-offs

## Guidelines:
1. Ask clarifying questions about specific needs and constraints
2. Recommend tools based on use case, scale, and budget
3. Explain trade-offs between different approaches
4. Suggest complementary tool combinations
5. Provide practical implementation advice

Please help me with the following question: `);

const readmeTemplate = `# The Modern Developer's Toolkit 🚀

> **A curated collection of powerful tools, services, and libraries for building modern applications.**

This repository contains a curated list of powerful tools, services, and libraries for building modern applications.

The list is managed via the \`toolsData.json\` file in this repository. The live site and this README are automatically updated when changes are merged into the \`master\` branch.

**Goal is to have a list of tools that are useful for building modern applications. Please feel free to contribute to the list as I know for the fact that I have missed out on a lot of tools.**

I have tried to categorize the tools as best as I can.

**Looking forward to your contributions! 😄🚀**

## 🎯 Quick Start

**[➡️ View the Live Toolkit Website](https://modern-developer-toolkit.vercel.app/)**

## 🤖 AI-Powered Tool Recommendations

**Get personalized tool recommendations powered by ChatGPT!** 

We've created a custom prompt that includes our entire curated toolkit. This allows you to:

- **Ask for specific tool recommendations** based on your project needs
- **Get architecture advice** using our vetted tool collection
- **Compare alternatives** with expert guidance
- **Discover complementary tools** you might have missed

### How to Use

**[🚀 Launch ChatGPT with Toolkit](https://chatgpt.com/?prompt=${queryParams})**

**[🚀 Launch Claude with Toolkit](https://claude.ai/new?q=${queryParams})**


Simply click the link above to open ChatGPT, Claude with our complete toolkit pre-loaded. Then ask questions like:
- *"I'm building a React app with authentication, what tools should I use?"*
- *"What's the best monitoring solution for a Node.js microservice?"*
- *"I need a database for a real-time chat app, what do you recommend?"*

The AI will have access to all ${totalTools} tools across ${uniqueCategories} categories and can provide expert recommendations tailored to your specific use case.



## 📊 Statistics

- **Total Tools:** ${totalTools}
- **Categories:** ${uniqueCategories}
- **Last Updated:** ${new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}



## 🛠️ Tools by Category

`;

let categoryContent = "";
sortedCategories.forEach((category) => {
  const categoryTools = toolsByCategory.get(category)!;
  categoryContent += `### ${category} (${categoryTools.length})\n\n`;
  
  categoryTools.forEach((tool) => {
    const toolLink = tool.link ? `[${tool.tool}](${tool.link})` : tool.tool;
    const pairedWith = tool.pairedWith ? `**Pairs with:** ${tool.pairedWith}` : "";
    categoryContent += `- **${toolLink}** - ${tool.description}${pairedWith ? ` ${pairedWith}` : ''}\n`;
  });
  
  categoryContent += "\n";
});

const tableTemplate = `
## 📋 Complete Tools Table

| Tool & Link | Category | Description | Pairs With |
|-------------|----------|-------------|------------|
`;

let tableContent = "";
tools.forEach((tool) => {
  const toolLink = tool.link ? `[${tool.tool}](${tool.link})` : tool.tool;
  tableContent += `| ${toolLink} | \`${tool.category}\` | ${tool.description} | ${tool.pairedWith || "N/A"} |\n`;
});

const contributionSection = `
## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Tool

1. **Fork** this repository
2. **Add** your tool to the \`toolsData.json\` file with the following structure:
   \`\`\`json
   {
     "tool": "Tool Name",
     "category": "Category1, Category2",
     "description": "Brief description of what the tool does and why it's useful",
     "pairedWith": "Optional: What it pairs well with",
     "link": "https://tool-website.com"
   }
   \`\`\`
3. **Submit** a pull request

### Guidelines

- **Quality over quantity**: Only add tools you've personally used or thoroughly researched
- **Clear descriptions**: Write descriptions that explain the value proposition, not just features
- **Proper categorization**: Use existing categories when possible, or suggest new ones
- **Valid links**: Ensure all links are working and point to the official tool website

### Categories

Current categories include:
${Array.from(categories).sort().map(cat => `- \`${cat}\``).join('\n')}

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

*Generated automatically from \`toolsData.json\` - Last updated: ${new Date().toISOString()}*
`;

const finalReadme = readmeTemplate + categoryContent + tableTemplate + tableContent + contributionSection;

fs.writeFileSync(readmePath, finalReadme);

console.log("✅ README.md has been successfully generated!");
console.log(`📊 Generated README with ${totalTools} tools across ${uniqueCategories} categories`);
