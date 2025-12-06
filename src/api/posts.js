export const getPosts = async (queryParams) => {
   const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/posts?` +
         new URLSearchParams(queryParams),
   )
   return await res.json()
}

export const getLastPost = async (queryParams) => {
   const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/lastpost?` +
         new URLSearchParams(queryParams),
   )
   return await res.json()
}

export const createPost = async (token, post) => {
   const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/
posts`,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(post),
      },
   )
   return await res.json()
}

/*
export const updatePost = async (token, id, post) {
	const res = await fetch(`${API_BASE}/api/items/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updates)
	});
	if (!res.ok) throw new Error('Update failed');
	return res.json();
}
*/

export const updatePost = async (token, _id, post) => {
   const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/
posts/${_id}`,
      {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(post),
      },
   )
   return await res.json()
}
