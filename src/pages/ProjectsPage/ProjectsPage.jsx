import "./ProjectsPage.css";

function ProjectsPage() {

    const navigateToURL = (url) => {
        window.open(url, '_blank');
    }

  return (
    <>
        <p className="project-section-start">Projects</p>
      <div className="projects">
        <div className="project1">
          <h2 className="project-title" onClick={() => navigateToURL("https://maximmft.github.io/Les-recettes-Wild/recipe_wrap.html")}>Les Recettes Wilds</h2>
          <p>1st project // March 2024</p>
        </div>
        <div className="project2">
          <h2 className="project-title" onClick={() => navigateToURL("https://brainbox-five.vercel.app/")}>Brain Box</h2>
          <p>2nd project // April 2024</p>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
