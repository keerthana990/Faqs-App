import {useState} from 'react'
import './index.css'

const FaqsItem = props => {
  const {faqDetails} = props
  const {id, questionText, answerText} = faqDetails
  const [isActive, setIsActive] = useState(false)

  const onToggleAnswer = () => {
    setIsActive(prevState => !prevState)
  }

  return (
    <li className="faq-item" id={id}>
      <div className="faq-header">
        <h3 className="faq-question">{questionText}</h3>
        <button className="faq-toggle-btn" onClick={onToggleAnswer type="button"}>
          <img
            src={
              isActive
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isActive ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isActive && (
        <div>
          <hr />
          <p className="faq-answer">{answerText}</p>{' '}
        </div>
      )}
    </li>
  )
}

export default FaqsItem
