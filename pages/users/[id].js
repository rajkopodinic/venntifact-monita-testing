import Link from 'next/link'

const Details = () => {
    return (
        <div className="flex flex-col min-h-screen p-20 bg-gray-900 text-white">
            <Link href='/'>
                <a><p className="underline pb-8">Back Home</p></a>
            </Link>
            <p className="text-xl">User Details</p>
        </div>
    );
}
 
export default Details;