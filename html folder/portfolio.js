gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 2,
    effects: true,
})

window.scrollTo(0, 0)
smoother.scrollTo(0, true)

let home = document.querySelector(".home-page")

home.addEventListener("click", () => {
    smoother.scrollTo(0, true, )
})

let about = document.querySelector(".about-page")

about.addEventListener("click", () => {
    smoother.scrollTo(".about", true, "top top")
})

let skills = document.querySelector(".skills-page")

skills.addEventListener("click", () => {
    smoother.scrollTo(".skills", true, "0.2% top", {
        ease: "power2.in"
    })
})

let connect = document.querySelector(".connect-page")

connect.addEventListener("click", () => {
    smoother.scrollTo(".connect", true, "top top")
})

gsap.fromTo(".home", {
    scale: 1,
    y: 0,
}, {
    scale: 0.9,
    y: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "top top",
        pin: ".home",
        pinSpacing: false,
        scrub: true,
    }
})

gsap.fromTo(".right", {
    display: "none"
}, {
    display: "block",
    clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 150%",
        scrub: true,
        once: true

    }
})

gsap.fromTo(".right img", {
    scale: 1.5,
}, {
    scale: 1,
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 150%",
        scrub: true,
        once: true
    }
})

gsap.fromTo(".image-name", {
    y: 100,
}, {
    y: 0,
    scrollTrigger: {
        trigger: ".right",
        start: "top 50%",
        end: "bottom 100%",
        scrub: true,
        once: true
    }
})

let navBar = [".logo", ".pages p", ".hire"]

gsap.fromTo(navBar, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    delay: 0.5,
    ease: "back.out",
})

let splitLines = new SplitText(".tag", { type: "lines" })

gsap.fromTo(splitLines.lines, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0,
    delay: 0.7,
    stagger: 0.12,
    duration: 0.5,
    ease: "power2.out",
})

let splitFromLines = new SplitText(".from", { type: "lines" })

gsap.fromTo(splitFromLines.lines, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0,
    delay: 0.7,
    stagger: 0.12,
    duration: 0.5,

    ease: "power2.out",
})

let splitWords = new SplitText(".left p", { types: "lines" })

gsap.from(splitWords.lines, {
    scrollTrigger: {
        trigger: ".about",
        start: "top 15%",
        end: "top -1%",
        scrub: true,
        ease: "power2.out",
        once: true

    },
    opacity: 0.1,
    stagger: 0.5,
})

let sloganLines = new SplitText(".slogan", { types: "lines" })

gsap.fromTo(sloganLines.lines, {
    opacity: 1,
    y:0,
}, {
    scrollTrigger: {
        trigger: ".slogan",
        start: "top 35%",
        end: "50% 25%",
        scrub: true,
        ease: "power2.out",
    },
    y:-50,
    opacity: 0,
    stagger: 0.3,
})

let footName = new SplitText(".footer-name h1", { type: "chars" })

gsap.fromTo(footName.chars, {

    y: 200,
}, {
    scrollTrigger: {
        trigger: ".footer-name",
        start: "top 90%",
        end: "bottom 102%",
        scrub: true,
        ease: "power2.out",
        transformOrigin: "center"
    },
    y: 0,
    opacity: 1,
    stagger: {
        amount: 1,
        from: "center"
    }
})

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "back.out"
    });
});

const name = document.querySelector(".name")

name.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 5,
    })

    name.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
        })
    })
})

gsap.fromTo(".skills-title", {
    scale: 90,
    x: 625,
    y: 600,
    rotation: 90,
    ease: "expo.inOut",
}, {
    scale: 1,
    x: 0,
    y: 0,
    rotation: 0,
    scrollTrigger: {
        trigger: ".skills",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
})

document.getElementById("year").textContent = new Date().getFullYear()

function updateTime() {
    const now = new Date()
    const time = now.toLocaleTimeString()

    document.getElementById("time").textContent = time
}

updateTime()
setInterval(updateTime, 1000)


window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(InertiaPlugin)

    let oldX = 0,
        oldY = 0,
        deltaX = 0,
        deltaY = 0

    const root = document.querySelector('.mwg_effect000')
    root.addEventListener("mousemove", (e) => {
        deltaX = e.clientX - oldX;
        deltaY = e.clientY - oldY;
        oldX = e.clientX;
        oldY = e.clientY;
    })

    root.querySelectorAll('.media').forEach(el => {

        el.addEventListener('mouseenter', () => {

            const tl = gsap.timeline({
                onComplete: () => {
                    tl.kill()
                }
            })
            tl.timeScale(1.2)

            const image = el.querySelector('img')
            tl.to(image, {
                inertia: {
                    x: {
                        velocity: deltaX * 30,
                        end: 0
                    },
                    y: {
                        velocity: deltaY * 30,
                        end: 0
                    },
                },
            })
            tl.fromTo(image, {
                rotate: 0
            }, {
                duration: 0.4,
                rotate: (Math.random() - 0.5) * 30,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut'
            }, '<')
        })
    })
})
