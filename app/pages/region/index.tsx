import type { NextPage } from 'next';
import Link from 'next/link'

const Landing: NextPage = () => {
    const stateArray = ['california', 'iowa', 'georgia', 'utah', 'arizona', 'kansas']
    return (
      <div>
        <h1>Regional Page</h1>
        {stateArray.map(state => (
          <Link href={'/region/' + state} key={state}>
            <a>
              <h3>{state}</h3>
            </a>
          </Link>
        ))}
      </div>
    )
  }

  export default Landing
