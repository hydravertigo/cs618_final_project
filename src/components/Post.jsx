import PropTypes from 'prop-types'
import { User } from './User.jsx'

export function Post({ title, contents, imageurl, author }) {
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
         {author && (
            <em>
               <br />
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
   author: PropTypes.string,
}
