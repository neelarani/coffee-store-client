import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className=" text-center text-5xl text-purple-600 ">
        Hot Hot Clod Coffee: {loadedCoffees.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loadedCoffees.map(coffee => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
