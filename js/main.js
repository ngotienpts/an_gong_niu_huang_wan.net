document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    },
                });
            });
        }
    }

    // xử lý sự kiện chuyển tab
    function handleChangeTab () {
        const changTabs = document.querySelectorAll('.js__changeTab')

        if (changTabs.length === 0) return;

        changTabs.forEach((changTab)=>{
            const tabs = changTab.querySelectorAll(".js__tabItem");
            const panes = changTab.querySelectorAll(".js__tabPane");

            tabs.forEach((tab,index)=>{
                tab.onclick = function() {
                    pane = panes[index]

                    changTab.querySelector('.js__tabItem.active').classList.remove('active')
                    changTab.querySelector('.js__tabPane.active').classList.remove('active')

                    this.classList.add('active')
                    pane.classList.add('active')
                }
            })
        })
    }
    // xử lý sự kiện collapse
    function handleCollapse () {
        const collapses = document.querySelectorAll('.js__collapse')
        if (collapses.length === 0) return;
        let activeItem = null;

        collapses.forEach((collapse)=>{
            collapse.onclick = function() {
                // khi item đang mở
                if (activeItem === this) {
                    this.classList.remove('active'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    this.classList.add('active');
                    activeItem = this; 
                    
                }  
                 
            }
           
        })
    }


    // xử lý sự kiện để show dropdown
     function handleShowDropdown() {
        
        const dropdownContainers = document.querySelectorAll(".js__dropdownContainer");


        if (dropdownContainers.length === 0) return;


        dropdownContainers.forEach((dropdownContainer)=>{

            const dropdown = dropdownContainer.querySelector(".js__showDropdown");
            const dropdownContent = dropdownContainer.querySelector(".js__dropdownContent");
            const overlay = dropdownContainer.querySelector(".js__overlay");


            dropdown.onclick = function () {
                dropdownContent.classList.toggle("active");
                overlay.classList.add('active')

            };

            overlay.onclick = function () {
                dropdownContent.classList.remove("active");
                this.classList.remove("active");
            };
        })

      
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        const subMenu = document.querySelector(".js__clickShowMenuMb");
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }
    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
        dropdownSubMenu &&
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }

    // Xử lý sự kiện show search mb
    function handleShowSearchMb() {
        const searchMbs = document.querySelectorAll(".js__searchMb");

        if (searchMbs.length === 0) return;
        searchMbs.forEach((searchMb) => {
            var closeSearchMb =
                document.querySelector(".js__closeSearchMb");
            var formSearchMb = document.querySelector(".js__formSearchMb");
            const focusElement =
                formSearchMb.querySelector(".js__focusSearchMb");
            searchMb.onclick = function () {
                formSearchMb.classList.add("active");
                focusElement.focus();
            };
            closeSearchMb.onclick = function () {
                formSearchMb.classList.remove("active");
                focusElement.value = "";
            };
        });
    }
    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }
    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleShowDropdown();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleShowSearchMb();
        handleVideo169();
        // slide
        initSliderOneItems();
        initSliderThreeItems();
        initSliderFourItems();
        handleCollapse();
        handleChangeTab();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});