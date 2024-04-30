import React from 'react'
import BlogBox from "../../../components/BlogBox"
import Button from "../../../components/Button"

const Blog = (props) => {
    return (
        <>
            <div style={styles.maindiv} id="blog">
                <h1 id={`${props.title}`} style={{ fontSize: "40px" }} className='text-xl text-center font-serif mb-4 text-gray-700 font-semibold'>Our Blogs</h1>

                <div className='w-full h-1 mb-8 flex justify-center '>
                    <div className='w-10 h-1 bg-red-700 mb-20 text-center rounded-lg'>
                    </div>
                </div>

                <p className='mb-20 text-center text-gray-400 text-m'>These all are services, which is provided by me. if you want help contact me. </p>

                <div style={styles.seconddiv} className='mb-20'>
                    <BlogBox date="April 14 , 2000" feild="web design" title="RENOVATING NATIONAL GALLERY" description="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    <BlogBox date="APRIL 14, 2018" feild="WEB DESIGN" title="WORDPRESS FOR A BEGINNER" description="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    <BlogBox date="APRIL 14, 2018" feild="WEB DESIGN" title="WORDPRESS FOR A " description="Separated they live in Bookmarksgrove right at the coast ." />
                    <BlogBox date="APRIL 14, 2018" feild="WEB DESIGN" title="WORDPRESS FOR A BEGINNER" description="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                </div>
            </div>
        </>
    )
}

const styles = {
    maindiv: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        padding: "200px 20px",
    },
    seconddiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
    },
}

export default Blog