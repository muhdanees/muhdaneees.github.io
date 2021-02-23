function Skills() {
  return (
    <div className="content">
        <div className="container flex-cont">
            <div className="sec-skills">
                <div className="about-me">
                  <img src='/about-bg.jpg' alt="" />
                </div>
            </div>
            <div className="sec-divs">
              <p>to know me</p>
              <p>The great route to have the best thought to have a bundle of an idea... to express technical knowledge.</p>
              <h2>TECHNICAL SKILLS</h2>
              <ul className="tech-skills">
                <li>
                  <strong>HTML5</strong>
                  <p>First, slice to the psd and convert in html5, mobile first responsive, cross-browser compatible with pixel-perfect.</p>
                </li>
                <li>
                  <strong>CSS2/CSS3</strong>
                  <p>Using new features like grid layout, multi-columns, flexible boxes, shadows, gradients, animations and transitions.</p>
                </li>
                  <strong>BEM</strong>
                  <p>BEM (Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development</p>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills;