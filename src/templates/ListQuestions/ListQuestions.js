import styles from '../ListQuestions/listquestions.scss';

function ListQuestions({ data }) {
	return `
    <div class="${styles.container}">
      <h1>Danh Sách các câu hỏi</h1>
      ${data
			.map((item) => {
				return `
          <div class="${styles.content}">
            <div class="${styles.item}">
              <div class="${styles.title}">Câu Hỏi</div>
              <div>${item.question}</div>
            </div>  
            <div class="${styles.item}">
              <div class="${styles.title}">Các Đáp án</div>
              <div>${item.answers
					.map((item) => {
						return `
                  <div class="${styles.answer}">
                    <div class="${styles.value}">
                      <span>${item.value}</span>
                      <span class="${styles.iscorrect}">${item.isCorrect ? 'Day la' : ''}</span>
                    </div>
                  </div>
                `;
					})
					.join('')}</div>
              </div>  
              <div class="${styles.item}">
              <div class="${styles.title}">Điểm</div>
              <div class="${styles.score}">${item.score}</div>
            </div>  
            <div class="${styles.item}">
              <div class="${styles.title}">Độ Khó</div>
              <div class="${styles.level}">${item.level}</div>
            </div>  
          </div>
        `;
			})
			.join('')}
    </div>
  `;
}
export default ListQuestions;
