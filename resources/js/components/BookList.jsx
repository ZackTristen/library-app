import { useEffect } from "react";
import libraryStore from "./libraryStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

function BookList() {
    const {
        authors,
        deleteBook,
        filteredBooks,
        changeFilterField,
        submitChange,
    } = libraryStore;

    useEffect(() => {
        libraryStore.getFilteredBooks();
    }, []);
    return (
        <>
            <div className="col-4">
                Выберите автора
                <select
                    onChange={(e) => changeFilterField(e.target.value)}
                    className="form-select"
                    name="authors"
                >
                    <option>Все авторы</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.name}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <button onClick={submitChange} className="btn btn-success">
                    Применить фильтр
                </button>
            </div>

            <div></div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">
                            id
                        </th>
                        <th scope="col" className="text-center">
                            Название
                        </th>
                        <th scope="col" className="text-center">
                            Автор(ы)
                        </th>
                        <th scope="col" className="text-center">
                            Год издания
                        </th>
                        <th scope="col" className="text-center">
                            Действия
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book) => (
                        <tr key={book.id}>
                            <td className="text-center">{book.id}</td>
                            <td className="text-center">{book.title}</td>
                            <td className="text-center">
                                {book.author.map((el) => (
                                    <ul>
                                        <li>{el}</li>
                                    </ul>
                                ))}
                            </td>
                            <td className="text-center">{book.year}</td>

                            <td className="text-center">
                                <Link to={`/editBook/${book.id}`}>
                                    <button className="btn btn-primary">
                                        Редактировать книгу
                                    </button>
                                </Link>
                                <button
                                    onClick={() => deleteBook(book.id)}
                                    className=" mx-3 btn btn-danger"
                                >
                                    Удалить книгу
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/addBook">
                <button className=" mx-3 btn btn-success">
                    Добавить книгу
                </button>{" "}
            </Link>
        </>
    );
}

export default observer(BookList);
