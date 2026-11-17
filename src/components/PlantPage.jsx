import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to store the full list of plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // State to track the current search input text
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants from the JSON server when the component first mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Append a newly created plant to state so it renders immediately
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // Filter plants case-insensitively by matching the search query against plant names
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;