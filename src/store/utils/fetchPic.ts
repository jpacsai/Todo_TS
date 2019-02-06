export default (inputText: string): any => 
  fetch(`http://en.wikipedia.org/w/api.php?action=query&titles=${inputText}&prop=pageimages&format=json&pithumbsize=100`)
  .then((response: any) => 
    JSON.parse(response)
  )
  .then(jsonObj => {
    console.log(jsonObj);
    return 'https://res.cloudinary.com/jutzee/image/upload/v1545401659/white.jpg'; // change this
  })
  .catch(error => {
    console.error('Error:', error);
    return 'https://res.cloudinary.com/jutzee/image/upload/v1545401659/placeholder.png';
  });