import { observer } from "mobx-react-lite";
import libraryStore from "./libraryStore";
import { useRef } from "react";
function AddNewAuthor() {
    const { authors, addNewAuthor } = libraryStore;

    const name = useRef();

    const onSubmitAuthor = () => {
        if (name.current.value === "") {
            return alert("Введите ФИО автора");
        }
        const newAuthor = {
            id: String(
                (authors.length + 1) *
                    Math.round(Math.random() * 10 + Math.random() * 10)
            ),
            name: name.current.value,
        };
        addNewAuthor(newAuthor);
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ФИО</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                ref={name}
                                placeholder="Введите ФИО автора"
                                required
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-success"
                                onClick={onSubmitAuthor}
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

export default observer(AddNewAuthor);
