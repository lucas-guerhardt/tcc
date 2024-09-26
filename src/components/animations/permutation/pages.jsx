import styles from "./permutationAnimation.module.css";
const pages = [
  {
    content: (
      <>
        <p className={styles.explanationText}>
          <span className={styles.highlighted}>Permutação</span> é basicamente o
          ato de pegar um conjunto de coisas e rearranjar tudo de todas as
          formas possíveis! Imagine que você tem uma caixa cheia de letras. Você
          joga essas letras para o ar, e cada vez que elas caem no chão, elas
          formam uma nova ordem. Esse processo de rearranjar as letras é o que a
          gente chama de <span className={styles.highlighted}>permutação</span>.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className={styles.explanationText}>
          Vamos usar a palavra{" "}
          <span className={styles.highlighted}>
            <strong>SOL</strong>
          </span>{" "}
          como exemplo. Se você jogar as letras{" "}
          <span className={styles.highlighted}>
            <strong>S</strong>
          </span>
          ,{" "}
          <span className={styles.highlighted}>
            <strong>O</strong>
          </span>
          , e{" "}
          <span className={styles.highlighted}>
            <strong>L</strong>
          </span>{" "}
          para o ar, elas podem cair em diferentes ordens, como:
        </p>
        <ul className={styles.exampleList}>
          <li>
            <span className={styles.highlighted}>
              <strong>SOL</strong>
            </span>{" "}
            (ok, essa foi a primeira, sem mudança, mas vamos jogar mais!)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>SLO</strong>
            </span>{" "}
            (opa, mudou um pouquinho)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>OSL</strong>
            </span>{" "}
            (mais uma mistura)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>OLS</strong>
            </span>{" "}
            (agora está bem diferente)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>LSO</strong>
            </span>{" "}
            (continua bem diferente)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>LOS</strong>
            </span>{" "}
            (essa foi a última possibilidade!)
          </li>
        </ul>
        <p className={styles.explanationText}>
          No final, com 3 letras diferentes, você pode formar 6 diferentes
          combinações, que são as permutações da palavra{" "}
          <span className={styles.highlighted}>
            <strong>SOL</strong>
          </span>
          . Isso é <span className={styles.highlighted}>3!</span> (fatorial de
          3).
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className={styles.explanationText}>
          Portanto, ao invés de ficarmos contanto todas as possibilidades de
          permutações em cada conjunto de caracteres, basta utilizarmos a
          fórmula do fatorial para calcular o número de permutações possíveis:
        </p>
        <h2 className={styles.nfat}>
          P<span className={styles.n}>n</span> = n!
        </h2>
        <p className={styles.explanationText}>
          Onde <span className={styles.highlighted}>n</span> é o número de
          caracteres que você tem. Então, para a palavra{" "}
          <span className={styles.highlighted}>
            <strong>SOL</strong>
          </span>
          , o número de permutações possíveis é{" "}
          <span className={styles.highlighted}>3!</span> = ou seja,{" "}
          <span className={styles.highlighted}>6</span> permutações.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className={styles.explanationText}>
          Mas o que acontece se você tiver{" "}
          <span className={styles.highlighted}>letras repetidas</span> em uma
          palavra? Por exemplo, na palavra{" "}
          <span className={styles.highlighted}>
            <strong>ABA</strong>
          </span>
          , você poderia pensar que há 6 permutações possíveis, já que
          normalmente calcularíamos{" "}
          <span className={styles.highlighted}>3!</span> (fatorial de 3). Porém,
          isso não está totalmente certo!
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className={styles.explanationText}>
          Isso acontece porque o cálculo de{" "}
          <span className={styles.highlighted}>permutação simples</span> assume
          que todas as letras são diferentes. Quando há letras repetidas, o
          número de permutações muda. Para corrigir isso, precisamos dividir o
          número total de permutações pelo{" "}
          <span className={styles.highlighted}>fatorial</span> da quantidade de
          vezes que as letras se repetem.
        </p>

        <p className={styles.explanationText}>
          Vamos usar a palavra{" "}
          <span className={styles.highlighted}>
            <strong>ABA</strong>
          </span>{" "}
          como exemplo novamente. O total de permutações para 3 letras seria{" "}
          <span className={styles.highlighted}>3!</span>, ou seja, 6. Mas como a
          letra{" "}
          <span className={styles.highlighted}>
            <strong>A</strong>
          </span>{" "}
          aparece <span className={styles.highlighted}>duas vezes</span>,
          precisamos dividir o resultado por{" "}
          <span className={styles.highlighted}>2!</span>, que é o fatorial da
          quantidade de vezes que a letra{" "}
          <span className={styles.highlighted}>
            <strong>A</strong>
          </span>{" "}
          se repete.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className={styles.explanationText}>
          Portanto, a fórmula final para o número de permutações possíveis de{" "}
          <span className={styles.highlighted}>ABA</span> é:
          <span className={styles.highlighted}>3! / 2!</span> ={" "}
          <span className={styles.highlighted}>3</span> permutações.
        </p>

        <p className={styles.explanationText}>
          Em geral, para calcular o número de{" "}
          <span className={styles.highlighted}>permutações com repetição</span>,
          a fórmula é:
          <span className={styles.highlighted}>
            n! / (n1! * n2! * ... * nk!)
          </span>
          , onde <span className={styles.highlighted}>n</span> é o número total
          de letras e <span className={styles.highlighted}>n1, n2...</span> são
          as quantidades de cada letra repetida.
        </p>
      </>
    ),
  },
];

export default pages;
