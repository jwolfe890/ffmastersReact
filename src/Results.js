import React from "react";
import Pet from "./Pet.js";

const Results = ({ pets }) => {
  return (
    <div className="search">
      asdfasfasfasd f22f3223f23f
      {/* {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${
              pet.contact.address.state
            }`}
            id={pet.id}
          />
        ))
      )} */}
    </div>
  );
};

export default Results;
