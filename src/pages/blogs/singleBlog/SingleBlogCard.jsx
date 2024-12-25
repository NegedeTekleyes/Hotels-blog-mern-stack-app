import React from 'react';
import { formatDate } from '../../../utilis/formateDate';
import EditorJSHTML from "editorjs-html"


const editorJSHTML = EditorJSHTML()
const SingleBlogCard = ({ blog }) => {
    const {
        title,
        description,
        content,
        coverImg,
        category,
        rating,
        author,
        createdAt,
    } = blog || {};  // Fallback to empty object if blog is undefined
    const htmlContent = editorJSHTML.parse(content).join('')

    // Provide fallback values for missing data
    const formattedDate = createdAt ? formatDate({ isoDate: createdAt }) : 'Date not available';
    const displayedTitle = title || 'No title available';
    const displayedDescription = description || 'No description available';

    return (
        <div className='bg-white p-8'>
            {/* blog header */}
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{displayedTitle}</h1>
                {/* TODO: */}
                <p className='mb-6'>{formatDate(createdAt)} by <span className='text-blue-400 cursor-pointer'> Negede.T&Tewolde.T</span></p>
            </div>
            <div>
                {/* blog content */}
                <img src={coverImg} alt="cover Image" className='w-full md:h-[520px] bg-cover' />
            </div>
            {/* Blog details */}
            <div className='mt-8 space-y-4'>
                <div dangerouslySetInnerHTML={{__html: htmlContent}} className='space-y-3 editorjsdiv'/>           
                {/* <p>{displayedDescription}</p> */}

                <div>
                    <span className='text-lg font-medium'>Rating:</span>
                    <span>{rating} (based on 2,370 reviews)</span>
                </div>
                

            </div>
        </div>
    );
};

export default SingleBlogCard;
