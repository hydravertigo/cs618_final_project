import PropTypes from 'prop-types'
import { User } from './User.jsx'

//import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'

export function Post({ title, contents, imageurl, author, likes }) {
   const [token] = useAuth()

   if (!token) return <div>Please log in to create new posts.</div>

   return (
      <article>
         <div>
            <b>Recipe Title: </b>
            {title}
         </div>

         <br />

         <div>
            <b>Ingredients: </b>
            {contents.replace(/\n/g, ', ')}
         </div>

         <div>
            <h4>Image:</h4>
            <img src={imageurl} alt='' width='300' height='200' />
         </div>

         <br />

         <div>
            <b>Likes: </b>
            {likes}
         </div>

         <br />

         {author && (
            <em>
               Written by <User id={author} />
            </em>
         )}
      </article>
   )
}
Post.propTypes = {
   title: PropTypes.string.isRequired,
   contents: PropTypes.string,
   imageurl: PropTypes.string,
   likes: PropTypes.number,
   author: PropTypes.string,
}
