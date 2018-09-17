import * as React from 'react'
import * as style from './style.css'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps } from 'react-router'
import AppHeader from 'app/components/AppHeader'
import AppCard from 'app/components/AppCard'
import PostForm from 'app/components/PostForm'
import PostStore from 'app/stores/PostStore'
import { STORE_ROUTER, STORE_POST } from 'app/constants'

export interface TimelineAppProps extends RouteComponentProps<any> {
  /*
    MobX Stores will be injected via @inject()
  */
  // [STORE_ROUTER]: RouterStore;
  // [STORE_POST]: PostStore;
}

export interface TimelineAppState {}

@inject(STORE_ROUTER, STORE_POST)
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
    const postStore = this.props[STORE_POST] as PostStore
    const { children } = this.props

    return (
      <div className={style.normal}>
        <AppHeader />
        {postStore.timeline.map(content => {
          return <AppCard key={content.timestamp} content={content} />
        })}
        <PostForm username={'anonymous'} postTodo={postStore.addPost} />
        {children}
      </div>
    )
  }
}
