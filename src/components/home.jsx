import header from "../laptop.svg";
import badge from "../google-badge.png";
import calendar from "../calendar.svg";
import person from "../person.jpg";
import register from "../register.svg";

function Home() {
    return (
        <main>
            {/* Jumbotron */}
            <div className="jumbotron jumbotron-fluid d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h1 className="mb-3">
                                BECOME YOUR MOST UNSTOPPABLE YOURSELF
                            </h1>
                            <p className="lead mb-4">
                                Build skills with courses, certificates and
                                degrees online from world-class universities and
                                companies
                            </p>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary mr-3">
                                    Get Started
                                </button>
                                <button className="btn btn-primary">
                                    Free Trial
                                </button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img
                                src={header}
                                alt="header"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Adaptive learning */}
            <div className="section-2">
                <div className="p-5 d-flex align-items-center">
                    <div>
                        <h1 className="mb-3">ADAPTIVE LEARNING</h1>
                        <p className="lead">
                            The best learning outcomes happen when adaptive
                            learning technologies are combined
                        </p>
                    </div>
                </div>
                <div className="img-bg"></div>
            </div>

            {/* Popular courses */}
            <div className="section-3">
                <div className="container">
                    <h1 className="section-heading">POPULAR COURSE</h1>
                    <div className="d-flex justify-content-between mb-5">
                        <button className="btn btn-sm btn-primary">All</button>
                        <button className="btn btn-sm btn-primary">
                            Classes
                        </button>
                        <button className="btn btn-sm btn-primary">
                            Open Source
                        </button>
                        <button className="btn btn-sm btn-primary">
                            Subjects
                        </button>
                        <button className="btn btn-sm btn-primary">
                            Degrees
                        </button>
                        <button className="btn btn-sm btn-primary">
                            Medical Courses
                        </button>
                        <button className="btn btn-sm btn-primary">
                            Competitive Exams
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header"></div>
                                <div className="tag">
                                    <p>DEGREE COURSES</p>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <div className="text-center">
                                        <a href="/">
                                            Free Trial{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="/">
                                    <div className="card-footer text-center">
                                        ENROLL NOW
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header"></div>
                                <div className="tag">
                                    <p>CLASSES</p>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <div className="text-center">
                                        <a href="/">
                                            Free Trial{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="/">
                                    <div className="card-footer text-center">
                                        ENROLL NOW
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header"></div>
                                <div className="tag">
                                    <p>MEDICAL COURSES</p>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <div className="text-center">
                                        <a href="/">
                                            Free Trial{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <a href="/">
                                    <div className="card-footer text-center">
                                        ENROLL NOW
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-outline-primary">
                            MORE COURSES
                        </button>
                    </div>
                </div>
            </div>

            {/* Study calendar */}
            <div className="section-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src={calendar}
                                alt="Study calendar"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <h1 className="mb-3">STUDY CALENDAR</h1>
                            <p className="lead mb-3">
                                THE MORE YOU LEARN, <br />
                                THE LESS YOU PAY.
                            </p>
                            <p>Designed For Your Busy Life,</p>
                            <img src={badge} alt="Google Badge" width="30%" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaders testimonial */}
            <div className="section-5">
                <div className="container">
                    <h1 className="section-heading">LEADER'S TESTIMONIAL</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center mb-3">
                                        <div className="col-4">
                                            <img
                                                src={person}
                                                alt="Person"
                                                className="img-fluid shadow"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h4>RANK 1st</h4>
                                            <p className="small">
                                                Digital Marketing
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <p className="text-center name-credit">
                                        - Jhon Cristal
                                    </p>
                                    <p className="text-center small">
                                        PHP Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center mb-3">
                                        <div className="col-4">
                                            <img
                                                src={person}
                                                alt="Person"
                                                className="img-fluid shadow"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h4>RANK 1st</h4>
                                            <p className="small">
                                                Client Research
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <p className="text-center name-credit">
                                        - Priya Crista
                                    </p>
                                    <p className="text-center small">Nursing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center mb-3">
                                        <div className="col-4">
                                            <img
                                                src={person}
                                                alt="Person"
                                                className="img-fluid shadow"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h4>RANK 1st</h4>
                                            <p className="small">
                                                Full Stack Developer
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sed delectus
                                        voluptatum dolores itaque, modi minima
                                        fugit expedita velit minus optio quidem
                                        at assumenda, deserunt amet obcaecati
                                        est adipisci corporis! Nobis!
                                    </p>
                                    <p className="text-center name-credit">
                                        - Alen Jhosef
                                    </p>
                                    <p className="text-center small">
                                        Social Media Expert
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learning for everyone */}
            <div className="section-6">
                <div className="container">
                    <h1 className="section-heading">LEADER'S TESTIMONIAL</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>50+</h2>
                            <h4>Courses</h4>
                        </div>
                        <div className="col-md-4">
                            <h2>1000+</h2>
                            <h4>Hours of Content</h4>
                        </div>
                        <div className="col-md-4">
                            <h2>12M+</h2>
                            <h4>Successfull Graduates</h4>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h4 className="mb-3">FOR HOBBYISTS</h4>
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Illo aut ex nihil
                                        cumque facere harum facilis vitae optio
                                        debitis iusto distinctio, nisi laborum
                                        asperiores numquam quasi rerum quis.
                                        Qui, dolores.
                                    </p>
                                    <button className="btn btn-outline-primary">
                                        EXPLORE{" "}
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h4 className="mb-3">FOR PROFESSIONALS</h4>
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Illo aut ex nihil
                                        cumque facere harum facilis vitae optio
                                        debitis iusto distinctio, nisi laborum
                                        asperiores numquam quasi rerum quis.
                                        Qui, dolores.
                                    </p>
                                    <button className="btn btn-outline-primary">
                                        EXPLORE{" "}
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h4 className="mb-3">FOR ENTREPRENEURS</h4>
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Illo aut ex nihil
                                        cumque facere harum facilis vitae optio
                                        debitis iusto distinctio, nisi laborum
                                        asperiores numquam quasi rerum quis.
                                        Qui, dolores.
                                    </p>
                                    <button className="btn btn-outline-primary">
                                        EXPLORE{" "}
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="text-center">
                        <a href="/">
                            START YOUR FREE COURSE{" "}
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </h5>
                </div>
            </div>

            {/* Register to get free trial */}
            <div className="section-7">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="mb-4">LOREM IPSUM</h1>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Possimus commodi sed nam alias
                                ipsam! Atque laborum esse deserunt ad alias!
                                Rerum itaque possimus dolorem illo quos eveniet,
                                ratione suscipit perferendis.
                            </p>
                            <h4 className="mb-4">Register to Get Free Trial</h4>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary mr-3">
                                    Premium Courses
                                </button>
                                <button className="btn btn-primary">
                                    Free Trial
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={register}
                                alt="Study calendar"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
