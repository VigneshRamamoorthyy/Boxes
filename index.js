const Box = props => {
  const {boxName, className} = props
  return (
    <div className={`box-container ${className}`}>
      <p className='box-name'>{boxName}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='main-heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='small-box' boxName='Small' />
      <Box className='medium-box' boxName='Medium' />
      <Box className='large-box' boxName='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
