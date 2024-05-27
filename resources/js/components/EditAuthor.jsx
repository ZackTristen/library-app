import { observer } from "mobx-react-lite";
import libraryStore from "./libraryStore";
import { useParams } from "react-router-dom";
import { useRef, useState} from "react";
function EditAuthor() {
    const {id} = useParams();
    const { getAuthor, addEditAuthor } = libraryStore;
    
    const [ author, setAuthor] = useState(()=> {
        return {
            id: getAuthor(id).id,
            name: getAuthor(id).name
        }
    });

    const onEditAuthor = () => {
    let editedAuthor = {
        id: author.id ,
        name: authorRef.current.value ? authorRef.current.value : author.name
    }
    setAuthor(editedAuthor)
    addEditAuthor(editedAuthor)
    }
    
    const authorRef = useRef();
    
    return (
        <div>
            <div>Имя автора: {author.name}</div>
            <table classNam="table">
                <thead>
                    <tr>
                        <th scope="col">ФИО</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" ref={authorRef}  placeholder={author.name} required/></td>
                        <td><button onClick={onEditAuthor}className="btn btn-warning">Сохранить</button></td> 
                    </tr>
                </tbody>
            </table>
            
            </div>
        
    );
}

export default observer(EditAuthor);
