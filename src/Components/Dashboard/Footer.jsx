import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Top}>
        <h4>Serviceable Cities</h4>
        <div className={styles.Footer__Top__Cities}>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Bengaluru</button>
            <button>Car Rental in Hydrabad</button>
            <button>Car Rental in Mumbai</button>
            <button>Car Rental in Delhi-NCR</button>
            <button>Car Rental in Chennai</button>
            <button>Car Rental in Pune</button>
            <button>Car Rental in Kolkata</button>
            <button>Car Rental in Ahemdabad</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Bhubaneshwar</button>
            <button>Car Rental in Chandigarh</button>
            <button>Car Rental in Coimbator</button>
            <button>Car Rental in Jaipur</button>
            <button>Car Rental in Kochi</button>
            <button>Car Rental in Mangalore</button>
            <button>Car Rental in Mysore</button>
            <button>Car Rental in Nagpur</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Surat</button>
            <button>Car Rental in Tirupati</button>
            <button>Car Rental in Trivendram</button>
            <button>Car Rental in Vadodara</button>
            <button>Car Rental in Vijaywada</button>
            <button>Car Rental in Vadodara</button>
            <button>Car Rental in Vizag</button>
          </div>
        </div>
      </div>
      <div className={styles.Footer__Bottom}>
        <div className={styles.Footer__Bottom__Column__One}>
          <div className={styles.Footer__Bottom__Column__Top}>
            <img src="https://www.revv.co.in/imgs/revvLogo.png" alt="logo" />
          </div>
          <div className={styles.Footer__Bottom__Column__Mid}>
            <button>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                alt="facebook"
              />
            </button>
            <button>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTEwLjk0OTIxOSAxNTAuNWMtMS4xOTkyMTktMjcuMTk5MjE5LTUuNTk3NjU3LTQ1Ljg5ODQzOC0xMS44OTg0MzgtNjIuMTAxNTYyLTYuNS0xNy4xOTkyMTktMTYuNS0zMi41OTc2NTctMjkuNjAxNTYyLTQ1LjM5ODQzOC0xMi44MDA3ODEtMTMtMjguMzAwNzgxLTIzLjEwMTU2Mi00NS4zMDA3ODEtMjkuNS0xNi4yOTY4NzYtNi4zMDA3ODEtMzQuODk4NDM4LTEwLjY5OTIxOS02Mi4wOTc2NTctMTEuODk4NDM4LTI3LjQwMjM0My0xLjMwMDc4MS0zNi4xMDE1NjItMS42MDE1NjItMTA1LjYwMTU2Mi0xLjYwMTU2MnMtNzguMTk5MjE5LjMwMDc4MS0xMDUuNSAxLjVjLTI3LjE5OTIxOSAxLjE5OTIxOS00NS44OTg0MzggNS42MDE1NjItNjIuMDk3NjU3IDExLjg5ODQzOC0xNy4yMDMxMjQgNi41LTMyLjYwMTU2MiAxNi41LTQ1LjQwMjM0MyAyOS42MDE1NjItMTMgMTIuODAwNzgxLTIzLjA5NzY1NyAyOC4zMDA3ODEtMjkuNSA0NS4zMDA3ODEtNi4zMDA3ODEgMTYuMzAwNzgxLTEwLjY5OTIxOSAzNC44OTg0MzgtMTEuODk4NDM4IDYyLjA5NzY1Ny0xLjMwMDc4MSAyNy40MDIzNDMtMS42MDE1NjIgMzYuMTAxNTYyLTEuNjAxNTYyIDEwNS42MDE1NjJzLjMwMDc4MSA3OC4xOTkyMTkgMS41IDEwNS41YzEuMTk5MjE5IDI3LjE5OTIxOSA1LjYwMTU2MiA0NS44OTg0MzggMTEuOTAyMzQzIDYyLjEwMTU2MiA2LjUgMTcuMTk5MjE5IDE2LjU5NzY1NyAzMi41OTc2NTcgMjkuNTk3NjU3IDQ1LjM5ODQzOCAxMi44MDA3ODEgMTMgMjguMzAwNzgxIDIzLjEwMTU2MiA0NS4zMDA3ODEgMjkuNSAxNi4zMDA3ODEgNi4zMDA3ODEgMzQuODk4NDM4IDEwLjY5OTIxOSA2Mi4xMDE1NjIgMTEuODk4NDM4IDI3LjI5Njg3NiAxLjIwMzEyNCAzNiAxLjUgMTA1LjUgMS41czc4LjE5OTIxOS0uMjk2ODc2IDEwNS41LTEuNWMyNy4xOTkyMTktMS4xOTkyMTkgNDUuODk4NDM4LTUuNTk3NjU3IDYyLjA5NzY1Ny0xMS44OTg0MzggMzQuNDAyMzQzLTEzLjMwMDc4MSA2MS42MDE1NjItNDAuNSA3NC45MDIzNDMtNzQuODk4NDM4IDYuMjk2ODc2LTE2LjMwMDc4MSAxMC42OTkyMTktMzQuOTAyMzQzIDExLjg5ODQzOC02Mi4xMDE1NjIgMS4xOTkyMTktMjcuMzAwNzgxIDEuNS0zNiAxLjUtMTA1LjVzLS4xMDE1NjItNzguMTk5MjE5LTEuMzAwNzgxLTEwNS41em0tNDYuMDk3NjU3IDIwOWMtMS4xMDE1NjIgMjUtNS4zMDA3ODEgMzguNS04LjgwMDc4MSA0Ny41LTguNjAxNTYyIDIyLjMwMDc4MS0yNi4zMDA3ODEgNDAtNDguNjAxNTYyIDQ4LjYwMTU2Mi05IDMuNS0yMi41OTc2NTcgNy42OTkyMTktNDcuNSA4Ljc5Njg3Ni0yNyAxLjIwMzEyNC0zNS4wOTc2NTcgMS41LTEwMy4zOTg0MzggMS41cy03Ni41LS4yOTY4NzYtMTAzLjQwMjM0My0xLjVjLTI1LTEuMDk3NjU3LTM4LjUtNS4yOTY4NzYtNDcuNS04Ljc5Njg3Ni0xMS4wOTc2NTctNC4xMDE1NjItMjEuMTk5MjE5LTEwLjYwMTU2Mi0yOS4zOTg0MzgtMTkuMTAxNTYyLTguNS04LjMwMDc4MS0xNS0xOC4zMDA3ODEtMTkuMTAxNTYyLTI5LjM5ODQzOC0zLjUtOS03LjY5OTIxOS0yMi42MDE1NjItOC43OTY4NzYtNDcuNS0xLjIwMzEyNC0yNy0xLjUtMzUuMTAxNTYyLTEuNS0xMDMuNDAyMzQzcy4yOTY4NzYtNzYuNSAxLjUtMTAzLjM5ODQzOGMxLjA5NzY1Ny0yNSA1LjI5Njg3Ni0zOC41IDguNzk2ODc2LTQ3LjUgNC4xMDE1NjItMTEuMTAxNTYyIDEwLjYwMTU2Mi0yMS4xOTkyMTkgMTkuMjAzMTI0LTI5LjQwMjM0MyA4LjI5Njg3Ni04LjUgMTguMjk2ODc2LTE1IDI5LjM5ODQzOC0xOS4wOTc2NTcgOS0zLjUgMjIuNjAxNTYyLTcuNjk5MjE5IDQ3LjUtOC44MDA3ODEgMjctMS4xOTkyMTkgMzUuMTAxNTYyLTEuNSAxMDMuMzk4NDM4LTEuNSA2OC40MDIzNDMgMCA3Ni41LjMwMDc4MSAxMDMuNDAyMzQzIDEuNSAyNSAxLjEwMTU2MiAzOC41IDUuMzAwNzgxIDQ3LjUgOC44MDA3ODEgMTEuMDk3NjU3IDQuMDk3NjU3IDIxLjE5OTIxOSAxMC41OTc2NTcgMjkuMzk4NDM4IDE5LjA5NzY1NyA4LjUgOC4zMDA3ODEgMTUgMTguMzAwNzgxIDE5LjEwMTU2MiAyOS40MDIzNDMgMy41IDkgNy42OTkyMTkgMjIuNTk3NjU3IDguODAwNzgxIDQ3LjUgMS4xOTkyMTkgMjcgMS41IDM1LjA5NzY1NyAxLjUgMTAzLjM5ODQzOHMtLjMwMDc4MSA3Ni4zMDA3ODEtMS41IDEwMy4zMDA3ODF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NDkyMTkgMTI0LjVjLTcyLjU5NzY1NyAwLTEzMS41IDU4Ljg5ODQzOC0xMzEuNSAxMzEuNXM1OC45MDIzNDMgMTMxLjUgMTMxLjUgMTMxLjVjNzIuNjAxNTYyIDAgMTMxLjUtNTguODk4NDM4IDEzMS41LTEzMS41cy01OC44OTg0MzgtMTMxLjUtMTMxLjUtMTMxLjV6bTAgMjE2LjgwMDc4MWMtNDcuMDk3NjU3IDAtODUuMzAwNzgxLTM4LjE5OTIxOS04NS4zMDA3ODEtODUuMzAwNzgxczM4LjIwMzEyNC04NS4zMDA3ODEgODUuMzAwNzgxLTg1LjMwMDc4MWM0Ny4xMDE1NjIgMCA4NS4zMDA3ODEgMzguMTk5MjE5IDg1LjMwMDc4MSA4NS4zMDA3ODFzLTM4LjE5OTIxOSA4NS4zMDA3ODEtODUuMzAwNzgxIDg1LjMwMDc4MXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDIzLjg1MTU2MiAxMTkuMzAwNzgxYzAgMTYuOTUzMTI1LTEzLjc0NjA5MyAzMC42OTkyMTktMzAuNzAzMTI0IDMwLjY5OTIxOS0xNi45NTMxMjYgMC0zMC42OTkyMTktMTMuNzQ2MDk0LTMwLjY5OTIxOS0zMC42OTkyMTkgMC0xNi45NTcwMzEgMTMuNzQ2MDkzLTMwLjY5OTIxOSAzMC42OTkyMTktMzAuNjk5MjE5IDE2Ljk1NzAzMSAwIDMwLjcwMzEyNCAxMy43NDIxODggMzAuNzAzMTI0IDMwLjY5OTIxOXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                alt="instagram"
              />
            </button>
            <button>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                alt="twitter"
              />
            </button>
            <button>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5MC4yNCwxMTMuOTJjLTEzLjg4OC0yNC43MDQtMjguOTYtMjkuMjQ4LTU5LjY0OC0zMC45NzZDMzk5LjkzNiw4MC44NjQsMzIyLjg0OCw4MCwyNTYuMDY0LDgwICAgIGMtNjYuOTEyLDAtMTQ0LjAzMiwwLjg2NC0xNzQuNjU2LDIuOTEyYy0zMC42MjQsMS43Ni00NS43MjgsNi4yNzItNTkuNzQ0LDMxLjAwOEM3LjM2LDEzOC41OTIsMCwxODEuMDg4LDAsMjU1LjkwNCAgICBDMCwyNTUuOTY4LDAsMjU2LDAsMjU2YzAsMC4wNjQsMCwwLjA5NiwwLDAuMDk2djAuMDY0YzAsNzQuNDk2LDcuMzYsMTE3LjMxMiwyMS42NjQsMTQxLjcyOCAgICBjMTQuMDE2LDI0LjcwNCwyOS4wODgsMjkuMTg0LDU5LjcxMiwzMS4yNjRDMTEyLjAzMiw0MzAuOTQ0LDE4OS4xNTIsNDMyLDI1Ni4wNjQsNDMyYzY2Ljc4NCwwLDE0My44NzItMS4wNTYsMTc0LjU2LTIuODE2ICAgIGMzMC42ODgtMi4wOCw0NS43Ni02LjU2LDU5LjY0OC0zMS4yNjRDNTA0LjcwNCwzNzMuNTA0LDUxMiwzMzAuNjg4LDUxMiwyNTYuMTkyYzAsMCwwLTAuMDk2LDAtMC4xNmMwLDAsMC0wLjA2NCwwLTAuMDk2ICAgIEM1MTIsMTgxLjA4OCw1MDQuNzA0LDEzOC41OTIsNDkwLjI0LDExMy45MnogTTE5MiwzNTJWMTYwbDE2MCw5NkwxOTIsMzUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                alt="youtube"
              />
            </button>
            <button>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                alt="linkedin"
              />
            </button>
          </div>
          <div className={styles.Footer__Bottom__Column__Bottom}></div>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <button>Home</button>
          <button>Tarrifs</button>
          <button>FAQ</button>
          <button>Policy</button>
          <button>Blog</button>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <h4>Have Questions?</h4>
          <h5>24/7 Customer Support</h5>
          <br />
          <h4 className={styles.GreenFont}>Contact Us</h4>
          <h4 className={styles.GreenFont}>+91-9250035555</h4>
          <h4 className={styles.GreenFont}> care@revv.co.in</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
