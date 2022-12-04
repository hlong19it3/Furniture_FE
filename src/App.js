import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { adminRoutes } from './routes'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {adminRoutes.map((route, index) => {
            const Page = route.component
            let Layout = AdminLayout
            if (route.layout) {
              Layout = route.layout
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
