import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import ListOfAuthors from "./ListOfAuthors";
import EditAuthor from "./EditAuthor";
import AddNewAuthor from "./AddNewAuthor";
import AddNewBook from "./AddNewBook";
import EditBook from "./EditBook";

function App() {
    return (
        <div className="d-flex justify-content-center mb-5">
            <div className="w-75">
                <BrowserRouter>
                    <h1 className="text-center">Библиотека</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                Меню
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <a
                                                className="nav-link active"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Список книг
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to="/listAuthors"
                                        >
                                            <a
                                                className="nav-link active"
                                                aria-current="page"
                                                href="#"
                                            >
                                                Список Авторов
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/addBook" element={<AddNewBook />} />
                        <Route path="/addAuthor" element={<AddNewAuthor />} />
                        <Route
                            path="/listAuthors"
                            element={<ListOfAuthors />}
                        />
                        <Route
                            path="/editAuthor/:id"
                            element={<EditAuthor />}
                        />
                        <Route path="/editBook/:id" element={<EditBook />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
