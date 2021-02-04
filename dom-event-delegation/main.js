var $taskListClass = document.querySelector('.task-list');

$taskListClass.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $closestItem = event.target.closest('.task-list-item');
    console.log($closestItem);
    $closestItem.remove();
  }
});
