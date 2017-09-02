class swAPI {
    static async getPeople() {
        const results = await fetch('http://localhost:5000/people/');
        return results.json();
    }
}

export default swAPI;
