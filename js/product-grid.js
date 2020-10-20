window.addEventListener('load', () => {
    gridList();
});

const gridList = () => {
    const DOM = {
        topBarView: document.querySelector('.top-bar__view'),
        viewIcons: document.querySelectorAll('.view__icon'),
        productGrid: document.querySelector('#product-grid'),
    };

    // Set active icon
    const setActiveIcon = elem => {
        DOM.viewIcons.forEach(el => {
            el.classList.remove('active');
        });

        elem.classList.add('active');
    };

    // Change grid to list or list to grid
    const changeGridList = () => {
        if (DOM.productGrid.classList.contains('product-grid')) {
            DOM.productGrid.classList.add('product-list');
            DOM.productGrid.classList.remove('product-grid');
        } else {
            DOM.productGrid.classList.add('product-grid');
            DOM.productGrid.classList.remove('product-list');
        }
    };


    // Event listener on the view icons in the top bar
    DOM.topBarView.addEventListener('click', event => {

        // Check if we click on an icon
        if (event.target.classList.contains('view__icon')) {
            const clickedIcon = event.target;

            // Set active nav item
            setActiveIcon(clickedIcon);

            // Set active form
            changeGridList();
        }
    });
};