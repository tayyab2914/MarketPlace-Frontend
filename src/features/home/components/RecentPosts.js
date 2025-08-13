import React from "react";
import { Row, Col } from "antd";
import { ArrowRight } from "lucide-react";
import { HOME_CONTENT } from "@/constants/static-pages/home";

const RecentPosts = () => {

  return (
    <section className="stp-30 sbp-30">
    <div className="container">
        <div className="home-post-recent-posts-header">
          <div className="home-post-recent-posts-title">
            <h2>
              Recent <span className="home-post-highlight">Posts</span>
            </h2>
            <p>Read the recent articles from our blog.</p>
          </div>
          <div>
            <a href="./blog.html" className="home-post-all-articles-link">
              All Article
              <ArrowRight size={20}/>
            </a>
          </div>
        </div>

        <Row gutter={[24, 24]} className="home-post-recent-posts-grid">
          {HOME_CONTENT?.posts?.map((post) => (
            <Col
              key={post.id}
              xs={24}
              sm={12}
              lg={8}
              className="home-post-recent-post-item"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay={post.delay}
            >
              <div className="home-post-post-image-wrapper">
                <img src={post.image} alt={post.title} className="home-post-post-image" />
                <p className="home-post-post-category">{post.category}</p>
              </div>
              <div className="home-post-post-content">
                <a href={post.link}>
                  <h4>{post.title}</h4>
                </a>
                <div className="home-post-post-footer">
                  <p>{post.date}</p>
                  <a href={post.link} className="home-post-post-link-icon">
                    <ArrowRight size={20}/>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RecentPosts;
