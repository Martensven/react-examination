const ShuffleArray = (array) => {
    return array
        .map((item) => ({ ...item, sort: Math.random() })) // Lägg till ett slumpvärde
        .sort((a, b) => a.sort - b.sort) // Sortera baserat på slumpvärdet
        .map(({ sort, ...item }) => item); // Ta bort slumpvärdet
};

export default ShuffleArray