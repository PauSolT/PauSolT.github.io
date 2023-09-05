import './Project.css';

function Project({title, genre, description, urlImage}){
    return (
        <div className='project'>
                <h3>{title}</h3>
                <img src={urlImage} alt={title} className='responsiveImage'></img>
                <h4>{genre}</h4>
                <p>{description}</p>
            </div>
    );
}

export default Project;