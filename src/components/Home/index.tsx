import Stacks from '../Stacks'
import * as homeStyles from './home.module.css'

const Home = () => (
  <div className={homeStyles.container}>
    <section className={homeStyles.content}>
      <div className={homeStyles.welcome}>
        <h1>Ruben Ponce</h1>
      </div>
      <h2 className={homeStyles.text}>
        I'm a Full Stack Developer from Barcelona. I was graduated in{' '}
        <a href='https://www.skylabcoders.com/es' target='_blank' rel='noreferrer'>
          Skaylab Coders Academy
        </a>
        , and I'm currently working at{' '}
        <a href='https://www.spotlio.com/' target='_blank' rel='noreferrer'>
          Spotlio
        </a>
        . You can take a look at my projects and technologies that I have used. Anything, feel free to contact me.
      </h2>
    </section>
    <Stacks />
  </div>
)

export default Home
