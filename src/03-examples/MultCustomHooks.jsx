import { useCounter, useFecth } from '../hooks';
import { Loading } from './Loading';
import { Quote } from './Quote';

export const MultCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFecth(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad</h1>
            <hr />

            {
                isLoading ? (<Loading />) : (<Quote quote={quote} author={author} />)
            }

            <button
                className='btn btn-primary'
                onClick={() => increment(1)}
            >
                Next quote
            </button>
        </>
    )
}
