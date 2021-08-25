import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { users: data }
  }
}

const Home = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen p-20 bg-gray-900 text-white">
      <Head>
        <title>Monita</title>
      </Head>

      <div className="flex-row w-full pb-10">
        <h1 className="text-4xl font-bold">Venntifact - Monita Testing</h1>
        <p className="text-xl">GTM ID: GTM-N8GVWKR</p>
      </div>

      <div className="flex flex-col w-40 space-y-2">
        <p className="text-xl">Users</p>
        
        {users.map(user => {
          return (
            <Link href={'/user/' + user.id} key={ user.id }>
              <div className='bg-gray-800 hover:bg-blue-500 p-2'>
                <a className='text-xs'>{user.name}</a>
              </div>
            </Link>
          );
        })}
      </div>
        
    </div>
  )
}

export default Home
