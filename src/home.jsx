import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className='App-heading'>
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
                src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=612x612&w=0&k=20&c=PB45SiRelu95ne_GCzPcNJ7XZ0eN1nB_c-nBIAB1dFg="
                className="card-img-top"
                alt="Laravel Basics"
              />
              <div className="card-body">
                <h5 className="card-title">Laravel Basics</h5>
                <p className="card-text">
                  Learn the fundamentals of Laravel, from routing to working with databases.
                </p>
                <a href='https://laravel-tech.blogspot.com/2024/10/laravel-tutorial-for-beginners.html' className="btn btn-primary">Start Learning</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2020/08/16/03/30/remote-5491798_640.png"
                className="card-img-top"
                alt="Advanced Laravel"
              />
              <div className="card-body">
                <h5 className="card-title">Advanced Laravel</h5>
                <p className="card-text">
                  Take your Laravel skills to the next level with advanced techniques and features.
                </p>
                <a href='https://laravel-tech.blogspot.com/2024/10/user-roles-and-permissions-in-laravel.html' className="btn btn-primary">Start Learning</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://laraveldaily.com/uploads/2021/10/Screenshot-2021-10-05-at-08.47.51-1024x332.png"
                className="card-img-top"
                alt="Laravel & Vue.js"
              />
              <div className="card-body">
                <h5 className="card-title">Laravel & Vue.js Integration</h5>
                <p className="card-text">
                  Learn how to integrate Vue.js with Laravel for dynamic frontend applications.
                </p>
                <a href='https://laraveldaily.com/post/laravel-8-vue-3-crud-composition-api' className="btn btn-primary">Start Learning</a>
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
