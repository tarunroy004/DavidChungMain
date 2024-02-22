Shery.imageEffect("#back", {
    style: 5,
    config: {
        "a":{"value": 1.49,"range":[0,30]},"b":{"value":-0.98,"range":[-1, 1]},"aspect":{"value":1.8822947576656774},"gooey":{"value": true },"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.33,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1 },"noise_speed":{"value":1.59,"range":[0,10]},"metaball":{"value":0.20,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.15,"range":[0,100]}
    },
    gooey: true,
});

let main = document.querySelector("#main");
let h1a = document.querySelector(".h1a");
let h1 = h1a.querySelectorAll("h1");
let image = document.querySelector(".image");
let img = image.querySelectorAll("img");
ind = 0;
let anim = false;
main.addEventListener("click", function () {
if(!anim){
    anim = true;
    gsap.to(h1[ind], {
        opacity: 1,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
            anim = false;
            gsap.set(this._targets[0], { top: "100%", opacity:0, });
        },
    })
    gsap.to(img[ind], {
        opacity: 1,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
            gsap.set(this._targets[0], { top: "100%", opacity:0, });
        },
    })
    if (ind === h1.length - 1) {
        ind = 0;
    } else {
        ind++;
    }
    gsap.to(h1[ind], {
            opacity: 1,
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
    })
    gsap.to(img[ind], {
        opacity: 1,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
    })
}
})

let h1b = document.querySelector(".h1b");
let h2 = h1b.querySelectorAll("h1");
inde = 0;
let anima = false;
main.addEventListener("click", function () {
if(!anima){
    anima = true;
    gsap.to(h2[inde], {
        opacity: 1,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
            anima = false;
            gsap.set(this._targets[0], { top: "100%", opacity:0, });
        },
    })
    if (inde === h1.length - 1) {
        inde = 0;
    } else {
        inde++;
    }
    gsap.to(h2[inde], {
            opacity: 1,
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
    })
}
})

let h1c = document.querySelector(".h1c");
let h3 = h1c.querySelectorAll("h1");
index = 0;
let animat = false;
main.addEventListener("click", function () {
if(!animat){
    animat = true;
    gsap.to(h3[index], {
        opacity: 1,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
            animat = false;
            gsap.set(this._targets[0], { top: "100%", opacity:0, });
        },
    })
    if (index === h1.length - 1) {
        index = 0;
    } else {
        index++;
    }
    gsap.to(h3[index], {
            opacity: 1,
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
    })
}
})
