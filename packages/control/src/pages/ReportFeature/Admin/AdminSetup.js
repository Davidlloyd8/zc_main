import React from "react"
import styles from "./reports.module.css"
import { Container } from "react-bootstrap"

export const AdminSetup = props => {
  const Continue = e => {
    e.preventDefault()
    props.nextStep(1)
  }

  return (
    <Container className={styles.formcontainer}>
      <br />
      <div className="text-right">
        <button
          className={`btn btn-primary ${styles.btnViewComplaint}`}
          onClick={Continue}
        >
          View Complaint
        </button>
      </div>
    </Container>
  )
}

export default AdminSetup
