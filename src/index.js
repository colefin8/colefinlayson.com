let links = []

async function getLinks() {
    const url = `http://localhost:3000`
    try {
        const response = await fetch(url + '/links?query=yes', {
            method: 'GET'
        })
        if (!response.ok) {
            throw new Error(`Error: response status ${response.status}`)
        }

        const json = await response.json();
        populateLinks(json) 
    } catch (error) {
        console.error(error.message)
    }
}

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