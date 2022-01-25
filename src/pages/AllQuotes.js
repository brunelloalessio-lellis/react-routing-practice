import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "quote 1" },
  { id: "q2", author: "Ale", text: "quote 2" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
