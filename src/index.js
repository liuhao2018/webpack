
import "./style.css";
import MyImg from './icon.png'

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'hello webpack 99'

  var img = new Image();
  img.src = MyImg;

  element.classList.add('hello');
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());

