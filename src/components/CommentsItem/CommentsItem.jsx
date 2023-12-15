import React from 'react'
import './CommentsItem.css'

const CommentsItem = (props) => {

    return (
        <div className='commentsItem'>

            <div className="commentsItem_top">
                <div className="commentsItem_top-head">
                    <div className="comments_image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="comments_name_icons">
                        <div className="comments_name">
                            <h4>{props.name}</h4>
                        </div>

                        <div className="comments_icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" fill="none">
                                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FF7602" />
                                <path d="M34 0L36.2451 6.90983H43.5106L37.6327 11.1803L39.8779 18.0902L34 13.8197L28.1221 18.0902L30.3673 11.1803L24.4894 6.90983H31.7549L34 0Z" fill="#FF7602" />
                                <path d="M58 0L60.2451 6.90983H67.5106L61.6327 11.1803L63.8779 18.0902L58 13.8197L52.1221 18.0902L54.3673 11.1803L48.4894 6.90983H55.7549L58 0Z" fill="#FF7602" />
                                <path d="M82 0L84.2451 6.90983H91.5106L85.6327 11.1803L87.8779 18.0902L82 13.8197L76.1221 18.0902L78.3673 11.1803L72.4894 6.90983H79.7549L82 0Z" fill="#FF7602" />
                                <path d="M106 0L108.245 6.90983H115.511L109.633 11.1803L111.878 18.0902L106 13.8197L100.122 18.0902L102.367 11.1803L96.4894 6.90983H103.755L106 0Z" fill="#FF7602" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="commentsItem_top-body">
                    <div className="commentsItem_desc">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>

            <div className="commentsItem_bottom">
                <div className="commentsItem_bottom-line"></div>
            </div>

        </div>
    )
    
}

export default CommentsItem