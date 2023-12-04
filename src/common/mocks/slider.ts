import { SlideTypeEnum } from '../enums'

export const SliderMock = [
  {
    type: SlideTypeEnum.Image,
    src: '/images/most_slide_1.webp',
    tag: 'OUR VISION',
    title: 'DESIGN',
    content:
      'Credibly leverage existing business experiences through<br>magnetic mindshare. Synergistically exploit<br>efficient partnerships world-class applications.',
    button: {
      name: 'Take A Look',
      route: '/'
    }
  },
  {
    type: SlideTypeEnum.Image,
    src: '/images/most_slide_2.webp',
    tag: 'INSPIRATION',
    title: 'MOTION',
    content:
      'Conveniently formulate progressive users for error-free<br>interfaces. Monotonectally deploy superior<br>relationships without seamless infomediaries.',
    button: {
      name: 'See More',
      route: '/'
    }
  }
]
