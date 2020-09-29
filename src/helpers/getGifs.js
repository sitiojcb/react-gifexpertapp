export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3jSX0TttTLhmjW4IgVEDkkFuB2nT63ms`;

    //const url = '';
    const resp = await fetch(url);
    const { data } = await resp.json();
    //console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(gifs);
    //setImages(gifs);//comenta ahora fuera del componente usa
    return gifs;
}