 /* pre-loader js starts */


$(window).on('load', function () {
    $('#preloader').hide("slow");
    LandingLogoAnimation();
});
LandingLogoAnimation = ()=> {
    gsap.fromTo(".mainlogo", {
            y: "-1.5vw",
            opacity: 0,
        },
        {
            y: "0vw",
            opacity: 1,
            duration: 0.5,
            delay: 0.7
        }
    )

    gsap.fromTo(".logo-background", {
        y: "-1.5vw",
        opacity: 0,
    },
    {
        y: "0vw",
        opacity: 1,
        duration: 1,
        delay: 0.7
    }
    )

    gsap.fromTo(".logoText", {
            x: "-3vw",
            opacity: 0,
        },
        {
            x: "12px",
            opacity: 1,
            duration: 0.7,
            delay: 0.8
        }
    )
}

 /* pre-loader js ends */


  /* global variables */

var hamburger  = document.querySelector(".menu-btn");
var socialBox = document.querySelector(".game-box-activator");
var galleryBox = document.querySelector(".gallery-activator");

 /* global variables ends */


 /* hamburger animation starts */
let isMenuOpen = false;

hamburger.addEventListener("click", function(hamburgerAnimate){
    hamburgerAnimate.preventDefault();
    if (!isMenuOpen) {
        hamburger.classList.add("open");
    } else {
        hamburger.classList.remove("open");
    }
    
    isMenuOpen = !isMenuOpen;
        
    hamburger.classList.toggle("active");
    if (socialBox.classList.contains("active")) {
        socialBox.classList.remove("active");
    };
    if (hamburger.classList.contains("active")) {
        gsap.to(".nav-box", {
            top: "0vh",
            duration: 1,
            ease: "expo.out",
        })
        gsap.to(".nav-links", {
            opacity: 1,
            delay: 0.4,
            left: "0vw",
            stagger: 0.2,
            duration: 0.6
        })
    } else {
        gsap.to(".nav-box", {
            top: "-100vh",
            duration: 0.8,
            delay: 0.6
        })
        gsap.to(".nav-links", {
            opacity: 0,
            left: "-4vw",
            stagger: 0.1,
            duration: 0.3
        })
    }

})

/* hamburger animation for pc ends */

    
if ($(window).width() > 767) {
/* social-box animation for pc starts */
    socialBox.addEventListener("click", function(event){
        event.preventDefault();
        socialBox.classList.toggle("active");
        if (socialBox.classList.contains("active")) {
            gsap.to(".game-box", {
                height: "300px",
                borderRadius: "100px"
            })

            gsap.to(".game-box-activator", {
                opacity: 0,
                duration: 0.1
            })
        } else {
            gsap.to(".game-box", {
                height: "75px",
            })
            gsap.to(".game-box-activator", {
                opacity: 1,
                duration: 0.1,
                delay: 0.2
            })
        }
    })
/* social-box animation ends*/

galleryBox.addEventListener("click", function(){
    galleryBox.classList.toggle("active");
    if (galleryBox.classList.contains("active")) {
        gsap.to(".gallery-container", {
            height: "auto",
            duration: 2
        })
    }
    else {
    gsap.to(".gallery-container", {
        height: "80vh",
        duration: 2
    })
}
})

}
    
if ($(window).width() <= 767) {
    socialBox.addEventListener("click", function(event){
        event.preventDefault();
        socialBox.classList.toggle("active");
        if (socialBox.classList.contains("active")) {
            gsap.to(".game-box", {
                height: "200px",
                borderRadius: "100px"
            })
    
            gsap.to(".game-box-activator", {
                opacity: 0,
                duration: 0.1
            })
        } else {
            gsap.to(".game-box", {
                height: "50px",
            })
            gsap.to(".game-box-activator", {
                opacity: 1,
                duration: 0.1,
                delay: 0.2
            })
        }
    })
 
    
    galleryBox.addEventListener("click", function(){
        galleryBox.classList.toggle("active");
        if (galleryBox.classList.contains("active")) {
            gsap.to(".gallery-container", {
                height: "305vh",
                duration: 2
            })
        }
        else {
        gsap.to(".gallery-container", {
            height: "45vh",
            duration: 2
        })
    }
    })
}