import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Expense Tracker</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item active">
        <a className="nav-link" href="/">Transactions</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Category">Categories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Wallet">Wallets</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar