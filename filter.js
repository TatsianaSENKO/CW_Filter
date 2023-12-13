const filter = function() {

    let filterElem = document.querySelector('#portfolio');

    if(!filterElem) return;

    let filterListElem = filterElem.querySelectorAll('ul:first-of-type li');
    let contentListElem = filterElem.querySelectorAll('ul:last-of-type li');

    filterListElem.forEach(function(item) {

        item.addEventListener('click', function(event) {
            filterListElem.forEach(function(item) {
                item.classList.remove('active');
            });

            event.target.classList.add('active');

            let filter = event.target.dataset.filter;

            contentListElem.forEach(function(item) {
                if (item.dataset.filter == filter) item.classList.add('active');
                else if (filter == 'all') item.classList.add('active');
                else item.classList.remove('active');

            });

        });

    });
};

window.addEventListener('load', function() {

    filter();

});