// animations LandingPage
export const containerLanding = {
    hidden: {opacity:0,},
    show: {
        opacity:1,
        transition: {
            duration:2
        }
    },
}
export const PlanetAnimation = {
    hidden:{
        opacity:0,
        y:"-150%",
    },
    show:{
        opacity:1,
        y:"0%",
        transition: {
            duration:2, 
            delay:1.5,
            type:"spring",
            bounce:0.5,
        }
    }
}
export const WhiteShadowAnimation = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            duration:2,
            delay:1,
        }
    }
}
export const TitleAnimation = {
    hidden:{
        opacity:0,
        x:"-150%"
    },
    show:{
        opacity:1,
        x:"0%",
        transition:{
            duration:2,
            delay:2,
            type:"spring",
            bounce:0.4
        }
    }
}
export const ButtonAnimation = {
    hidden: {
        opacity:0,
        y:"350%"
    },
    show:{
        opacity:1,
        y:"0%",
        transition:{
            duration:3,
            delay:2,
            type:"spring",
            bounce:0.3
        }
    }
}
