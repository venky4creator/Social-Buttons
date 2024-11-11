const Button = props => {
  const {className, buttonText} = props
  return <button className={`${className}`}> {buttonText} </button>
}

const element = (
  <div>
    <h1>Social Buttons</h1>
    <div className='buttonContainer'>
      <Button buttonText='LIKE' className='like-button' />
      <Button buttonText='Comment' className='comment-button' />
      <Button buttonText='Share' className='share-button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
