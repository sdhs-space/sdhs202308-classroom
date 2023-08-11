const $todoInput = document.querySelector('.todo-input');
const $todoList = document.querySelector('.todo-list');
const $viewAll = document.querySelector('.view-all');
const $viewTodo = document.querySelector('.view-todo');
const $viewSuccess = document.querySelector('.view-success');
const $viewClear = document.querySelector('.view-clear');

$viewAll.addEventListener('click',function(){
    const $todoItems = $todoList.querySelectorAll('.todo-item');

    for(let index=0; index<$todoItems.length; index++){
        const $todoItem = $todoItems[index];
        $todoItem.classList.remove('none')    
    }
});
$viewTodo.addEventListener('click',function(){
    const $todoItems = $todoList.querySelectorAll('.todo-item');
    
    for(let index=0; index<$todoItems.length; index++){
        const $todoItem = $todoItems[index];
        const isActiveItem = $todoItem.classList.contains('active');
        $todoItem.classList.toggle('none',isActiveItem)    
    }
});
$viewSuccess.addEventListener('click',function(){
    const $todoItems = $todoList.querySelectorAll('.todo-item');
    for(let index=0; index<$todoItems.length; index++){
        const $todoItem = $todoItems[index];
        const isActiveItem = $todoItem.classList.contains('active');
        $todoItem.classList.toggle('none',!isActiveItem)    
    }
});
$viewClear.addEventListener('click',function(){
    const $todoActiveItems = $todoList.querySelectorAll('.todo-item.active');
    for(let index=0; index<$todoActiveItems.length; index++){
        const $todoActiveItem = $todoActiveItems[index];
        $todoList.removeChild($todoActiveItem);
    }
});

$todoInput.addEventListener('keydown',function(event){
    const isEnter = event.keyCode === 13;
    const isText = $todoInput.value.trim() === "";
    if(isEnter && !isText){
          const $todoItem = document.createElement('div');
          $todoItem.className = 'todo-item';

          const $todoLabel = document.createElement('label');
          const $todoCheckbox = document.createElement('input');
          $todoCheckbox.type = 'checkbox';
          $todoCheckbox.addEventListener('change',function(){
            $todoItem.classList.toggle('active',$todoCheckbox.checked);
          })

          const $todoTxt = document.createElement('span');
          $todoTxt.className = 'todo-txt';
          $todoTxt.textContent = $todoInput.value;
          $todoTxt.addEventListener('dblclick',function(){
            $todoTxt.contentEditable = true;
            $todoTxt.focus();
          });
          $todoTxt.addEventListener('focusout',function(){
              const isDelete = $todoTxt.textContent.trim() === "";
              $todoTxt.contentEditable = false;
              if(isDelete){
                $todoList.removeChild($todoItem);    
              }
          });
          $todoTxt.addEventListener('keydown',function(event){
            const isEnter = event.keyCode === 13;
            if(isEnter){
                $todoTxt.contentEditable = false;
            }
          })


          const $todoDel = document.createElement('button');
          $todoDel.className = 'todo-del';
          $todoDel.textContent = '삭제';
          $todoDel.addEventListener('click',function(){
            $todoList.removeChild($todoItem);
          })

          $todoLabel.appendChild($todoCheckbox);

          $todoItem.appendChild($todoLabel);
          $todoItem.appendChild($todoTxt);
          $todoItem.appendChild($todoDel);
          $todoList.appendChild($todoItem);

          $todoInput.value = "";
    }
});

