import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit.
      Accusamus, fugit optio deleniti illo voluptate non pariatur beatae nam in
      quidem maxime blanditiis earum asperiores dolore temporibus error
      distinctio consequatur sunt?
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=rodrigopenafurt&show_icons=true&theme=dracula"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=rodrigopenafurt&layout=compact&theme=dracula"
        alt=""
      />
    </GithubSecao>
  </section>
)

export default Sobre
