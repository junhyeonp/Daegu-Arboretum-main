const content = '쓰레기 매립장에서 \n 대구 도심의 자연 명소로              ';
const text = document.querySelector('.text');
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === '\n' ? '<br/>' + '\t' : txt;
  if (i > content.length) {
    text.textContent = '';
    i = 0;
  }
}
setInterval(typing, 280);
