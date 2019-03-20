const products = [
    {
        title: 'product 1',
        description: 'bla bla bla',
        imageUrl: 'https://picsum.photos/200/300',
        size: '4" x 4"',
        weight: '8 oz.',
        prize1: '$1.99',
        prize2: '$1.49',
        prize3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product 2',
        description: 'bla bla bla',
        imageUrl: 'https://picsum.photos/200/300',
        size: '4" x 4"',
        weight: '8 oz.',
        prize1: '$1.99',
        prize2: '$1.49',
        prize3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product 3',
        description: 'bla bla bla',
        imageUrl: 'https://picsum.photos/200/300',
        size: '4" x 4"',
        weight: '8 oz.',
        prize1: '$1.99',
        prize2: '$1.49',
        prize3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product 4',
        description: 'bla bla bla',
        imageUrl: 'https://picsum.photos/200/300',
        size: '4" x 4"',
        weight: '8 oz.',
        prize1: '$1.99',
        prize2: '$1.49',
        prize3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product 5',
        description: 'bla bla bla',
        imageUrl: 'https://picsum.photos/200/300',
        size: '4" x 4"',
        weight: '8 oz.',
        prize1: '$1.99',
        prize2: '$1.49',
        prize3: '$0.99',
        validUntil: '04/01/2016'
    }
];



const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (array) => {
    let domString = ``;
    array.forEach((member) => {
        domString += `<div class="col-4 product">`
        domString += ` <div class="card" style="width: 18rem;">`
        domString += ` <div class="card-header">${member.title}</div>`
        domString += `  <div class="card-body">`
        domString += `  <img src="${member.imageUrl}" class="card-img-top" alt="...">`
        domString += `   <p class="card-text">${member.description}</p>`
        domString += `   <p class="card-text">${member.size}</p>`
        domString += `  </div>`
        domString += ` </div>`
        domString += `</div>`
    });
    domString = `<div class='row'>${domString}</div>`;
    printToDom('container', domString);
};

const init = () => {
    domStringBuilder(products);
};

init();