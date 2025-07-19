export const ToolCard = ({ tool }: { tool: Tool }) => (
  <div className="tool-card">
    <div>
      <h2>{tool.tool}</h2>
      <p className="description">{tool.description}</p>
    </div>
    <div className="card-footer">
      <div className="tags">
        {tool.category.split(",").map((cat: string) => (
          <span key={cat.trim()} className="tag category">
            {cat.trim()}
          </span>
        ))}
        {tool.pairedWith && <span className="tag pair">{tool.pairedWith}</span>}
      </div>
      {tool.link && (
        <a
          href={tool.link}
          className="link-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      )}
    </div>
  </div>
);
