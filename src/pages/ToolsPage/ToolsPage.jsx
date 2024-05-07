import "./ToolsPage.css";

function ToolsPage() {
  return (
    <>
      <p>Tools</p>
      <h1>What do I use?</h1>
      <div className="tools">
        <div className="backend">
          <h2>Software Development</h2>
          <p>
            Proficient in Java, SQL, and noSQL databases.
            <br></br>
            <br></br> API development using Express and React.js. <br></br>
            <br></br>Skilled in Node.js, Git, and Git Bash for version control.
          </p>
        </div>
        <div className="frontend">
          <h2>Frontend Dev React</h2>
          <p>
            Expertise in HTML, CSS, and JavaScript enables me to craft intuitive
            user interfaces. <br></br>
            <br></br>With React.js, I create dynamic components for enhanced
            engagement. <br></br>
            <br></br>Skilled in developing hybrid mobile apps and cross-platform
            solutions
          </p>
        </div>
      </div>
    </>
  );
}
export default ToolsPage;
