import htmlRoutes from './htmlRouteMethods.js'
import ajaxRoutes from './ajaxRouteMethods.js'

const routes = {
    ...htmlRoutes,
    ...ajaxRoutes
}

export const routeHandler = (req, res, headers) => {
    const handler = routes[req.url];
    if (handler) {
        handler(req, res, headers);
    } else {
        res.writeHead(404, headers);
        res.end('Not Found');
    }
};