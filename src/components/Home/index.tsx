import Stacks from '../Stacks'
import * as homeStyles from './home.module.css'

const Home = () => (
  <div className={homeStyles.container}>
    <section className={homeStyles.content}>
      <div className={homeStyles.title}>
        <h1>Ruben Ponce</h1>
      </div>
      <h2 className={homeStyles.description}>
        <span>I'm a Full Stack JavaScript Developer based in Barcelona, currently working as a freelance.</span>
        <br />
        <span>
          I graduated from{' '}
          <a href='https://www.skylabcoders.com/es' target='_blank' rel='noreferrer'>
            Skylab Coders Academy
          </a>
          , and I worked at{' '}
          <a href='https://www.spotlio.com/' target='_blank' rel='noreferrer'>
            Spotlio
          </a>
          , and{' '}
          <a href='https://www.hays.es/' target='_blank' rel='noreferrer'>
            HAYS
          </a>{' '}
          for{' '}
          <a href='https://vibia.com/' target='_blank' rel='noreferrer'>
            VIBIA
          </a>{' '}
          as a Front End and Mobile Apps Developer.
        </span>
        <br /> <span>You can take a look at my projects and technologies that I have used.</span>
        <br /> <span>Anything, feel free to contact me.</span>
      </h2>
    </section>
    <Stacks />
  </div>
)

export default Home
