import React from 'react';

// Take in a generic type and return object of T[] and error states.

function useFetch<T>(url: string): { response: T[] | null; error: Error | null } {
    const [response, setResponse] = React.useState<T[] | null>(null);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setResponse(data.articles)

            }catch (err) {
                setError(err)
            }
        }
        fetchData()
    }, [url])
    return {response, error}
}

export default useFetch;