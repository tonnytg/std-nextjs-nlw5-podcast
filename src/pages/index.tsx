// SPA -> Não é redenrizado pelo Crawler ou antes do usuário acessar
// SSR -Static Server Side >
// SSG Static Side Generation

// import {useEffect} from "react";
import {log} from "util";

export default function Home(props) {
    console.log(props.episodes)
  // // SPA React padrão
  // useEffect( () => {
  //   fetch('http://localhost:3001/episodes')
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  // }, []) //quando algo mudar faça algo sideEffect

  return (
      <div>
        <h1> Index</h1>
        <p>{JSON.stringify(props.episodes)}</p>
      </div>
  )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3001/episodes')
    const data = await response.json()

    return {
        props: {
            episodes: data,
        },
        revalidate: 60 * 60 * 8,
    }
}
// SSR -> Side Server
// export async function getServerSideProps() {
//     const response = await fetch('http://localhost:3001/episodes')
//     const data = await response.json()
//
//     return {
//         props: {
//             episodes: data,
//         }
//     }
// }
