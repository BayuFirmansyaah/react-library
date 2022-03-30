import Book from '../../components/book/book'
import useFetch from '../../fetch';

const Home = () => {
    const {data:book,pending:isPending,error} = useFetch('http://localhost:8000/Books');
    const { data: trending } = useFetch('http://localhost:8000/Books/last/7');
   
    return (
        <div>
            {error && <div>Error</div>}
            {isPending && <div> Loading....</div>}
            {trending && <Book books={trending} title="Trending in this week"/>}
            {book && <Book books={book} title="Frequently read books" />}
        </div>
    );
}
 
export default Home;