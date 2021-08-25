import Head from 'next/head'

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

      <div className="flex-row justify-center w-full flex-1">
        <h1 className="text-4xl font-bold">Venntifact - Monita Testing</h1>
        <p className="text-xl">NextJS WebApp</p>
        <p className="text-xl">GTM ID: GTM-N8GVWKR</p>
      </div>

      <div className="flex flex-col justify-center w-full flex-1">
        <p className="text-xl">List of Users</p>
        {users.map(user => {
          return (
            <div key={user.id} className='w-full active:bg-green-500 rounded-sm hover:bg-gray-700'>
              <a className='text-sm'>{user.name}</a>
            </div>
          );
        })}
      </div>
        
    </div>
  )
}

export default Home
