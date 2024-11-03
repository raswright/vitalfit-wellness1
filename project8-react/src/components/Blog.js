import React from 'react';
import '../styles/Blog.css';

//Import images
import Blog1 from '../assets/images/blog1.jpg';
import Blog2 from '../assets/images/blog2.jpg';
import BlogFood from '../assets/images/blogfood.jpg';
import MentalHealth1 from '../assets/images/mentalhealth1.jpg';
import Drinking from '../assets/images/drinking.jpg';

const Blog = () => {
  return (
    <div>
      <main>
        {/* Featured Blog Post Section */}
        <section className="featured-post">
          <img
            src={Blog1}
            width="500"
            height="400"
            alt="Featured Post"
            className="featured-image"
          />
          <div className="featured-content"> 
            <h2>25 ways exercise can change your life</h2>
            <p>
              If you are only exercising to lose weight, you may find it hard to stick to your goal. It can take a few
              weeks or months to see changes in your outward appearance; thankfully, there are numerous ways exercise
              improves your health from the inside out. Some exercise benefits are immediate, which can give you that
              extra push when you want to quit.
            </p>
            <a
              href="https://www.piedmont.org/living-real-change/25-ways-exercise-can-change-your-life"
              className="read-more"
            >
              Read Full Article
            </a>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="blog-section">
          <h2>Latest Blog Posts</h2>

          {/* Blog Post Components */}
          <BlogPost
            imgSrc={Blog2}
            title="12 exercise benefits to encourage a workout routine"
            content="Physical activity is about more than just flexing your muscles. Strength training at the gym, a brisk walk around
              the neighborhood, or a high-intensity aerobic workout in your living room positively benefits the rest of your day..."
            tags={['Fitness', 'Wellness']}
            link="https://www.betterup.com/blog/exercise-benefits"
          />

          <BlogPost
            imgSrc={BlogFood}
            title="25 Simple Tips to Make Your Diet Healthier"
            content="You can eat healthier by making a few swaps, such as choosing whole grains over refined grains and eating more protein.
              A diet rich in fruits and vegetables has been scientifically proven to provide numerous health benefits..."
            tags={['Nutrition']}
            link="https://www.healthline.com/nutrition/healthy-eating-tips"
            reverse
          />

          <BlogPost
            imgSrc={MentalHealth1}
            title="How to look after your mental health using exercise"
            content="There are many reasons why physical activity is good for your body - having a healthy heart and improving your joints and bones are
              just two, but did you know that physical activity is also beneficial for your mental health and well-being?"
            tags={['Mental Health']}
            link="https://www.mentalhealth.org.uk/explore-mental-health/publications/how-look-after-your-mental-health-using-exercise"
          />

          <BlogPost
            imgSrc={Drinking}
            title="Staying Hydrated, Staying Healthy"
            content="When the temperatures rise, getting enough water is important whether you're playing sports, traveling, or just sitting in the sun.
              It's critical for your heart health. Drinking enough water keeps the body hydrated, which helps the heart more easily pump blood..."
            tags={['Nutrition', 'Fitness']}
            link="https://www.heart.org/en/healthy-living/fitness/fitness-basics/staying-hydrated-staying-healthy"
            reverse
          />
        </section>

        {/* Load More Button */}
        <div className="load-more">
          <button>Load More</button>
        </div>

        {/* Interactive Quiz Section */}
        <section className="interactive-quiz">
          <h2>What's Your Favorite Fitness Activity?</h2>
          <form id="fitness-quiz">
            <input type="radio" id="yoga" name="activity" value="yoga" />
            <label htmlFor="yoga">Yoga</label>
            <br />
            <input type="radio" id="running" name="activity" value="running" />
            <label htmlFor="running">Running</label>
            <br />
            <input type="radio" id="cycling" name="activity" value="cycling" />
            <label htmlFor="cycling">Cycling</label>
            <br />
            <input type="radio" id="strength" name="activity" value="strength" />
            <label htmlFor="strength">Strength Training</label>
            <br />
            <input type="radio" id="zumba" name="activity" value="zumba" />
            <label htmlFor="zumba">Zumba</label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <div id="quiz-result"></div>
        </section>
      </main>
    </div>
  );
};

const BlogPost = ({ imgSrc, title, content, tags, link, reverse = false }) => (
  <article className={`blog-post ${reverse ? 'reverse' : ''}`}>
    {!reverse && <img src={imgSrc} width="300" height="200" alt={title} className="blog-image" />}
    <div className="blog-content">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="blog-tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <a href={link} className="read-more">
        Read More
      </a>
    </div>
    {reverse && <img src={imgSrc} width="300" height="200" alt={title} className="blog-image" />}
  </article>
);

export default Blog;