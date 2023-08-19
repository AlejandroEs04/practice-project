import { resolve } from "styled-jsx/css"

const fetchComments = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      next: {
          revalidate: 60
      }
    })
      .then(res => res.json())
}

export default async function CommentsPage({params}) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul>
            {comments.map(comment => (
                <li>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}
