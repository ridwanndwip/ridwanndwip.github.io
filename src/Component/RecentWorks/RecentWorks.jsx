import './RecentWork.scss'
import img from '../../Assets/img/Rw1.png'

const CardRw = ()=> {
    return(
        <div className="CardRw">
          <div className="CardRw__Overlay"></div>
          <img src={img} alt="" className="CardRw__img"/>
          <div className="CardRw__detail fadeIn-bottom">
            <h3 className="wg-box-content-title">Laper.In</h3>
            <p className="wg-box-content-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rem vel, illo architecto nobis nostrum.</p>
            <a href="RIdwan.html"> View >></a>
          </div>
      </div>
    )
}

export default function RecentWorks(){
    return(
        <div className="rw" id="portofolio">
            <h3 className="rw__title"> My Recent Works </h3>
            <span className="rw__ket"> Here are a few web projects and design ui/ux I've worked. Want to see more? Email me. </span>
            <div className="rw__card">
                <CardRw/>
                <CardRw/>
                <CardRw/>
                <CardRw/>
                <CardRw/>
                <CardRw/>
            </div>
        </div>
    )
}