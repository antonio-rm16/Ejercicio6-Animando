const text = document.querySelector('.txtini');
const words = text.innerText.split(' ');
text.innerText=null;

const divt = document.querySelector('div');

function createNode(word,index){
    const ps = document.createElement('p');
    ps.innerText = word;
    divt.appendChild(ps);
    ps.style = `--i:${index}`;  
}
words.forEach(createNode);