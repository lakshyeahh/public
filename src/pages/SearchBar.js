import React, { useState, useEffect } from 'react';

const SearchBar = ({ specialties, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSpecialtyChange = (event) => {
        setSelectedSpecialty(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchQuery, selectedSpecialty);
    };

    return (
        <div>
        
            <select id="specialty" value={selectedSpecialty} onChange={handleSpecialtyChange}>
                <option value="">Select Specialty</option>
                {specialties.map((specialty, index) => (
                    <option key={index} value={specialty}>
                        {specialty}
                    </option>
                ))}
            </select>
            <button className="search" onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;
