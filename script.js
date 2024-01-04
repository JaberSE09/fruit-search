// List of fruits for the autocomplete
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapes", "Honeydew"];

// Function to filter and show suggestions
function searchFruit() {
    let input = document.getElementById('searchInput').value;
    input = input.toLowerCase();
    let suggestions = document.getElementById('suggestions');

    suggestions.innerHTML = '';
    if (input.length > 0) {
        let matches = fruits.filter(fruit => {
            const regex = new RegExp(`^${input}`, 'gi');
            return fruit.match(regex);
        });

        matches.forEach(match => {
            let div = document.createElement('div');
            div.innerHTML = match;
            div.addEventListener("click", function() {
                document.getElementById('searchInput').value = match;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(div);
        });
    }
}
