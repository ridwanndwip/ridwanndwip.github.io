import './About.scss'

export default function About() {
    return(
        <div className="about" id="about">
            <span className="about__title">
                Hi, I'm Ridwan. Nice to meet you
            </span>
            <p className="about__caption">
            I am a Front End Developer with 1 year experience in web design or ux design. I graduated in informatics engineering in 2019 at the Indraprasta PGRI university.
I think front end is my passion because I love coding, web design and problem solving.
In making web design I often use ReactJs as a javascript framework and tailwindcss as a CSS framework, because ReactJs is a reusable component and the easy custom style in tailwindcss makes me complete projects quickly.
I love making open source projects. It helps me learn many new things and add to my portfolio. besides that I also have the ability to work independently and in teams, but still comply with the work rules that have been determined.
            </p>
            <div className="about__getcv">
                <button>
                <a href="#"> Get My Cv </a>
                </button>
            </div>   
        </div>
    )
}