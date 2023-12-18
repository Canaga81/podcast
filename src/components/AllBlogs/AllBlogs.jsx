import React from 'react'
import './AllBlogs.css'
import blogCardsData from '../../images/BlogCardsData'
import BlogCardItem from '../BlogCardItem/BlogCardItem'

const AllBlogs = () => {
    return (
        <section className='allBlogs'>
            <div className="allBlogs_container">
                <h2 className='all_blogs_head_title'>All Blogs</h2>

                <div className="all_blogs_cards">
                    {
                        blogCardsData.map((item, idx) => {
                            return (
                                <BlogCardItem key={idx} id={item.id} image={item.image} title={item.title} desc={item.desc} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AllBlogs