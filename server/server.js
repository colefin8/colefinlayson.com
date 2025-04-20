import http from 'http'
import url from 'url'
const PORT = process.env.PORT

const links = {
    'AI': {
        'Digital Tar Pits': 'https://www.youtube.com/watch?v=vC2mlCtuJiU&pp=ygUMa3lsZSBoaWxsIGFp',
        'Tracing the Thoughts of a Large Language Model': 'https://www.anthropic.com/news/tracing-thoughts-language-model',
    },
    'MTG': {
        'Scryfall': 'https://www.scryfall.com',
        'Archidekt': 'https://archidekt.com/folders/655752',
        'EDHRec': 'https://edhrec.com/',
    }
}

const server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (['GET', 'POST'].indexOf(req.method) > -1) {
        console.log(url.parse(req.url))
        switch (url.parse(req.url, true).pathname) {
            case '/links':
                res.writeHead(200, headers);
                res.end(JSON.stringify(links))
            default:
                return;
        }
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);

})

server.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})