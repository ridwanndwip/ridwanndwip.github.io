import '../../style/main.scss'

const Title = (props) =>{
    return(
        <div class="title">
            <h2 className="title_number"> {props.number} </h2>
            <h4 className="title_name"> {props.title} </h4>
        </div>
    )
}

export default Title;