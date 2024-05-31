export async function fetchProperties() {
    try {
        const response = await fetch('http://localhost:8080/api/properties');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
    }
}
export async function fetchAppartmentById(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching appartment:', error);
        throw error;
    }
}