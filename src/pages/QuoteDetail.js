import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "quote 1" },
  { id: "q2", author: "Ale", text: "quote 2" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if(!quote){
    return <p>No quote found</p>
  }

  return <>
    <h1>QuoteDetail page</h1>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
    </Route>
  </>;
};

export default QuoteDetail;
