import { observer } from "mobx-react-lite";
import libraryStore from "./libraryStore";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const { authors, books, addEditBook } = libraryStore;
  
  
  const [book, setBook] = useState(() => {
    return {
      id: books.find((book) => book.id === id).id,
      title: books.find((book) => book.id === id).title,
      author: [...books.find((book) => book.id === id).author],
      year: books.find((book) => book.id === id).year,
    };
  });
  const [selectedAuthors, setSelectedAuthors] = useState(book.author);
  //    для корректного отображения авторов при выборе из селекта

  const title = useRef(null);
  const year = useRef(null);
  const author = useRef(null);

  const changeList = (values) => {
    let authors = [...values];
    authors = authors.map((author) => author.innerHTML);
    setSelectedAuthors(authors);
  }

  const editHandler = () => {
    let newBook = {
      id: book.id,
      title: title.current.value ? title.current.value : book.title,
      author: selectedAuthors ? selectedAuthors : book.author,
      year: year.current.value ? year.current.value : book.year,
    };
    addEditBook(newBook);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Автор(ы)</th>
            <th scope="col">Год издания</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <input type="text" ref={title} placeholder={book.title} required />
          </td>
          {/* <td>
            <input type="text" ref={author} required />
          </td> */}
          <td className="col-4 m">
        Выберите автора(ов)
        <select
          className="form-select"
          multiple
          aria-label="multiple select example"
          onChange={(e) => changeList(e.target.selectedOptions)}
        >
          {authors.map((author) => (
            <option key={author.id} value={author.name}>
              {author.name}
            </option>
          ))}
        </select>
      </td>
          <td>
            <input type="text" ref={year} placeholder={book.year} required />
          </td>
          <td>
            <button className="btn btn-warning" onClick={editHandler}>
              Сохранить
            </button>
          </td>
          {/* {console.log(book.author.map(author => (author)))} */}
        </tbody>
      </table>
      
    </div>
  );
}

export default observer(EditBook);
