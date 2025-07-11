import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li><Link href="/news/nextJsArticle">NextJS is a Great Framework</Link></li>
        <li><Link href="/news/javaArticle">Java is the Best Framework</Link></li>
      </ul>
    </>
  );
}

export default NewsPage;