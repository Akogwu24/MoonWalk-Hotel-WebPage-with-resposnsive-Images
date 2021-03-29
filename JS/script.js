const images = document.querySelectorAll('img');

const sizes = {
  showcase: '100vw',
  reason: '(max-width: 799px) 100vw, 372px',
  feature: '(max-width: 799px) 100vw, 558px',
  story: '(max-width: 799px) 100vw, 670px"',
};

function makeSrcset(imgSrc) {
  const markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + '-' + width + '.jpg ' + width + 'w';
    width += 400;
  }
  return markup.join();
}
for (let image = 0; image < images.length; image++) {
  let imgSrc = images[image].getAttribute('src');

  imgSrc = imgSrc.slice(0, -8);
  let srcset = makeSrcset(imgSrc);
  console.log(srcset);
  images[image].setAttribute('srcset', srcset);
  let type = images[image].getAttribute('data-type');
  let size = sizes[type];
  images[image].setAttribute('sizes', size);
}
