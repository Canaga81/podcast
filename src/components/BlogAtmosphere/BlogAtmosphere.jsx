import './BlogAtmosphere.css'
import Makers from '../Makers/Makers'
import InformationPerson from '../InformationPerson/InformationPerson'
import Read from '../Read/Read'

const BlogAtmosphere = (props) => {

    const { allblogitem } = props

    return (
        <>

            <section className='blogAtmosphere'>
                <div className="blogAtmosphere_container">
                    <div className="blogAtmosphere_text_cont">
                        <p className='blogAtmosphere_text_blue'>12 Sep 2021</p>
                        <h2 className='blogAtmosphere_title'>
                            Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars.
                        </h2>
                    </div>

                    <div className="blogAtmosphere_image">
                        <img className='blogAtmosphere_img' src={allblogitem.image} alt="" />
                    </div>
                </div>
            </section>

            <Makers />
            <InformationPerson />
            <Read />

        </>
    )
}

export default BlogAtmosphere;