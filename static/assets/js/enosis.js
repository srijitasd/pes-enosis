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