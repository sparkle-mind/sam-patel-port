import "./project.css";

export default function Project() {
  return (
    <>
     <section id="projects" class="projects-section">
    <div class="container">
        <div class="section-title"><h2 data-aos="fade-right"
     data-aos-anchor-placement="">Our Projects</h2></div>
    </div>

        <div class="project">
            <h3>Project Name 1</h3>
            <p class="description">This project focuses on creating a responsive and interactive website for e-commerce. The main goal is to enhance user experience through modern design and fast loading times.</p>
        </div>
        <div class="project">
            <h3>Project Name 2</h3>
            <p class="description">This project is about developing a mobile application that helps users track their daily fitness goals. It integrates with various health APIs and provides personalized recommendations.</p>
        </div>
        <div class="project">
            <h3>Project Name 3</h3>
            <p class="description">A dynamic portfolio website designed for a freelance developer, showcasing their work, skills, and client testimonials, built with HTML, CSS, and JavaScript.</p>
        </div>
</section>

    </>
  );
}
