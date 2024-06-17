import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore More Below</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="June 17, 2024" text="Tech Intervention in Domestic Abuse"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="June 17, 2024" text="..." />
        <Article imgUrl={blog03} date="June 17, 2024" text="..." />
        <Article imgUrl={blog04} date="June 17, 2024" text="..." />
        <Article imgUrl={blog05} date="June 17, 2024" text="..." />
      </div>
    </div>
  </div>
);

export default Blog;
