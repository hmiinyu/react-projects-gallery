import { DataBus, DataEvent } from 'm2-core'

const _event = {
  scroll: (component,  {
    load = () => {},
    threshold = 50,
    eventType = '',
    dispose = false
  } = {}) => {
    const _load_data = () => {
      DataEvent.scroll(() => {
        let { page, loading } = component.state
        if (loading) return

        if (page >= 3) {
          component.setState({ loading: false })
          // 停止加载
        } else {
          page++
          component.setState({
            loading: true,
            page
          }, () => {
            load && load(component.state.page)
          })
        }
      }, { threshold });
    }

    const _change_loading = () => component.setState({ loading: false })

    if (dispose) {
      window.removeEventListener('scroll', _load_data)
      DataBus.off(eventType, _change_loading)
    } else {
      window.addEventListener('scroll', _load_data)
      DataBus.on(eventType, _change_loading)
    }
  }
}

export const event = {
  add: (name, component, options = {}) => _event[name.toLowerCase()](component, options),
  remove: (name, component, options = {}) => _event[name.toLowerCase()](component, { ...options, dispose: true }),
}
