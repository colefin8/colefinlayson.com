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
    }
}

function getLinks() {
    populateLinks(links)
}

// async function getLinks() {
//     const url = `http://localhost:3000`
//     try {
//         const response = await fetch(url + '/links?query=yes', {
//             method: 'GET'
//         })
//         if (!response.ok) {
//             throw new Error(`Error: response status ${response.status}`)
//         }

//         const json = await response.json();
//         populateLinks(json) 
//     } catch (error) {
//         console.error(error.message)
//     }
// }

function populateLinks(links) {
    const linksDiv = document.getElementById('links')
    for (let linkCategory in links) {
        const header = document.createElement('h3')
        const text = document.createTextNode(linkCategory)
        const ul = document.createElement('ul')
        
        header.appendChild(text)
        ul.classList.add('links-ul')

        linksDiv.appendChild(header)
        linksDiv.appendChild(ul)

        for (let link in links[linkCategory]) {
            console.log(link)
            const li = document.createElement('li')
            const anchor = document.createElement('a')
            const text = document.createTextNode(link)

            anchor.setAttribute('href', links[linkCategory][link])
            li.classList.add('link-li')
            anchor.appendChild(text)
            
            li.appendChild(anchor)
            ul.appendChild(li)
        }
    }
}

getLinks()