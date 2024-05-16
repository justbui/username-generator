import React, { useState } from 'react';

const UsernameGeneratorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    favoriteFruit: ''
  });
  const [generatedUsername, setGeneratedUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validate date format (MM/DD/YYYY)
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    const parts = formData.dob.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month - 1, day);

    if (!dateFormat.test(formData.dob)) {
      // Invalid format
      alert('Please enter the date in MM/DD/YYYY format.');
    } else if (
      date.getMonth() + 1 !== month ||
      date.getDate() !== day ||
      date.getFullYear() !== year
    ) {
      // Invalid date (parsed components do not match input values)
      // ex. 12/32/1990 or 13/01/2000
      alert('Please enter a valid date.');
    } else {
      // Convert spaces to dashes in first name, last name, and favorite fruit
      const firstName = formData.firstName.replace(/\s/g, '-');
      const lastName = formData.lastName.replace(/\s/g, '-');
      const favoriteFruit = formData.favoriteFruit.replace(/\s/g, '-');

      try {
        const response = await fetch('/api/generate-username', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            dob: formData.dob,
            favoriteFruit,
          }),
        });
        const data = await response.json();
        setGeneratedUsername(data.username);
      } catch (error) {
        console.error('Error generating username:', error);
      }
    }
  };
  

  return (
    <div>
      <h1>Username Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="text" name="dob" onChange={handleChange} placeholder="MM/DD/YYYY" required />
        </div>
        <div>
          <label htmlFor="favoriteFruit">Favorite Fruit:</label>
          <input type="text" name="favoriteFruit" onChange={handleChange} required />
        </div>
        <button type="submit">Generate Username</button>
      </form>
      {generatedUsername && <p>Generated Username: {generatedUsername}</p>}
    </div>
  );
};

export default UsernameGeneratorForm;
