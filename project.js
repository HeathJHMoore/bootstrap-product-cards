const products = [
    {
        title: 'product 1',
        description: 'bla bla bla',
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        domString += `<h3>${member.title}</h3>`;
    });
    printToDom('container', domString);
};

const init = () => {
    domStringBuilder(products);
};

init();