import React from "react"

const defaultState = {
  color: "orange",
  colorUpdate: (v) => {}
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {

  state = {
    color: "orange"
  }

  colorUpdate = (c) => {
    const storage = window.localStorage

    storage.setItem("theme", c)
    this.setState({ color: c })
  }

  componentDidMount() {
    const storage = window.localStorage
    let color = storage.getItem("theme");

    if (!color) color = "orange"
    this.setState({ color: color })
  }

  render() {

    const { children } = this.props
    const { color } = this.state

    return (
      <ThemeContext.Provider value={{ color, colorUpdate: this.colorUpdate}}>
        {children}
      </ThemeContext.Provider>
    )

  }

}

export default ThemeContext

export { ThemeProvider }
