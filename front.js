
// front.js
function sendData() {
    // Fetch data from the form
    var name = document.getElementById('name').value;
    var bio = document.getElementById('bio').value;
    var location = document.getElementById('location').value;
    var twitter = document.getElementById('twitter').value;
    var github = document.getElementById('github').value;

    // Create a URL with query parameters to pass the data
    var url = `index.html?name=${encodeURIComponent(name)}&bio=${encodeURIComponent(bio)}&location=${encodeURIComponent(location)}&twitter=${encodeURIComponent(twitter)}&github=${encodeURIComponent(github)}`;

    // Redirect to index.html with the data
    window.location.href = url;
}
