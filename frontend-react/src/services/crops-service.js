export const findCropByName = (name) =>
    fetch(`https://openfarm.cc/api/v1/crops/?filter=${name}`)
        .then(response => response.json())


export const findCropById = (cropId) =>
    fetch(`https://openfarm.cc/api/v1/crops/${cropId}/`)
        .then(response => response.json())

export default {
    findCropByName, findCropById}