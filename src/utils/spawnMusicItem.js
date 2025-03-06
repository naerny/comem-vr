const spawnMusicItem = (event, collisionFallback) => {    
    const droppedItem = event.detail.el;
    const itemType = droppedItem.getAttribute('type');
    const instContainer = document.querySelector('#instuments-container');
    const instruments = Array.from(instContainer.children);
    const instrArr = Array.from(instruments);
    const instCount = instruments.length;
    const instByType = Array.from(instruments).filter(inst => inst.getAttribute('type') === itemType);
    let matchingCoordinates = false;

    instruments.forEach(inst => {
        Object.keys(spawnItems).forEach(type => {
            if (inst.getAttribute('position') === spawnItems[type].pos) {
                matchingCoordinates = true;
            }
        });
    });

    if (matchingCoordinates) {        
        return;
    } else {
        const newItem = document.createElement(`a-${itemType}`);
        newItem.setAttribute('position', spawnItems[itemType].pos);
        newItem.setAttribute('type', itemType);
        newItem.setAttribute('id', `${itemType}-grabbable_${instCount + 1}`);
        newItem.setAttribute('class', 'music-item');
        newItem.setAttribute('scale', spawnItems[itemType].scale);
        newItem.setAttribute('clickable', '');
        newItem.setAttribute('outline-on-event', '');
        newItem.setAttribute('simple-grab', '');
        newItem.setAttribute('obb-collider', '');
        newItem.setAttribute('listen-to__grab', `target: #${itemType}-grabbable; event: grab; emit: taken`);
        newItem.setAttribute('listen-to__drop', `target: #${itemType}-grabbable; event: drop; emit: untaken`);
        newItem.addEventListener('drop', spawnMusicItem);
        newItem.addEventListener('obbcollisionstarted', collisionFallback);
        instContainer.insertAdjacentElement('beforeend', newItem);
    }
}

const spawnItems = {
    box: {
        pos: "-.5 1.4 -.3",
        type: "box",
        id: "box-grabbable",
        class: "music-item",
        scale: "0.15 0.15 0.15",
    },
    sphere: {
        pos: "0 1.4 -.3",
        type: "sphere",
        id: "sphere-grabbable",
        class: "music-item",
        scale: "0.1 0.1 0.1",

    },
    cone: {
        pos: ".5 1.4 -.3",
        type: "cone",
        id: "cone-grabbable",
        class: "music-item",
        scale: "0.15 0.15 0.15",

    },
};

export { spawnMusicItem, spawnItems };