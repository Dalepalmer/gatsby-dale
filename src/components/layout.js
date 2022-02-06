import React from "react"
import NavBar from "./Navbar"

const pageStyles = {
  color: "#232129",
  backgroundColor: "#6fc9b0",
  padding: "3em",
  minHeight: "calc(100vh - 28px)"
}

export default function Layout({ children }) {
  return (
    <main style={pageStyles}>
      {children}
      <NavBar />
    </main>
  )
}