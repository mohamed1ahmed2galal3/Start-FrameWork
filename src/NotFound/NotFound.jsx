import React from 'react'

export default function NotFound() {
  return <>
  <div className="page-404">
  <main>
    <div className="float-bg"></div>
    <div className="content">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Page not found.</h2>
      <p className="error-desc">
        The page you are looking for might have been removed,<br></br> had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  </main>
  <footer>
    <p>© 2024 BrandName. All rights reserved.</p>
  </footer>
</div>

  </>
}
