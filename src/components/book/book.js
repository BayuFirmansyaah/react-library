import {Link} from 'react-router-dom'

const Book = ({books,title}) => {
    return (
        <div>
            <h3 className='title-wrap-book-list'>{title}</h3>
            {
                books.map((book) => (
                    <div className="book-list" key={book.id}>
                        <img src={book.img} alt={book.writter}/>
                        <Link to={`/detail/book/${book.id}`}>Read More</Link>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Book;