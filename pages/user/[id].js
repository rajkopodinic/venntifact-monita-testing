import Link from 'next/link'

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(user => {
        return { 
            params: {id: user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users' + id);
    const data = await response.json();

    return {
        props: { user: data }
    }
}

const Details = ({ user }) => {
    return (
        <div className="flex flex-col min-h-screen p-20 bg-gray-900 text-white">
            <Link href='/'>
                <a><p className="underline pb-8">Back Home</p></a>
            </Link>
            <p className="text-xl">User Details</p>
            <p className="text-xl">{ user.name }</p>
        </div>
    );
}
 
export default Details;