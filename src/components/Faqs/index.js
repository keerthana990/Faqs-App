import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-container">
      <div className="faqs-head">
        <h1 className="faqs">FAQs</h1>
      </div>
      {faqsList.map(each => (
        <FaqItem key={each.id} faqDetails={each} />
      ))}
    </div>
  )
}

export default Faqs
