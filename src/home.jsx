import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Laravel Learning Hub</h1>
        <p>Your one-stop platform to master Laravel from beginner to advanced levels!</p>
      </header>

      <section id="intro" className="container mt-5">
        <h2>Why Learn Laravel?</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="images/code.jpg"
              alt="Laravel"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p>
              Laravel is a robust, easy-to-learn PHP framework used by developers worldwide. 
              Whether you're building a simple website or a complex web application, Laravel offers 
              the tools you need to get the job done efficiently.
            </p>
            <ul>
              <li>Elegant syntax for easy understanding</li>
              <li>Powerful ORM (Eloquent) for database management</li>
              <li>Built-in security features for safe coding</li>
              <li>Comprehensive documentation and community support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="courses" className="container mt-5">
        <h2>Our Courses</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Laravel Basics"
              />
              <div className="card-body">
                <h5 className="card-title">Laravel Basics</h5>
                <p className="card-text">
                  Learn the fundamentals of Laravel, from routing to working with databases.
                </p>
                <button className="btn btn-primary">Start Learning</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Advanced Laravel"
              />
              <div className="card-body">
                <h5 className="card-title">Advanced Laravel</h5>
                <p className="card-text">
                  Take your Laravel skills to the next level with advanced techniques and features.
                </p>
                <button className="btn btn-primary">Start Learning</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Laravel & Vue.js"
              />
              <div className="card-body">
                <h5 className="card-title">Laravel & Vue.js Integration</h5>
                <p className="card-text">
                  Learn how to integrate Vue.js with Laravel for dynamic frontend applications.
                </p>
                <button className="btn btn-primary">Start Learning</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="container mt-5">
        <h2>What Our Students Say</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>"This platform made learning Laravel so much easier. The tutorials are clear and easy to follow!"</p>
                  <footer>- John Doe, Full Stack Developer</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>"Thanks to Laravel Learning Hub, I now feel confident building Laravel applications from scratch."</p>
                  <footer>- Jane Smith, Backend Developer</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;
