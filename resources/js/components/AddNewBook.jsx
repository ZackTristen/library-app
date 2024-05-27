import { observer } from "mobx-react-lite";
import libraryStore from "./libraryStore";
import { useEffect, useState } from "react";
import { useRef } from "react";
function AddNewBook() {
    const { authors, books, addNewBook } = libraryStore;

    const [selectedAuthors, setSelectedAuthors] = useState([]);
    useEffect(() => {}, [selectedAuthors]);

    let title = useRef();
    let year = useRef();

    const onSubmitBook = () => {
      if (title.current.value === "" || year.current.value === "" || selectedAuthors.length === 0 )  {
       return  alert("Заполните все поля")
      }
        const newBook = {
            id: String((books.length + 1)*Math.round((Math.random()*10 + Math.random()*10))),
            title: title.current.value,
            author: selectedAuthors,
            year: year.current.value,
        };
        // const [style, setStyle] = useState("display: none");

        addNewBook(newBook);
    };

    const listedAuthors = (values) => {
        let authors = [...values];
        authors = authors.map((author) => author.innerHTML);
        setSelectedAuthors(authors);
    };
    useEffect(() => {}, [books, authors]);

    return (
        <div>
            {/* <h1 style={{style}}></h1> */}
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Название</th>
                        <th scope="col ">Автор(ы)</th>
                        <th scope="col">Год издания</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table">
                        <td>
                            <input
                                type="text"
                                ref={title}
                                placeholder="Название книги"
                                required
                            />
                        </td>
                        <td>
                            <div className="col-10 d-flex justify-content-between">
                                Выберите автора(ов)
                                <select
                                    className="form-select"
                                    multiple
                                    aria-label="multiple select example"
                                    onChange={(e) =>
                                        listedAuthors(e.target.selectedOptions)
                                    }
                                >
                                    {authors.map((author) => (
                                        <option
                                            key={author.id}
                                            value={author.name}
                                        >
                                            {author.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </td>
                        <td>
                            <input
                                type="text"
                                ref={year}
                                placeholder="Год издания"
                                required
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => onSubmitBook()}
                                className="btn btn-warning"
                            >
                                Добавить
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default observer(AddNewBook);
