import ScrollReveal from 'scrollreveal'

const scrollAnimation = () => {
  const setup = () => {
    setFadeIn()
    setFadeInDelay()
    setFadeInUp()
    setFadeInRightDelay1000()
    setVisibleInvisible()
    setFadeInRightNotReset()
  }
  const setFadeIn = () => {
    ScrollReveal().reveal('.fadeIn', { 
      duration: 2000,
      reset: true
    });
  }
  const setFadeInDelay = () => {
    for (let i = 0; i < 5; i++) {
      ScrollReveal().reveal(`.fadeInDelay${i * 200}`, { 
        duration: 1000,
        delay: i * 200,
        reset: true
      });
    }
  }
  const setFadeInUp = () => {
    ScrollReveal().reveal('.fadeInUp', { 
      duration: 2000,
      origin: 'bottom',
      distance: '50px',
      reset: true
    });
  }
  const setFadeInRightDelay1000 = () => {
    ScrollReveal().reveal('.fadeInRight', { 
      duration: 1600,
      origin: 'right',
      distance: '50px',
      reset: true,
    });
  }
  const setFadeInRightNotReset = () => {
    ScrollReveal().reveal('.fadeInRightNotReset', { 
      duration: 1600,
      origin: 'right',
      distance: '50px',
      reset: false,
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
