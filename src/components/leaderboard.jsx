import person from "../person.jpg";

function Leaderboard() {
    return (
        <div className="leaderboard">
            <div className="container">
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <h1 className="text-center">Leader Board</h1>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row justify-content-between mb-3">
                            <div className="col-md-4 d-flex">
                                <button className="btn-outline-primary btn mr-2">
                                    Quiz Masters
                                </button>
                                <button className="btn-primary btn">
                                    Course Toppers
                                </button>
                            </div>
                            <div className="col-md-4 d-flex">
                                <form>
                                    <input
                                        type="search"
                                        name="search"
                                        id="search"
                                        placeholder="Search..."
                                        className="form-control"
                                    />
                                </form>
                                <button
                                    className="btn-outline-primary btn ml-2"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    Filter <i className="fas fa-filter"></i>
                                </button>
                            </div>
                        </div>
                        <p>Quiz Masters of Month - October 2020</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">GRADE</th>
                                    <th scope="col">POINTS</th>
                                    <th scope="col">SUBJECT</th>
                                    <th scope="col">INSTITUATIC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <img
                                            src={person}
                                            alt="person"
                                            className="img-fluid"
                                        />
                                    </th>
                                    <td>Mark</td>
                                    <td>Grade 01</td>
                                    <td>870</td>
                                    <td>Maths</td>
                                    <td>Instituatic 01</td>
                                </tr>
                                <tr>
                                    <th>
                                        <img
                                            src={person}
                                            alt="person"
                                            className="img-fluid"
                                        />
                                    </th>
                                    <td>John</td>
                                    <td>Grade 05</td>
                                    <td>789</td>
                                    <td>Science</td>
                                    <td>Instituatic 02</td>
                                </tr>
                                <tr>
                                    <th>
                                        <img
                                            src={person}
                                            alt="person"
                                            className="img-fluid"
                                        />
                                    </th>
                                    <td>Angel</td>
                                    <td>Grade 04</td>
                                    <td>456</td>
                                    <td>Social Science</td>
                                    <td>Instituatic 03</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Filter
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-1">Type</p>
                                <div className="d-flex mb-2">
                                    <button className="btn btn-outline-secondary mr-2">
                                        Quiz Masters
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        Course Toppers
                                    </button>
                                </div>
                                <p className="mb-1">Grade / Rank</p>
                                <div className="mb-2">
                                    <div
                                        className="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            1
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            2
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            3
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            4
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            5
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            6
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            7
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            8
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            9
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            10
                                        </button>
                                    </div>
                                </div>
                                <p className="mb-1">Dates</p>
                                <div className="d-flex mb-2">
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="form-control mr-2"
                                    />
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="subject">Subject</label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        className="form-control"
                                    >
                                        <option value="subject01">
                                            Subject 01
                                        </option>
                                        <option value="subject02">
                                            Subject 02
                                        </option>
                                        <option value="subject03">
                                            Subject 03
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="subject">Instituatic</label>
                                    <select
                                        name="instituatic"
                                        id="instituatic"
                                        className="form-control"
                                    >
                                        <option value="instituatic01">
                                            Instituatic 01
                                        </option>
                                        <option value="instituatic02">
                                            Instituatic 02
                                        </option>
                                        <option value="instituatic03">
                                            Instituatic 03
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    data-dismiss="modal"
                                >
                                    Clear All
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    Apply Filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
