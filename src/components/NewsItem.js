import React, {Component} from "react"
export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,url, author,date} = this.props
        return (
            <div>
                <div className="card card-el" style={{width: "18rem"}}>
                    {/* <img src={!imageUrl ? "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" :imageUrl} className="card-img-top" alt="..."/> */}
                    
                     <img src={imageUrl } className="card-img-top" alt="."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text ">{description}...</p>
                        <p className="card-text "><small className="text-muted">{author} <br/>{date}</small></p>
                        <a target="_blank" href={url}className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem