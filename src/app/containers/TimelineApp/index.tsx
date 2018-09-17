import * as React from 'react'
import * as style from './style.css'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps } from 'react-router'
import AppHeader from 'app/components/AppHeader'
import AppCard from 'app/components/AppCard'
import PostForm from 'app/components/PostForm'
import PostModel from 'app/models/PostModel'
import { STORE_ROUTER } from 'app/constants'

const posts = [
  {
    username: 'nkowne63',
    timestamp: new Date(),
    content: '今日も疲れたー'
  }
] as PostModel[]

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

    return (
      <div className={style.normal}>
        <AppHeader />
        {posts.map(content => {
          return <AppCard key={Number(content.timestamp)} content={content} />
        })}
        <PostForm username={'nkowne63!'} />
        {children}
      </div>
    )
  }
}
