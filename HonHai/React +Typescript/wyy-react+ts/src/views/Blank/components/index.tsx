import * as React from 'react'
import { render } from 'react-dom'
import { connect } from 'dva';




interface IAppProps {}
interface IAppState {}


export default class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div>
        Hello world222
      </div>
    )
  }
}