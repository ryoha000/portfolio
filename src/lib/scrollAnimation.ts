import ScrollReveal from 'scrollreveal'

const scrollAnimation = () => {
  const setup = () => {
    setFadeIn()
    setFadeInUp()
    setFadeInRightDelay1000()
    setVisibleInvisible()
  }
  const setFadeIn = () => {
    ScrollReveal().reveal('.fadeIn', { 
      duration: 2000,
      reset: true
    });
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
