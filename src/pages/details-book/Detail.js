import { useParams } from "react-router-dom";
import useFetch from "../../fetch";
import Book from "../../components/book/book";

const Detail = () => {
    const { id } = useParams();
    const { data, pending, error } = useFetch('http://localhost:8000/books/details/' + id)
    const { data:book} = useFetch('http://localhost:8000/books/last/14')


    return (
        <div className="wrap-detail">
            {error && <div>error</div>}
            {pending && <div>Loading....</div>}
            {data && (
                <div>
                    <img className="detail-thumbnail" src={data[0].img} alt={data[0].title}></img>
                    <h2 className="detail-title">{data[0].title}</h2>
                    <p className="writter">Karya : {data[0].writter}</p>
                    <div className="desc">{data[0].desc}</div>
                </div>
            )}
            {book && <Book books={book} title="More recomended for you"/> }
        </div>
    );
}
 
export default Detail;