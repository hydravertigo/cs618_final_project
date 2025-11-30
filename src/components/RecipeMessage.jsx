import PropTypes from 'prop-types'

export function RecipeMessage({ recipe }) {
   return (
      <div>
         <b>{recipe}</b>
      </div>
   )
}

RecipeMessage.propTypes = {
   recipe: PropTypes.string.isRequired,
}
