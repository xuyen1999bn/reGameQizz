import styles from "../HomeScreen/home.scss";

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function WinGame(props) {
  return /*html*/ `
    <div class="${styles.container}">
      <div class="${styles.form}">
        <h2>Chúc Mừng Bạn, Bạn Đã Chiến Thắng!</h2>
        <div>Tổng số điểm bạn đạt được là: ${props.totalScore}</div>
        <button id="replay" class="${styles.btn}">Chơi Lại</button>
      </div>
    </div>
  `;
}

export default WinGame;
