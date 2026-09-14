history.scrollRestoration = "manual";
window.scrollTo(0,0);
window.onload=function(){
    const introScreen = document.getElementById("intro-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const homePage = document.getElementById("home-page");

    document.body.style.overflow ="hidden";

    setTimeout(function(){
        introScreen.style.opacity="0";

        setTimeout(function(){
            introScreen.style.display="none";
            welcomeScreen.classList.add("show");

            setTimeout(function(){
                welcomeScreen.style.opacity="0";

                setTimeout(function(){
                    welcomeScreen.style.display= "none";
                    homePage.classList.add("show-home");
                    document.querySelector(".navbar").style.visibility = "visible";
                    document.body.style.overflow = "auto";

                    window.scrollTo(0,0);
                }, 1000);
            }, 2500);
        }, 1000);
    }, 5000);
};

/* Product Detail section - all sarees*/

document.querySelectorAll(".view-product-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const code = button.dataset.product;

        let productDetail;
        if(code === "HLCB001"){
            productDetail = document.getElementById("product-detail");
        } else {
            productDetail = document.getElementById("product-detail-" + code);
        }

        productDetail.style.display = "block";
        productDetail.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });        
});

/* Close Product Detail */
document.querySelectorAll(".product-close-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const productDetail = button.closest(".product-detail");
        productDetail.style.display = "none";
        document.getElementById("collections").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* product gallery*/
document.querySelectorAll(".product-detail").forEach(function(productDetail){
    const mainMedia = productDetail.querySelector(".product-main-media");
    const thumbnails = productDetail.querySelectorAll(".product-thumbnail");
    const videoThumbnail = productDetail.querySelector(".video-thumbnail");

/* Image click */
thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        
        thumbnail.classList.add("active");
        mainMedia.innerHTML = `
             <img
                 src="${thumbnail.src}"
                 alt="${thumbnail.alt}"
            >
        `;         
    });
});

/* Video Click */
if(videoThumbnail){
    videoThumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        const videoSource = videoThumbnail.querySelector("source").src;
        mainMedia.innerHTML = `
            <video controls autoplay playsinline>
                <source
                    src="${videoSource}"
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
        `;  
    });
    
}
});   

history.scrollRestoration = "manual";
window.scrollTo(0,0);
window.onload=function(){
    const introScreen = document.getElementById("intro-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const homePage = document.getElementById("home-page");

    document.body.style.overflow ="hidden";

    setTimeout(function(){
        introScreen.style.opacity="0";

        setTimeout(function(){
            introScreen.style.display="none";
            welcomeScreen.classList.add("show");

            setTimeout(function(){
                welcomeScreen.style.opacity="0";

                setTimeout(function(){
                    welcomeScreen.style.display= "none";
                    homePage.classList.add("show-home");
                    document.querySelector(".navbar").style.visibility = "visible";
                    document.body.style.overflow = "auto";

                    window.scrollTo(0,0);
                }, 1000);
            }, 2500);
        }, 1000);
    }, 5000);
};

/* Product Detail section - all sarees*/

document.querySelectorAll(".view-product-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const code = button.dataset.product;

        let productDetail;
        if(code === "HLCB001"){
            productDetail = document.getElementById("product-detail");
        } else {
            productDetail = document.getElementById("product-detail-" + code);
        }

        productDetail.style.display = "block";
        productDetail.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });        
});

/* Close Product Detail */
document.querySelectorAll(".product-close-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const productDetail = button.closest(".product-detail");
        productDetail.style.display = "none";
        document.getElementById("collections").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* product gallery*/
document.querySelectorAll(".product-detail").forEach(function(productDetail){
    const mainMedia = productDetail.querySelector(".product-main-media");
    const thumbnails = productDetail.querySelectorAll(".product-thumbnail");
    const videoThumbnail = productDetail.querySelector(".video-thumbnail");

/* Image click */
thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        
        thumbnail.classList.add("active");
        mainMedia.innerHTML = `
             <img
                 src="${thumbnail.src}"
                 alt="${thumbnail.alt}"
            >
        `;         
    });
});

/* Video Click */
if(videoThumbnail){
    videoThumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        const videoSource = videoThumbnail.querySelector("source").src;
        mainMedia.innerHTML = `
            <video controls autoplay playsinline>
                <source
                    src="${videoSource}"
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
        `;  
    });
    
}
});

history.scrollRestoration = "manual";
window.scrollTo(0,0);
window.onload=function(){
    const introScreen = document.getElementById("intro-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const homePage = document.getElementById("home-page");

    document.body.style.overflow ="hidden";

    setTimeout(function(){
        introScreen.style.opacity="0";

        setTimeout(function(){
            introScreen.style.display="none";
            welcomeScreen.classList.add("show");

            setTimeout(function(){
                welcomeScreen.style.opacity="0";

                setTimeout(function(){
                    welcomeScreen.style.display= "none";
                    homePage.classList.add("show-home");
                    document.querySelector(".navbar").style.visibility = "visible";
                    document.body.style.overflow = "auto";

                    window.scrollTo(0,0);
                }, 1000);
            }, 2500);
        }, 1000);
    }, 5000);
};

/* Product Detail section - all sarees*/

document.querySelectorAll(".view-product-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const code = button.dataset.product;

        let productDetail;
        if(code === "HLCB001"){
            productDetail = document.getElementById("product-detail");
        } else {
            productDetail = document.getElementById("product-detail-" + code);
        }

        productDetail.style.display = "block";
        productDetail.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });        
});

/* Close Product Detail */
document.querySelectorAll(".product-close-btn").forEach(function(button){
    button.addEventListener("click", function(){
        const productDetail = button.closest(".product-detail");
        productDetail.style.display = "none";
        document.getElementById("collections").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* product gallery*/
document.querySelectorAll(".product-detail").forEach(function(productDetail){
    const mainMedia = productDetail.querySelector(".product-main-media");
    const thumbnails = productDetail.querySelectorAll(".product-thumbnail");
    const videoThumbnail = productDetail.querySelector(".video-thumbnail");

/* Image click */
thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        
        thumbnail.classList.add("active");
        mainMedia.innerHTML = `
             <img
                 src="${thumbnail.src}"
                 alt="${thumbnail.alt}"
            >
        `;         
    });
});

/* Video Click */
if(videoThumbnail){
    videoThumbnail.addEventListener("click", function(){
        thumbnails.forEach(function(item){
            item.classList.remove("active");
        });
        const videoSource = videoThumbnail.querySelector("source").src;
        mainMedia.innerHTML = `
            <video controls autoplay playsinline>
                <source
                    src="${videoSource}"
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
        `;  
    });
    
}
});

/* Mobile Hamburger Menu */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("show-menu");
});

/* Close menu after clicking a nav link */
document.querySelectorAll("#nav-links a").forEach(function(link){
    link.addEventListener("click", function(){
        navLinks.classList.remove("show-menu");
    });
});        
