import { ListOfPost } from "./ListOfPost"
import styles from '../../styles/posts.module.css'

export default async function PostsPage() {

  return (
    <>
      <h1>Posts</h1>
        <section className={styles.postsContainer}>
          <ListOfPost />
        </section>
    </>
  )
}
