import LikeButton from "./LikeButton";
import styles from '../../styles/posts.module.css'
import Link from "next/link";

// getStaticProps
// -> return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

// getSideProps
// -> return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no store' }).then(res => res.json())

// incremental Static Regeneration
// -> return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } }).then(res => res.json())

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
        revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPost() {

  const posts = await fetchPosts();

  return posts.slice(0, 8).map(post => (
        <article key={post.id} className={styles.articleContainer}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <h2 style={{color: '#09f'}}>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
            <LikeButton 
                id={post.id}
            />
        </article>
    ))   
}
