import ScrollReveal from 'scrollreveal'

const scrollAnimation = () => {
  const setup = (isMobile: boolean) => {
    setFadeIn()
    setFadeInDelay()
    if (isMobile) {
      setFadeInRightWhileIsMobile()
    } else {
      setFadeInRightDelay()
    }
    setVisibleInvisible()
  }
  const setFadeIn = () => {
    ScrollReveal().reveal('.fadeIn', { 
      duration: 2000,
      reset: true
    });
  }
  const setFadeInDelay = () => {
    for (let i = 0; i < 15; i++) {
      ScrollReveal().reveal(`.fadeInDelay${i * 200}`, { 
        duration: 1000,
        delay: i * 200,
        reset: true
      });
    }
  }
  const setFadeInRightDelay = () => {
    ScrollReveal().reveal('.fadeInRight', { 
      duration: 1600,
      origin: 'right',
      distance: '50px',
      reset: true,
    });
  }
  const setFadeInRightWhileIsMobile = () => {
    ScrollReveal().reveal('.fadeInRight', { 
      duration: 2000,
      reset: true
    });
  }
  const setVisibleInvisible = () => {
    ScrollReveal().reveal('.charaImg',{
      reset: true,
      beforeReveal: function (el: HTMLElement){
        el.classList.add('charactorPop');
      },
      beforeReset: function (el: HTMLElement){
        el.classList.remove('charactorPop');
      }
    });
  }
  return { setup }
}

export default scrollAnimation
