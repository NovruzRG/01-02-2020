// let ulTag = document.querySelector('ul');
// console.log(ulTag.firstChild.nextSibling.innerText);



// let buttonAdd = document.querySelectorAll('button')[0];
// let container = document.querySelector('.container');
// let i = 1;
// buttonAdd.addEventListener('click', function () {
//     let pTag = document.createElement('p');
//     pTag.innerText = i + '. ' + 'Hello World ';
//     container.appendChild(pTag);
//     i++;
// })

// let buttonRemove = document.querySelectorAll('button')[1];
// buttonRemove.addEventListener('click', function () {
//     if (container.children.length > 0) {
//         pTag = container.lastChild;
//         container.removeChild(pTag);
//         i--;
//     }   
// })


// let container = document.querySelector('.container');
// container.style.width = '800px';
// container.style.display = 'flex';
// container.style.flexWrap = 'wrap';
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         let divTag = document.createElement('div');
//         divTag.style.width = '100px';
//         divTag.style.height = '100px';
//         container.appendChild(divTag);
//         if (i % 2 !== 0 && j % 2 == 0 || i % 2 == 0 && j % 2 != 0) {
//             divTag.style.background = "white";
//         } else {
//             divTag.style.background = "black";
//         }
//     }
// }