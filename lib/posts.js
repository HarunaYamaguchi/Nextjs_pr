import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostsIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    //idの要素のみを取得
    return {
      params: { id: String(post.id) }, //getStaticPathsの場合、フィールドにparamsを作らなければならない
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`)); //エンドポイントから特定のブログのデータを取得
  const post = await res.json();

  return post;
}
