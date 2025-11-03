import PropTypes from 'prop-types'
import { User } from './User.jsx'

import { useMutation, useQueryClient } from '@tanstack/react-query'

//import { useState } from 'react'

import { useAuth } from '../contexts/AuthContext.jsx'

import { updatePost } from '../api/posts.js'

export function Post({ _id, title, contents, imageurl, author, likes }) {
   const [token] = useAuth()
   const queryClient = useQueryClient()

   const createPostMutation = useMutation({
      mutationFn: () =>
         updatePost(token, _id, { title, contents, imageurl, likes }),
      onSuccess: () => queryClient.invalidateQueries(['posts']),
   })

   const handleSubmit = (e) => {
      likes = likes + 1
      e.preventDefault()
      createPostMutation.mutate()
   }

   if (!token)
      return (
         <article>
            <div>
               <b>Post ID: </b>
               {_id}
            </div>

            <br />

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

   return (
      <article>
         <div>
            <b>Post ID: </b>
            {_id}
         </div>

         <br />

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

         <form onSubmit={handleSubmit}>
            <input
               type='submit'
               value={
                  createPostMutation.isPending
                     ? 'Liking...'
                     : 'Like this recipe!'
               }
               disabled={createPostMutation.isPending}
            />
         </form>
      </article>
   )
}

Post.propTypes = {
   _id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   contents: PropTypes.string,
   imageurl: PropTypes.string,
   author: PropTypes.string,
   likes: PropTypes.number,
}
