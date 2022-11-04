import React from 'react'

export default function Delivery() {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const response = await fetch("https://fubereats-backend-production.up.railway.app/products")
    const json = await response.json()
      setMenu(json.menu)
  }

  useEffect(() => { getMenu() }, [])

  return (
    <div className='delivery'>Delivery</div>
  )
}
