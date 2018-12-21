let btn = document.querySelector('.btn'),
  title = document.querySelector('h1');

setInterval(() => {
  document.body.style.backgroundPosition = `${Math.random() *
    1000}px ${Math.random() * 1000}px`;
  document.body.style.backgroundColor = getRandomColor();
}, 500);

btn.addEventListener('click', () => {
  let value = document.querySelector('input').value,
    music = document.querySelector('.music'),
    text = '';

  music.play();

  title.innerHTML = '';
  value.split('').forEach(el => {
    let newSpan = document.createElement('span');

    newSpan.innerText = el;
    newSpan.style.position = 'absolute';
    title.append(newSpan);
  });

  document.querySelector('.row').classList.add('hide');
  title.classList.add('active');
  dance();
});

function dance() {
  let spans = title.childNodes;

  spans.forEach(el => {
    setInterval(() => {
      el.style.left = `${Number(Math.random() * 90)}%`;
      el.style.top = `${Number(Math.random() * 90)}%`;
      el.style.transform = `scale(${Number(Math.random() * 5)})`;
      el.style.color = getRandomColor();
    }, 200);
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
