import * as React from 'react'

interface Props {
  text?: string
}

const App: React.StatelessComponent<Props> = (props: Props) => {
  return <div>{props.text}</div>
}

App.defaultProps = {
  text: 'nothing',
}

export default App
