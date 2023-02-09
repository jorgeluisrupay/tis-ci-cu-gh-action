import React, { useState } from 'react'

export const AcceptCookis = () => {

    const [cookies, setcookies] = useState(false)

  return (
    <div>
        <label htmlFor="cookieCheckbox">Acepta las cookies</label>
        <input type="checkbox"  id="cookieCheckbox" onClick={()=>setcookies(!cookies)} />
        <article title="Confirmación cookies">
            {cookies ? "Cookies aceptados" : "Debes aceptar las cookies"}
        </article>
    </div>
  )
}