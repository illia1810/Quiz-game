import React, { useState, useEffect} from "react";
import { formatTime } from '../utils'

const FinalPage = ({ results, data, onReset, time }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answers) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Results</h3>
          <h2>{
            (correctAnswers === 5) ? 'Stern - You’re a very serious person!' :
                (correctAnswers === 4 ) ? 'Funny - You have a wicked sense of humour!' :
                    (correctAnswers === 3 ) ? 'Outgoing - You’re a perfect mix of funny, chill, and intelligence!' :
                        (correctAnswers < 3 ) ? 'Shy - You’re shy and reserved!' : 'None' 
          }
          </h2>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <button className="button is-success" onClick={onReset}>Try again</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;