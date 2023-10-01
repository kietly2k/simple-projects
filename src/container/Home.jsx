import projects from "../constants/projects";
import ProjectItem from "../components/ProjectItem";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-3xl p-10">Simple Projects</h1>
      <div>
        {projects.map((p) => (
          <ProjectItem
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            url={p.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
