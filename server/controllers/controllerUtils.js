import fs from 'fs'

export const writeHTML = (route, res) => {
    fs.createReadStream(route).pipe(res);
}