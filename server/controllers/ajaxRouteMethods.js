import { links } from "../links.mjs";

export default {
    '/links': (req, res, headers) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(links));
    }
}