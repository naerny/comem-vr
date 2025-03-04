let timer = null;

export function deleteItem(event) {
    const dropZone = event.detail.dropZone;    
    const item = event.detail.el;
    console.log('event', event)
   
   timer = setTimeout(() => {
    item.parentNode.removeChild(item);                
        console.log('item deleted', item);
   }, 3000);
}

export function undoDeleteItem() {
    if (!timer) return; 
    clearTimeout(timer);
    timer = null;
}