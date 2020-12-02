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
            <h3 className="wg-box-content-title">Laper.In</h3>
            <p className="wg-box-content-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rem vel, illo architecto nobis nostrum.</p>
            <a href="RIdwan.html"> View </a>
          </div>
      </div>
    )
}

export default function RecentWorks(){
    return(
        <div className="rw" id="portofolio" data-aos="zoom-in">
            <h1 data-aos="zoom-out-up" > My Recent Works </h1>
            <h5 data-aos="zoom-out-up"> Here are a few web projects and design ui/ux I've worked. Want to see more? Email me. </h5>
            <div className="rw__card">
                <CardRw img={img}/>
                <CardRw img={img2}/>
                <CardRw img={img3}/>
                <CardRw img={img4}/>
                <CardRw img={img5}/>
                <CardRw img={img5}/>
            </div>
        </div>
    )
}