function timelineOne(){
    var t1 = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            // markers:true,
            scrub:1,
            pin:true,
            end: "bottom -250%"
        }
    })
    t1
    .to("#circle #btm img",{
        rotate:"-180deg",
        scale: 1,
        stagger:.1,
        duration: 1,
        ease: Power1
    },"flag1")
    .to("#circle #top img",{
        scale: 1,
        stagger:.1,
        duration: 1,
        ease: Power1
    },"flag1")
    .to("#overlay #circle",{
        scale:.2,
        duration:1,
        ease: Power1
    },"flag1")
    .to("#overlay #smlcircle",{
        scale:0.8,
        ease: Power1
    },"flag1")
    .to("#center #cimg",{
        scale:0,
        ease: Power1
    },"flag1")
    .to("#center span",{
        opacity:"0",
        ease: Power1
    },"flag1")
    .to("#overlay #gallery",{
        bottom:"-30%",
        ease: Power1
    },"flag1")
    .to("#overlay #pinkf",{
        bottom:"0%",
        rotate: "0deg",
        delay:.3,
        ease: Power1
    },"flag1")
    .to("#overlay #pinkcircle",{
        top:"50%",
        scale: 2,
        ease: Power1
    },"flag1")
    .to("#overlay #smlcircle",{
        scale:0,
        ease: Power1
    },"flag2")
    .to("#overlay #circle",{
        scale:0,
        ease: Power1
    },"flag2")
    .to("#overlay #pinkcircle",{
        opacity: 0,
        ease: Power1
    },"flag2")
    .to("#overlay #pleft",{
        top: "0%",
        ease: Power1
    })
    .to("#overlay #pleft",{
        top: "-70%",
        delay: .2,
        ease: Power1
    })
}
function timelineTwo(){
    var t2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start:"top top",
            // markers:true,
            scrub:1,
            pin:true,
            end: "bottom -250%"
        }
    })
    t2
    .to(".circle",{
        top:"50%",
        scale: 1.5,
        stagger:.1,
        duration: 1,
        ease: Power1
    },"a")
    .to(".circle",{
        left:"50%",
        stagger:.1,
        ease: Power1
    })
    .to(".circle",{
        scale:1,
        ease: Power1
    })
    .to(".pink",{
        scale:10,
        ease: Power1
    })
    .to(".pink",{
     background:"linear-gradient(to right,#d5a7b4,#B4AAD5)",
        ease: Power1
    },"b")
    .to("#stop>h1",{
        left:"-200%",
        duration: 3,
        ease: Power1
    },"b")
    .to("#sbtm #first",{
        opacity:0,
        duration:1,
        ease: Power1
    },"b")
    .to("#sbtm #secnd",{
        opacity:1,
        delay:1,
        duration:1.5,
        ease: Power1
    },"b")
    .to(".rec",{
        top:"0%",
        stagger:.3,
        duration:2,
        ease: Power1
    })
    .to(".srec",{
        left:"-35%",
        duration:2,
        ease: Power1
    },"c")
    .to(".bar",{
        left:"-35%",
        duration:2,
        ease: Power1
    },)
}

timelineOne();
timelineTwo();
