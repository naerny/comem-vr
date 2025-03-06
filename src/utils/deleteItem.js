import { playSound } from "./playSound";

let timer = null;

export function deleteItem(event) {       
    const item = event.detail.el;
    const animBox = document.querySelector('#drop-zone-anim');
    animBox.setAttribute('visible', 'true');
    animBox.setAttribute('animation', 'property: scale; from: .31 .0 .31; to: .31 .31 .31; dur: 3000; easing: linear');
   
   timer = setTimeout(() => {
    item.parentNode.removeChild(item);                        
        animBox.removeAttribute('animation');
        animBox.setAttribute('visible', 'false');        
        playSound(event);
   }, 3000);
}

export function undoDeleteItem() {
    if (!timer) return; 
    clearTimeout(timer);
    timer = null;
    animBox.removeAttribute('animation');
    animBox.setAttribute('visible', 'false');
}