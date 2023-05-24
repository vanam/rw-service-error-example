import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SomeCell from 'src/components/SomeCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <SomeCell id={1} />
    </>
  )
}

export default HomePage
