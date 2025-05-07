import http from 'http'
import url from 'url'


import { routeHandler } from './controllers/routes.mjs'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

const links = {
    'AI': {
        'Digital Tar Pits': 'https://www.youtube.com/watch?v=vC2mlCtuJiU&pp=ygUMa3lsZSBoaWxsIGFp',
        'Tracing the Thoughts of a Large Language Model': 'https://www.anthropic.com/news/tracing-thoughts-language-model',
        'The Art of Poison-Pilling Music Files': 'https://www.youtube.com/watch?v=xMYm2d9bmEA',
    },
    'MTG': {
        'Scryfall': 'https://www.scryfall.com',
        'Archidekt': 'https://archidekt.com/folders/655752',
        'EDHRec': 'https://edhrec.com/',
    },
    'Desktop Links': {
        'YouTube Music': 'https://music.youtube.com/',
        'YouTube': 'https://youtube.com',
        'Gmail': 'https://mail.google.com/mail/u/0/#inbox',
        'Netlify': 'https://app.netlify.com/teams/colefin8/sites',
    },
    'Cool Shit': {
        'Fast Inverse Square Root - Quake III': 'https://www.youtube.com/watch?v=p8u_k2LIZyo',
    }
}

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true)
    const pathname = reqUrl.pathname;
    const headers = {
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (['GET', 'POST'].includes(req.method)) {
        console.log(req.url)
        req.url = pathname
        routeHandler(req, res, headers)
    } else {
        res.writeHead(405, headers);
        res.end(`${req.method} is not allowed for the request.`);
    }


})

server.listen(3000, () => {
    console.log(`server running on port 3000`)
})