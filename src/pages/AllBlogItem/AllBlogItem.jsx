import React from 'react'
import blogCardsData from '../../images/BlogCardsData'
import { useParams } from 'react-router-dom'
import BlogAtmosphere from '../../components/BlogAtmosphere/BlogAtmosphere';

const AllBlogItem = () => {

    const { allblogitemId } = useParams();
    const allblogitem = blogCardsData.find((e) => e.id === Number(allblogitemId))

    return (
        <div>
            <BlogAtmosphere allblogitem={allblogitem} />
        </div>
    )
}

export default AllBlogItem