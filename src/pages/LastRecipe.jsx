import { PostList } from '../components/PostList.jsx'
import { useQuery } from '@tanstack/react-query'
import { getLastPost } from '../api/posts.js'

export function LastRecipe() {
   const postsQuery = useQuery({
      queryKey: [],
      queryFn: () => getLastPost(),
   })

   const posts = postsQuery.data ?? []

   return (
      <div style={{ padding: 8 }}>
         <PostList posts={posts} />
      </div>
   )
}
