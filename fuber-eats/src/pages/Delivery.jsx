import React from 'react'

export default function Delivery() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://fubereats-backend-production.up.railway.app/products')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setMenu(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className='delivery'>Delivery</div>
  )
}
