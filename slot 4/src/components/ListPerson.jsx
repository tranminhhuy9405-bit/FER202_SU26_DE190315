import React from 'react';

function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];

    
    const sortedPeople = [...people].sort((a, b) => {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name); 
        }
        return b.age - a.age; 
    });

    const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);
    const allTeenagers = people.filter(person => person.age >= 13 && person.age <= 19);
    const isEveryOneTeenager = people.every(person => person.age >= 13 && person.age <= 19);
    const isAnyTeenager = people.some(person => person.age >= 13 && person.age <= 19);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial', lineHeight: '1.6' }}>
            <h1>1. List of People (Sorted by Name ASC, Age DESC)</h1>
            
           
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>STT</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPeople.map((person, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{person.name}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{person.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 style={{ marginTop: '30px' }}>2. Find the first person off the people array is teenager</h3>
            <div>
                {firstTeenager ? (
                    <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
                ) : (
                    <p>No teenager found.</p>
                )}
            </div>

            <h3>3. Find all person of the people array is teenager</h3>
            <div>
                <ul>
                    {allTeenagers.map((person, index) => (
                        <li key={index}>{person.name} - {person.age} years old</li>
                    ))}
                </ul>
            </div>
<h3>4. Check if every person of the people array is teenager, which should return true or false</h3>
            <div>
                <p>{isEveryOneTeenager ? 'True' : 'False'}</p>
            </div>

            <h3>5. Checks if any person of the people array is teenager, which should return true or false</h3>
            <div>
                <p>{isAnyTeenager ? 'True' : 'False'}</p>
            </div>
        </div>
    );
}

export default ListPerson;