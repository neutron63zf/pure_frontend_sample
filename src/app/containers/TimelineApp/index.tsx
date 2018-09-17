import * as React from 'react'
import * as style from './style.css'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps } from 'react-router'
import { STORE_ROUTER } from 'app/constants'

export interface TimelineAppProps extends RouteComponentProps<any> {
  /*
    MobX Stores will be injected via @inject()
  */
  // [STORE_ROUTER]: RouterStore;
}

export interface TimelineAppState {}

@inject(STORE_ROUTER)
@observer
export class TimelineApp extends React.Component<
  TimelineAppProps,
  TimelineAppState
> {
  constructor(props: TimelineAppProps, context: any) {
    super(props, context)
    this.state = {}
  }

  render() {
    const { children } = this.props

    return <div className={style.normal}>{children}</div>
  }
}
