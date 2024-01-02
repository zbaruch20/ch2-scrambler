import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <p className="my-0">&copy; 2024 Zach Baruch</p>
        <p className="my-0">Licensed under the <a href="https://github.com/zbaruch20/ch2-scrambler/blob/main/LICENSE" target="_blank">GNU General Public License v3.0</a></p>
        <p className="my-0">Scrambler API adapted from Steven Wintringham's <a href="https://colab.research.google.com/drive/11obTMYu7OnELp-KcFqZVA3UQ_E52YSaR#scrollTo=JXTyQtnqQ9R_" target="_blank">random-moves scrambler</a></p>
        <p className="my-0">Ranking logo from <a href="https://www.flaticon.com/free-icons/rank" target="_blank">IwitoStudio - FlatIcon</a></p>
      </Container>
    </footer>
  );
}