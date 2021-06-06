export const PostCard = ({title, body, id, cover}) =>{
// export const PostCard = (props) =>{
    return (
        <div className="post">
            <img src={cover} title={title}></img>
            <div  className="post-content">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}