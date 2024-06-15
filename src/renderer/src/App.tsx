import SidebarLayout from './layout/sidebar-layout.component'
import TitleBarLayout from './layout/title-bar-layout.component'

const App = (): JSX.Element => {
  return (
    <TitleBarLayout>
      <SidebarLayout>
        <h1>lol</h1>
      </SidebarLayout>
    </TitleBarLayout>
  )
}

export default App
