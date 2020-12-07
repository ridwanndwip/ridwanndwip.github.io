import './RecentWork.scss'
import img from '../../Assets/img/Laper.in.png'
import img2 from '../../Assets/img/Rivaldi-outdoor.png'
import img3 from '../../Assets/img/indra-music.png'
import img4 from '../../Assets/img/Mockup1.png'
import img5 from '../../Assets/img/Untitled.png'


const CardRw = (props)=> {
    return(
        <div className="CardRw">
          <div className="CardRw__Overlay"></div>
          <img src={props.img} alt="" className="CardRw__img"/>
          <div className="CardRw__detail fadeIn-bottom">
            <p> {props.title} </p>
            <a href={props.href} target="_blank" rel="noreferrer"> View </a>
          </div>
      </div>
    )
}

export default function RecentWorks(){
    let handleLink = {
        link1  : "https://ridwanndwip.github.io/Laper.in/",
        link2  : "https://ridwanndwip.github.io/indra-music/",
        link3  : "https://dribbble.com/ridwandwip",
    };
    return(
        <div className="rw" id="portofolio" data-aos="zoom-in">
            <h1 data-aos="zoom-out-up" > My Recent Works </h1>
            <h5 data-aos="zoom-out-up"> Here are a few web design projects and design ui I've worked. Want to see more? Email me. </h5>
            <div className="rw__card">
                <CardRw img={img} title="Web design created for Dicoding course submissions. Made with HTML, CSS, JS and is responsive on all devices" href={handleLink.link1} />
                <CardRw img={img2} title=" Web design for my friend's portfolio with outdoor tool sales theme.Built with Html, Css and Bootstrap for Css frameworks" href={handleLink.link1}/>
                <CardRw img={img3} title="Web design for my friend's portfolio with musical instrument sales theme.Built with html and Css." href={handleLink.link2}/>
                <CardRw img={img4} title="mockup design about the plant store. created with figma" href={handleLink.link3}/>
                <CardRw img={img5}/>
                <CardRw img={img5}/>
            </div>
        </div>
    )
}