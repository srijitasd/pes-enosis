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

var hamburger  = document.querySelector(".hamburger-container");
var socialBox = document.querySelector(".game-box-activator");

 /* global variables ends */


 /* hamburger animation starts */


if ($(window).width() > 571) {
    
hamburger.addEventListener("click", function(hamburgerAnimate){
    hamburger.classList.toggle("active");
    if (socialBox.classList.contains("active")) {
        socialBox.classList.remove("active");
    };
    if (hamburger.classList.contains("active")) {
        gsap.to(".handle-bar1", {
           rotateZ: 45,
           translateY: "2.4vh"
        })

        gsap.to(".handle-bar2", {
            opacity: 0
        })

        gsap.to(".handle-bar3", {
            translateY: "-2.4vh",
            rotateZ: -45
         })
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
        gsap.to(".game-box", {
            height: "5vw",
        })
        gsap.to(".game-box-activator", {
            opacity: 1,
            duration: 0.1,
            delay: 0.2
        })
    }


    else {
        gsap.to(".handle-bar1", {
            rotateZ: "0deg",
            translateY: 0
         })

         gsap.to(".handle-bar2", {
            opacity: 1
        })
 
         gsap.to(".handle-bar3", {
             rotateZ: "0deg",
             translateY: 0
          })
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

       /* social-box animation for pc starts */

socialBox.addEventListener("click", function(){
    socialBox.classList.toggle("active");
    if (socialBox.classList.contains("active")) {
        gsap.to(".game-box", {
            height: "20vw",
            borderRadius: "3vw"
        })

        gsap.to(".game-box-activator", {
            opacity: 0,
            duration: 0.1
        })
    }

    else  {
        gsap.to(".game-box", {
            height: "5vw",
        })
        gsap.to(".game-box-activator", {
            opacity: 1,
            duration: 0.1,
            delay: 0.2
        })
    }
})

      /* social-box animation for pc ends */

}


 /* hamburger animation for mobile starts */


if ($(window).width() <= 571) {
    
    hamburger.addEventListener("click", function(hamburgerAnimate){
        hamburger.classList.toggle("active");
        if (socialBox.classList.contains("active")) {
            socialBox.classList.remove("active");
        };
        if (hamburger.classList.contains("active")) {
            gsap.to(".handle-bar1", {
               rotateZ: 45,
               translateY: "1.9vh"
            })
    
            gsap.to(".handle-bar2", {
                opacity: 0
            })
    
            gsap.to(".handle-bar3", {
                translateY: "-1.9vh",
                rotateZ: -45
             })
            gsap.to(".nav-box", {
                top: "0vh"
            })
            gsap.to(".nav-links", {
                opacity: 1,
                delay: 0.4,
                left: "0vw",
                stagger: 0.2,
                duration: 0.6
            })
            gsap.to(".game-box", {
                height: "8vw",
            })
            gsap.to(".game-box-activator", {
                opacity: 1,
                duration: 0.1,
                delay: 0.2
            })
        }
    
    
        else {
            gsap.to(".handle-bar1", {
                rotateZ: "0deg",
                translateY: 0
             })
    
             gsap.to(".handle-bar2", {
                opacity: 1
            })
     
             gsap.to(".handle-bar3", {
                 rotateZ: "0deg",
                 translateY: 0
              })
              gsap.to(".nav-box", {
                top: "-100vh",
                duration: 1,
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


     /* hamburger animation for mobile starts */


      /* social-box animation for mobile starts */

socialBox.addEventListener("click", function(){
    socialBox.classList.toggle("active");
    if (socialBox.classList.contains("active")) {
        gsap.to(".game-box", {
            height: "32vw",
            borderRadius: "5vw"
        })

        gsap.to(".game-box-activator", {
            opacity: 0,
            duration: 0.1
        })
    }

    else  {
        gsap.to(".game-box", {
            height: "8vw",
        })
        gsap.to(".game-box-activator", {
            opacity: 1,
            duration: 0.1,
            delay: 0.2
        })
    }
})

      /* social-box animation for mobile ends */
    
    }
    