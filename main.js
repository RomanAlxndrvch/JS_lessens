const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');
const a = document.getElementById('a');

const smHandler = (e) => {
  e.stopPropagation();
  console.log(e.currentTarget.id);
};
const mdHandler = (e) => {
  e.stopPropagation();
  console.log(e.currentTarget.id);
};
const bigHandler = (e) => {
  console.log(e.currentTarget.id);
};

function anchorHandler(e) {
  console.log('lol');
  e.preventDefault();
}

sm.addEventListener('click', smHandler);
md.addEventListener('click', mdHandler);
bg.addEventListener('click', bigHandler);
a.addEventListener('click', anchorHandler);

var isSquare = function (n) {
  let double = n / 2;
  if (double * 2 === n) {
    return true;
  } else {
    return false;
  }
};

console.log('1');
