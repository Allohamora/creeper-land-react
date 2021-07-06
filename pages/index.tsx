import React from 'react'
import type { GetStaticProps } from 'next'

interface User {
  name: string
}

interface HomeProps {
  user: User
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const user: User = await res.json();

  return {
    props: {
      user
    }
  }
}

const Home: React.FC<HomeProps> = ({ user }) => (
  <div>
    Hello {user.name}!
  </div>
)

export default Home;