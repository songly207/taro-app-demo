import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const store = configStore()

class App extends Component {
  componentDidMount () {}

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

/*
1 static methods and properties
2 lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics, defaultProps, constructor, getDefaultProps, state, getInitialState, getChildContext, getDerivedStateFromProps, componentWillMount, UNSAFE_componentWillMount, componentDidMount, componentWillReceiveProps, UNSAFE_componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, UNSAFE_componentWillUpdate, getSnapshotBeforeUpdate, componentDidUpdate, componentDidCatch, componentWillUnmount(in this order).
3 custom methods
4 render method
*/
