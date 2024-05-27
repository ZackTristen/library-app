import { observer } from "mobx-react-lite";
import libraryStore from "./libraryStore";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ListOfAuthors() {
  const { authors, deleteAuthors, calcCountBooks } = libraryStore;
  const [authorFiltered, setAuthorFiltered] = useState(authors)
  useEffect(()=> {
  let authorsArrayFultered = authors.sort((a, b) => a.name.localeCompare(b.name))  
  setAuthorFiltered(authorsArrayFultered)
  }, [authors])
  return (
    <>
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              id
            </th>
            <th scope="col" className="text-center">
              ФИО
            </th>
            <th scope="col " className="text-center">
              Количество книг
            </th>
            <th scope="col" className="text-center">
              Действия
            </th>
          </tr>
        </thead>
        <tbody>
        {/* .sort((a, b) => a.title.localeCompare(b.title)); */}
          {authorFiltered.map((author) => (
            <tr key={author.id} className="text-center">
              <td className="text-center">{author.id}</td>
              <td className="text-center">{author.name}</td>
              <td className="text-center">
                {calcCountBooks(author.name, "+")}
              </td>
              <td className="text-center">
                <Link to={`/editAuthor/${author.id}`}>
                  <button className="ml-2 btn btn-warning">
                    Редактировать
                  </button>
                </Link>
                <button
                  className="ml-2 btn btn-danger"
                  onClick={() => deleteAuthors(author.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addAuthor"><button className=" mx-3 btn btn-success">Добавить автора</button> </Link>
      
    </>
  );
}

export default observer(ListOfAuthors);
