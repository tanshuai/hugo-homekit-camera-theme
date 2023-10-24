$(window).on("load", function () {
    fixScrollspy();
    let isotopeInstances = document.querySelectorAll(".projects-container");
    let isotopeInstancesCount = isotopeInstances.length;
    if (window.location.hash && isotopeInstancesCount === 0) {
        scrollToAnchor(decodeURIComponent(window.location.hash), 0);
    }
    let child = document.querySelector(".docs-toc .nav-link.active");
    let parent = document.querySelector(".docs-toc");
    if (child && parent) {
        scrollParentToChild(parent, child);
    }
    let zoomOptions = {};
    if (document.body.classList.contains("dark")) {
        zoomOptions.background = "rgba(0,0,0,0.9)";
    } else {
        zoomOptions.background = "rgba(255,255,255,0.9)";
    }
    medium_zoom_esm_default("[data-zoomable]", zoomOptions);
    let isotopeCounter = 0;
    isotopeInstances.forEach(function (isotopeInstance, index) {
        console.debug(`Loading Isotope instance ${index}`);
        let iso;
        let isoSection = isotopeInstance.closest("section");
        let layout = "";
        if (isoSection.querySelector(".isotope").classList.contains("js-layout-row")) {
            layout = "fitRows";
        } else {
            layout = "masonry";
        }
        let defaultFilter = isoSection.querySelector(".default-project-filter");
        let filterText = "*";
        if (defaultFilter !== null) {
            filterText = defaultFilter.textContent;
        }
        console.debug(`Default Isotope filter: ${filterText}`);
        imagesLoaded(isotopeInstance, function () {
            iso = new Isotope(isotopeInstance, {
                itemSelector: ".isotope-item",
                layoutMode: layout,
                masonry: {
                    gutter: 20
                },
                filter: filterText
            });
            let isoFilterButtons = isoSection.querySelectorAll(".project-filters a");
            isoFilterButtons.forEach(
                (button) => button.addEventListener("click", (e) => {
                    e.preventDefault();
                    let selector = button.getAttribute("data-filter");
                    console.debug(`Updating Isotope filter to ${selector}`);
                    iso.arrange({ filter: selector });
                    button.classList.remove("active");
                    button.classList.add("active");
                    let buttonSiblings = getSiblings(button);
                    buttonSiblings.forEach((buttonSibling) => {
                        buttonSibling.classList.remove("active");
                        buttonSibling.classList.remove("all");
                    });
                })
            );
            incrementIsotopeCounter();
        });
    });
    function incrementIsotopeCounter() {
        isotopeCounter++;
        if (isotopeCounter === isotopeInstancesCount) {
            console.debug(`All Portfolio Isotope instances loaded.`);
            if (window.location.hash) {
                scrollToAnchor(decodeURIComponent(window.location.hash), 0);
            }
        }
    }
    document.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
            const body2 = document.body;
            if (body2.classList.contains("searching")) {
                toggleSearchDialog();
            }
        }
        if (event.key === "/") {
            let focusedElement = document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement || null;
            let isInputFocused = focusedElement instanceof HTMLInputElement || focusedElement instanceof HTMLTextAreaElement;
            if (searchEnabled && !isInputFocused) {
                event.preventDefault();
                toggleSearchDialog();
            }
        }
    });
    if (searchEnabled) {
        $(".js-search").click(function (e) {
            e.preventDefault();
            toggleSearchDialog();
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
});