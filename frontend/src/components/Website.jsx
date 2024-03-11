import { useState } from 'react'
import './Website.css'

export function Website() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button className="website-counter" onClick={() => setCount(prevState => prevState + 1)}>
        Contagem de cliques nova: {count}
      </button>
    </div>
  )
}
