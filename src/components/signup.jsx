function Register() {
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="mb-3">CREATE YOUR ACCOUNT</h3>
                                <p>
                                    Enjoy unlimited learning | 4 week free
                                    course
                                </p>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="fullname">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            placeholder="John Smith"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="john@gmail.com"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullname">
                                            Mobile *
                                        </label>
                                        <input
                                            type="number"
                                            name="mobile"
                                            id="mobile"
                                            placeholder="+91 00000 00000"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="course">
                                            Select a Course
                                        </label>
                                        <select
                                            name="course"
                                            id="course"
                                            className="form-control"
                                        >
                                            <option value disabled>
                                                Select a Course
                                            </option>
                                            <option value="course 1">
                                                Course one
                                            </option>
                                            <option value="course 2">
                                                Course two
                                            </option>
                                            <option value="course 3">
                                                Course three
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Location">
                                            Location *
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            placeholder="Enter City"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="code">
                                            Referrel Code (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="code"
                                            id="code"
                                            placeholder="Enter code"
                                            className="form-control"
                                        />
                                    </div>
                                </form>
                                <button className="btn btn-primary btn-block">
                                    SIGN UP{" "}
                                    <i className="fas fa-sign-in-alt"></i>
                                </button>
                                <p className="small mt-3 text-center">
                                    By signing up, you agree to inquel's
                                    <br />
                                    <a href="/" className="font-weight-bold">
                                        Privacy Policy
                                    </a>{" "}
                                    and{" "}
                                    <a href="/" className="font-weight-bold">
                                        Terms of Use.
                                    </a>
                                </p>
                                <p className="text-center font-weight-bold mb-1">
                                    Other login
                                </p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button className="btn-primary btn mr-3 btn-sm">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button className="btn-primary btn btn-sm">
                                        <i className="fab fa-facebook"></i>
                                    </button>
                                </div>
                                <p className="text-center">
                                    Click here to <a href="/login">Login</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
