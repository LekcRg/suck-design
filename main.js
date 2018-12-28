let btn = document.querySelector('.btn'),
  title = document.querySelector('h1'),
  bgTime = 500,
  input = document.querySelector('input');

bgInterval = setInterval(() => {
  document.body.style.backgroundPosition = `${Math.random() *
    1000}px ${Math.random() * 1000}px`;
  document.body.style.backgroundColor = getRandomColor();
}, bgTime);

btn.addEventListener('click', () => start());
input.addEventListener('keyup', ev => {
  if (ev.keyCode === 13) start();
});

const start = () => {
  let value = input.value,
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
};

function dance() {
  let spans = title.childNodes;

  spans.forEach(el => {
    setInterval(() => {
      el.style.left = `${Number(Math.random() * 90)}%`;
      el.style.top = `${Number(Math.random() * 90)}%`;
      el.style.color = getRandomColor();
    }, 200);

    colorInterval = setInterval(() => {}, 200);
  });

  setTimeout(() => {
    bgInterval.stop;
    spans.forEach(el => {
      setInterval(() => {
        el.style.transform = `scale(${Number(
          Math.random() * 5
        )}) rotate(${Number(Math.random() * 1000)}deg)`;
      }, 200);
    });
  }, 5500);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
