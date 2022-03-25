import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('🚀 ~ file: [slug].js ~ line 15 ~ getStaticProps ~ slug', slug);

  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = ({ post }) => {
  console.log('🚀 ~ file: [slug].js ~ line 28 ~ PostPage ~ post', post);

  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;
