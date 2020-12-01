import { useEffect, useState } from 'react'
import './Skills.scss'

const images = [
    {id : 1, imageName : 'bootstrap.png', tag : 'Programming', title : 'Bootstrap', level : 'Intermediate'},
    {id : 2, imageName : 'css3.png', tag : 'Programming', title : 'Css3', level : 'Advanced' },
    {id : 3, imageName : 'git.png', tag : 'Programming', title : 'Git', level : 'Intermediate'},
    {id : 4, imageName : 'html.png', tag : 'Programming', title : 'Html', level : 'Advanced'},
    {id : 5, imageName : 'js.png', tag : 'Programming', title : 'Javascript', level : 'Intermediate'},
    {id : 6, imageName : 'reactjs.png', tag : 'Programming', title : 'ReactJS', level : 'Intermediate'},
    {id : 7, imageName : 'sass.png', tag : 'Programming', title : 'Sass', level : 'Intermediate'},
    {id : 8, imageName : 'tailwindcss.png', tag : 'Programming', title : 'Tailwind', level : 'Intermediate'},
    {id : 9, imageName : 'figma.png', tag : 'Design', title : 'Figma', level : 'Advanced'},
    {id : 10, imageName : 'photoshop.png', tag : 'Design', title : 'Photoshop', level : 'Intermediate'},
    {id : 11, imageName : 'language.png', tag : 'Other', title : 'Indonesia', level : 'Intermediate'},
    {id : 12, imageName : 'language.png', tag : 'Other', title : 'English', level : 'Intermediate'},
    {id : 13, imageName : 'hardware.png', tag : 'Other', title : 'Hardware', level : 'Intermediate'},
    {id : 14, imageName : 'hardware.png', tag : 'Other', title : 'Software', level : 'Intermediate'},
    {id : 15, imageName : 'office.png', tag : 'Other', title : 'Ms.Office', level : 'Advanced'},
]


const TagButton = ({name, handleSetTag, tagActive}) => {
    return(
        <button className={`tag ${ tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>{name}</button>
    )
};

export default function Skills(){
    const [tag, setTag] = useState('Programming');
    const [ filteredImages, setFilteredImages] = useState([]);

    useEffect( () => {
        // tag === 'all' ? setFilteredImages(images) :
    setFilteredImages(images.filter(image => image.tag === tag))
    }, [tag])

    return(
        <div className="Skills">
            <div className="title">
                <h1> Skills </h1>
                <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ad repellat modi amet voluptatem illo praesentium voluptatum consequuntur hic numquam.</h5>
            </div>
            <div className="button">
                <TagButton name="Programming" handleSetTag={setTag} tagActive={ tag === 'Programming' ? true : false}/>
                <TagButton name="Design" handleSetTag={setTag} tagActive={ tag === 'Design' ? true : false}/>
                <TagButton name="Other" handleSetTag={setTag} tagActive={ tag === 'Other' ? true : false}/>
            </div>
            <div className="content">
                {filteredImages.map(image => 
                <div key={image.id} className="card">
                    <img src={`/images/${image.imageName}`} alt="" className="card__img"/>
                    <h3 className="card__title">{image.title}</h3>
                    <h5 className="card__level">{image.level}</h5> 
                </div>)}
            </div>
        </div>
    )
}