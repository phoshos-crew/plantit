export const findCropByName = (name) =>
    fetch(`https://openfarm.cc/api/v1/crops/?filter=${name}`)
        .then(response => response.json())


export default {
    findCropByName,
}