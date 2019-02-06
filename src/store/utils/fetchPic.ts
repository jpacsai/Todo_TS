export default (inputText: string): any => 
  fetch(`http://en.wikipedia.org/w/api.php?action=query&titles=${inputText}&prop=pageimages&origin=*&format=json&pithumbsize=100`,
    {
      method: "GET"
    }
    )
  .then((response: any) => response.json())
  .then(jsonObj => {
    const k = Number(Object.keys(jsonObj.query.pages));
    const url = jsonObj.query.pages[k].thumbnail.source;
    // console.log(url);
    return url;
  })
  .catch(error => {
    console.error('Error:', error);
    return 'https://res.cloudinary.com/jutzee/image/upload/v1545401659/placeholder.png';
  });