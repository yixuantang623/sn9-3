const lblinkElement = document.querySelector('.lbli');
const lbLinkElement = document.querySelector('.lblink');
const plusElement = document.querySelector('.plus');
const rectElement = document.querySelector('.rect');
const allElement = document.querySelector('#all');
const allCheckbox = document.getElementById('shopall');
const switchCheckbox = document.getElementById('switch');
const plustop = document.querySelector('.plustop');
const plusbottom = document.querySelector('.plusbottom');


document.addEventListener("DOMContentLoaded", function() {

    var upImg = document.querySelector('.BG .bgimg.up img');

    function checkImageDownload() {
        if (upImg.complete) {
          
            startAnimations();
        } else {
            upImg.addEventListener('load', startAnimations);
        }
    }

    function startAnimations() {
        var photo = document.querySelector('.mask .photo');
        photo.style.animation = "print 40s infinite linear";
        photo.style.animationDelay = "-0.2s";

        var bgup = document.querySelector('.BG .bgimg.up img');
        bgup.style.animation = "opacity 40s infinite linear";
    }
    checkImageDownload();
});

  lblinkElement.addEventListener('mouseenter', function() {

    if (switchCheckbox.checked) {
      plusElement.style.display = 'none';
        plustop.style.display = 'none';
        plusbottom.style.display = 'none';
    }else{
      plusElement.style.display = 'flex';
      plustop.style.display = 'flex';
      plusbottom.style.display = 'flex';
    };
    if (allCheckbox.checked) {
      plusElement.style.display = 'flex';
      plustop.style.display = 'block';
      plusbottom.style.display = 'block';
    }
  });

  plusElement.addEventListener('mouseenter', function() {
    if (switchCheckbox.checked) {
      plusElement.style.display = 'none';
        plustop.style.display = 'none';
        plusbottom.style.display = 'none';
    }else{
      plusElement.style.display = 'flex';
      plustop.style.display = 'flex';
      plusbottom.style.display = 'flex';
    };
    if (allCheckbox.checked) {
      plusElement.style.display = 'flex';
      plustop.style.display = 'block';
      plusbottom.style.display = 'block';
    }
  });

  lblinkElement.addEventListener('mouseenter', function() {
    rectElement.style.opacity = '1';
  });

  plusElement.addEventListener('mouseenter', function() {
    rectElement.style.opacity = '1';
  });

  
lblinkElement.addEventListener('mouseenter', function() {
    lblinkElement.style.color = '#f2f2f2';
    lbLinkElement.style.color = '#f2f2f2';
    allElement.style.color = '#f2f2f2';
  });

plusElement.addEventListener('mouseenter', function() {
    lblinkElement.style.color = '#f2f2f2';
    lbLinkElement.style.color = '#f2f2f2';
    allElement.style.color = '#f2f2f2';
  });

allElement.addEventListener('mouseenter', function() {
    lblinkElement.style.color = '#f2f2f2';
    lbLinkElement.style.color = '#f2f2f2';
    allElement.style.color = '#f2f2f2';
  });


allElement.addEventListener('mouseleave', function() {
    lblinkElement.style.color = '#75ef00';
    lbLinkElement.style.color = '#75ef00';
    allElement.style.color = '#75ef00';
  });

  lblinkElement.addEventListener('mouseleave', function() {
    if (allCheckbox.checked) {
      plusElement.style.display = 'block';
        plustop.style.display = 'block';
      plusbottom.style.display = 'block';
    }else{
      plusElement.style.display = 'none';
      plustop.style.display = 'none';
      plusbottom.style.display = 'none';
    }
  });

  plusElement.addEventListener('mouseleave', function() {
    if (allCheckbox.checked) {
      plusElement.style.display = 'block';
      plustop.style.display = 'block';
      plusbottom.style.display = 'block';
    }else{
      plusElement.style.display = 'none';
      plustop.style.display = 'none';
      plusbottom.style.display = 'none';
    }
  });

lblinkElement.addEventListener('mouseleave', function() {
    rectElement.style.opacity = '0';
  });

  plusElement.addEventListener('mouseleave', function() {
    rectElement.style.opacity = '0';
  });

lblinkElement.addEventListener('mouseleave', function() {
    lblinkElement.style.color = '#75ef00';
    lbLinkElement.style.color = '#75ef00';
    allElement.style.color = '#75ef00';
  });

plusElement.addEventListener('mouseleave', function() {
    lblinkElement.style.color = '#75ef00';
    lbLinkElement.style.color = '#75ef00';
    allElement.style.color = '#75ef00';
  });


document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", async (event) => {
        event.preventDefault();

        document.body.style.overflow = "hidden";
        let imagesLoaded = 0;

        const images = document.querySelectorAll("img");

        const imageLoadedHandler = () => {
            imagesLoaded++;

            if (imagesLoaded === images.length) {
                document.body.style.overflow = "auto";
                const target = document.querySelector(anchor.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        };

        images.forEach(img => {
            img.addEventListener("load", imageLoadedHandler);
        });

        if (images.length === 0) {
            document.body.style.overflow = "auto";
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        }
    });
});



allCheckbox.addEventListener('change', function() {

  if (allCheckbox.checked) {
    plusElement.style.display = 'block';
    plustop.style.display = 'block';
      plusbottom.style.display = 'block';
    plusElement.style.height = 'auto';
  } else {
    plusElement.style.display = 'none';
    plustop.style.display = 'none';
      plusbottom.style.display = 'none';
    plusElement.style.height = '0px';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const switchInput = document.getElementById('switch');

  switchInput.addEventListener('change', function() {
    const menuImage = document.getElementById('menuImage');
    if (switchInput.checked) {
      menuImage.src = 'https://i.imgur.com/T1ZzkQU.png';
    } else {
      menuImage.src = 'https://i.imgur.com/yv1ihX7.png';
    }
  });
});


let isPlus = true;

allElement.addEventListener('click', function() {
  if (isPlus) {
    allElement.textContent = '-';
  } else {
    allElement.textContent = '+';
  }
  
  isPlus = !isPlus;
});