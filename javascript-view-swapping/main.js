const $tabContainer = document.querySelector('.tab-container');
const $tabClassNodeList = document.querySelectorAll('.tab');
const $viewClassNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {

    for (var i = 0; i < $tabClassNodeList.length; i++) {
      if ($tabClassNodeList[i] === event.target) {
        $tabClassNodeList[i].className = 'tab active';
      } else {
        $tabClassNodeList[i].className = 'tab';
      }
    }

    const dataViewValue = event.target.getAttribute('data-view');

    for (i = 0; i < $viewClassNodeList.length; i++) {
      if ($viewClassNodeList[i].getAttribute('data-view') === dataViewValue) {
        $viewClassNodeList[i].className = 'view';
      } else {
        $viewClassNodeList[i].className = 'hidden';
      }
    }

  }
});
