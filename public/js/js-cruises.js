$(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var contentHeight = $('.content').height();
    var windowHeight = $(window).height();
    var percentage = scrollTop / (contentHeight - windowHeight);
    var invertedPercentage = 1 - percentage;
    var backgroundColor = 'rgb(' + Math.round(invertedPercentage * 255) + ', ' + Math.round(invertedPercentage * 255) + ', ' + Math.round(invertedPercentage * 255) + ')';
    var color = 'rgb(' + Math.round(percentage * 255) + ', ' + Math.round(percentage * 255) + ', ' + Math.round(percentage * 255) + ')';
    $('body').css({
      'background-color': backgroundColor,
      'color': color
    });
  });
  
 
  const yachtAnimation = document.querySelector('.yacht-animation');
const cruisingGuide = document.querySelector('.cruising-guide');
const video = yachtAnimation.querySelector('video');

window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    yachtAnimation.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
    cruisingGuide.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    video.play();
});

            

  
  













  
