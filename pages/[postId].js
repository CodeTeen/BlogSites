import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="blog">
      <div className="blog-head">
        <h2 className="blog-title">
          {post.title}
        </h2>
        <div className="blog-other">
          <div className="blog-writer">
            {post.writer}
          </div>
          <div className="blog-date">
            {post.date}
          </div>
        </div>
        <img className="blog-img" src={post.img} alt="post_img"/>
      </div>
      <div className="blog-body">
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
      </div>
      <div className="blog-foot">
      </div>
    </div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
      html{
        background:#131D26;
        color:#F2F2F2;
        font-family: 'Noto Sans', sans-serif;
      }
      body{
        margin:0;
        padding:0;
      }

      .blog-head{
        width:100%;
        height:70vh;
      }

      .blog-head *{
        margin:0;
        padding:0;
      }

      .blog-title{
        position:absolute;
        bottom:35vh;
        left:20px;
        z-index:1;
        font-size:40px
      }

      .blog-other{
        position:absolute;
        right:0;
        top:20px;
        z-index:1;
        color:#BDBDBF;
        background:black;
      }

      .blog-other *{
        float:right;
        margin-right:20px;
      }

      .blog-img{
        width:100%;
        height:100%;
        opacity:0.4;
      }

      .blog-body {
        max-width: 750px;
        width: 85%;
        margin:30px auto;
        font-size:20px;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      a {
        color: #BDBDBF;
        text-decoration: none;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`https://blogsites.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
