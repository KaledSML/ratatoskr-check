
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <div className="brand">
          <span className="brand-icon">🐿️</span>
          <span>Ratatoskr Check</span>
        </div>
      </header>

      <section className="welcome">
        <p className="welcome-label">AUDIT MANAGEMENT TOOL</p>

        <h1>Audits, under control.</h1>

        <p className="welcome-description">
          Organize, assess, and document your
          cybersecurity audits in one place.
        </p>

        <button type="button" className="primary-button">
          Create New Audit
        </button>
      </section>

      <footer className="app-footer">
        Ratatoskr Check · Local-first audit management
      </footer>
    </main>
  )
}

export default App
