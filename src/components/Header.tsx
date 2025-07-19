export const HeaderWithCount = ({ toolsData }: { toolsData: Tool[] }) => (
  <header>
    <h1>The Modern Developer's Toolkit</h1>
    <p>
      A curated collection of powerful tools, services, and libraries for
      building modern applications. This list focuses on practical,
      battle-tested solutions that developers actually use in production.
    </p>
    <div className="header-links">
      <a
        href="https://github.com/Shreyaan/modern-developer-toolkit"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        ⭐ Star on GitHub
      </a>
      <span className="divider">•</span>
      <a
        href="https://github.com/Shreyaan/modern-developer-toolkit/blob/master/toolsData.json"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        ✍🏻 Contribute to the list
      </a>
      <span className="divider">•</span>
      <span className="tool-count">
        Discover {toolsData.length}+ carefully selected tools
      </span>
    </div>
  </header>
);
