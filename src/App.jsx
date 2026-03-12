import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhatIsFigma from './pages/WhatIsFigma'
import GettingAround from './pages/GettingAround'
import CoreConcepts from './pages/CoreConcepts'
import AdjacentTools from './pages/AdjacentTools'
import DeveloperMode from './pages/DeveloperMode'
import CodeExport from './pages/CodeExport'
import BestPractices from './pages/BestPractices'
import VibeCoding from './pages/VibeCoding'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-figma" element={<WhatIsFigma />} />
          <Route path="/getting-around" element={<GettingAround />} />
          <Route path="/core-concepts" element={<CoreConcepts />} />
          <Route path="/adjacent-tools" element={<AdjacentTools />} />
          <Route path="/developer-mode" element={<DeveloperMode />} />
          <Route path="/code-export" element={<CodeExport />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/vibe-coding" element={<VibeCoding />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
