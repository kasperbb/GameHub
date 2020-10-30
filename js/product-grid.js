window.addEventListener('load', () => {
    gridList();
});

const gridList = () => {
    const DOM = {
        topBarView: document.querySelector('.top-bar__view'),
        viewIcons: document.querySelectorAll('.view__icon'),
        productGrid: document.querySelector('#product-grid'),
    };

    const setActiveIcon = elem => {
        DOM.viewIcons.forEach(el => {
            el.classList.remove('active');
        });

        elem.classList.add('active');
    };

    const changeToGrid = () => {
        DOM.productGrid.classList.add('product-grid');
        DOM.productGrid.classList.remove('product-list');
    }

    const changeToList = () => {
        DOM.productGrid.classList.add('product-list');
        DOM.productGrid.classList.remove('product-grid');
    }

    DOM.topBarView.addEventListener('click', event => {

        // Check if we click on an icon
        if (event.target.classList.contains('view__icon')) {
            const clickedIcon = event.target;

            // Set active nav item
            setActiveIcon(clickedIcon);

            // Check if we click on grid
            if (event.target.classList.contains('fa-th')) {
                changeToGrid();
            }

            // Check if we click on list
            if (event.target.classList.contains('fa-th-list')) {
                changeToList();
            }
        }
    });
};