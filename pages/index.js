import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Ana Sayfa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <img 
        className="hero-image" 
        src="https://scontent.fadb2-2.fna.fbcdn.net/v/t1.0-9/69309174_103998401074843_8256973729188282368_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=PUuGdjbRpAgAX-lu-XG&_nc_ht=scontent.fadb2-2.fna&oh=68b298867f25168e76969b54962768ca&oe=5F23909D" 
        alt="hero_image"
      />
      <h1 className="hero-title">Fahri Muhammet Demir</h1>
      <p className="hero-p">Kişisel Blog</p>
      <div className="hero-social-links">
      </div>
    </div>

    {posts.map(post => (
      <div className="blog">
        <img className="blog-img" src={post.img} alt="blog_img" />
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');      html{
        background:#131D26;
        color:#F2F2F2
      }
      .container {
        max-width: 650px;
        width: 90%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
        font-family: 'Roboto Mono', monospace;
      }

      .hero-p{
        font-size:23px;
        color:#87898C;
        margin-top:-20px;
      }

      .hero-image{
        max-width:700px;
        width:60%;
        border-radius:100vh;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog{
        font-family: 'Noto Sans', sans-serif;
      }

      .blog-img{
        max-width:600px;
        width:100%;
      }

      .blog-text{
        height:20%;
        overflow:hidden
      }

      .blog-date {
        text-align: right;
        color: #87898C;
        margin: 12px 0 48px 0;
      }

      a {
        color: #BDBDBF;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://blogsites.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
