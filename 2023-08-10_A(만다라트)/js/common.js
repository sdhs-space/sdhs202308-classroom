//  document.querySelectorAll() : CSS 선택자 
const $groups = document.querySelectorAll('.app .group:not(:nth-child(5)) .item:nth-child(5)');
const $middleItems = document.querySelectorAll('.app .group:nth-child(5) .item:not(:nth-child(5))')
const $items = document.querySelectorAll('.item');


for(let index=0; index<$items.length; index++){
    const $item = $items[index];
    $item.contentEditable = true;
}

for(let index=0; index<$groups.length; index++){
    const $group = $groups[index];
    $group.contentEditable = false;
}

for(let index=0; index<$middleItems.length; index++){
    const $middleItem = $middleItems[index];
    const $group = $groups[index];
    $middleItem.addEventListener('input',function(){
        $group.textContent = $middleItem.textContent; 
    })
}
