import Counter from "./Counter"

function PostsLayout({children}) {
  return (
    <main className={`container main`}>
      <small>Home &bull; Posts</small>
      {children}
    </main>
  )
}

export default PostsLayout
