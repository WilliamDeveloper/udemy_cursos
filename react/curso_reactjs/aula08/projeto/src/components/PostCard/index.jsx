import P from 'prop-types';
import './styles.css'

export const PostCard = ({title, body, id, cover}) =>{
// export const PostCard = (props) =>{
    return (
        <div className="post">
            <img src={cover} title={title}></img>
            <div  className="post-content">
                <h2>{title}-{id}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

PostCard.propTypes={
    title:P.string.isRequired,
    cover:P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired
}