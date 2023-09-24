
export async function getDogApi() {
    const wait = await fetch('https://dog.ceo/api/breeds/image/random' , {
        cache : 'no-cache'
    });
    if (!wait.ok) {
        throw new Error('Failed to fetch data')
      }
    return wait.json();
}

export async function getCatApi() {
    const wait = await fetch('https://api.thecatapi.com/v1/images/search' , {
        cache : 'no-cache'
    });
    if (!wait.ok) {
        throw new Error('Failed to fetch data')
      }
    return wait.json();
}