import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhatIsFigma from './pages/WhatIsFigma'
import GettingAround from './pages/GettingAround'
import CoreConcepts from './pages/CoreConcepts'
import DeveloperMode from './pages/DeveloperMode'
import CodePanel from './pages/CodePanel'
import CleanHandoff from './pages/CleanHandoff'
import AiWorkflows from './pages/AiWorkflows'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-figma" element={<WhatIsFigma />} />
          <Route path="/getting-around" element={<GettingAround />} />
          <Route path="/core-concepts" element={<CoreConcepts />} />
          <Route path="/developer-mode" element={<DeveloperMode />} />
          <Route path="/code-panel" element={<CodePanel />} />
          <Route path="/clean-handoff" element={<CleanHandoff />} />
          <Route path="/ai-workflows" element={<AiWorkflows />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
