import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'

import { createPost } from '../api/posts.js'

export function CreatePost() {
   const [title, setTitle] = useState('')
   const [contents, setContents] = useState('')
   const [imageurl, setImageurl] = useState('')
   const [token] = useAuth()
   const queryClient = useQueryClient()

   const createPostMutation = useMutation({
      mutationFn: () => createPost(token, { title, contents, imageurl }),
      onSuccess: () => queryClient.invalidateQueries(['posts']),
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      createPostMutation.mutate()
   }

   if (!token) return <div>Please log in to create new posts.</div>

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='create-title'>Recipe Title: </label>
            <input
               type='text'
               name='create-title'
               id='create-title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </div>

         <br />

         <div>
            <label htmlFor='contents'>Ingredient List: </label>
            <br />
            <textarea
               value={contents}
               onChange={(e) => setContents(e.target.value)}
            />
         </div>

         <br />

         <div>
            <label htmlFor='image'>Image URL:</label>
            <br />
            <input
               type='text'
               name='image-url'
               id='image-url'
               value={imageurl}
               onChange={(e) => setImageurl(e.target.value)}
            />
         </div>

         <br />
         <br />
         <input
            type='submit'
            value={createPostMutation.isPending ? 'Creating...' : 'Create'}
            disabled={!title || createPostMutation.isPending}
         />
         {createPostMutation.isSuccess ? (
            <>
               <br />
               Post created successfully!
            </>
         ) : null}
      </form>
   )
}
