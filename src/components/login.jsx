function Login() {
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="mb-3">LOGIN</h3>
                                <p>
                                    Enjoy unlimited learning | Enjoy 7 days Free
                                    Trials
                                </p>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="xyz@gmail.com"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="............"
                                            className="form-control"
                                        />
                                    </div>
                                </form>
                                <p className="forgotpass">
                                    <a href="/">Forgot Password</a>
                                </p>
                                <button className="btn btn-primary btn-block">
                                    LOGIN <i className="fas fa-sign-in-alt"></i>
                                </button>
                                <p className="small mt-3 text-center">
                                    Don't have an account yet?{" "}
                                    <a
                                        href="/signup"
                                        className="font-weight-bold"
                                    >
                                        Join Inquel online Learning
                                    </a>
                                </p>
                                <p className="text-center font-weight-bold">
                                    Other login
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn-primary btn mr-3 btn-sm">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button className="btn-primary btn btn-sm">
                                        <i className="fab fa-facebook"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
