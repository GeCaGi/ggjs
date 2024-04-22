import {Modal} from "bootstrap"



export default function LoginForm(){
    const REGEXP = /^((?!\.)[\w\-_.]*[^.])$/gm
    const DOMAIN = "@giorgimi.edu.it"
    function validateEmail(email){
        return email.split("@")[0].match(REGEXP) != null && email.toLowerCase().endsWith(DOMAIN)
    }    
    function validatePassword(pw){
        return pw.length >= 6 
    }

    function localCheck(form){
        var email = form[0].value
        var flag1 = validateEmail(email) ? "" : "Inserire un Indirizzo Email del Giorgi\n"
        
        var flag2 = validatePassword(form[1].value) ? "" : "Password Troppo Corta (Minimo 6 caratteri)"
        var error = flag1 != "" && flag2 != "" ? "Dati non validi" : flag1 != "" ? flag1 : flag2
        
        return error != "" ? error : null
    }

    async function serverLogin(form){
        // await fetch("http://localhost:3001/api/test", {method: "POST",body: "eating pasta is my hobby"})
    }

    function handleLogin(event){
        var error = localCheck(event.target.form)
        serverLogin(event.target.form)
    }

    return (
        
            <form>
    {/* Email input */}
    <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder="docente@giorgimi.edu.it"/>
        <label className="form-label" htmlFor="form2Example1">Indirizzo Email</label>
    </div>

    {/* Password input */}
    <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="form2Example2" className="form-control" />
        <label className="form-label" htmlFor="form2Example2">Password</label>
    </div>

    {/* 2 column grid layout for inline styling */}
    <div className="row mb-4">
        <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div>
                <div className="form-check">
                    <input id="checkbox1" type="checkbox"/>
                    <label htmlFor="checkbox1">Ricordami</label>
                </div>
                </div>
        </div>

        <div className="col">
        {/* Simple link */}
        <a href="#!">Password dimenticata?</a>
        </div>
    </div>

    {/* Submit button */}
    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4"  onClick={handleLogin}>Accedi</button>
    <div class="it-example-modal">
   <div class="modal fade" tabindex="-1" role="dialog" id="modal1" aria-labelledby="modal1Title" aria-describedby="modal1Description">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title h5 " id="modal1Title">Errore</h2>
            </div>
            <div class="modal-body">
               <p id="modal1Description"></p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" type="button">Chiudi modale</button>
            </div>
         </div>
      </div>
   </div>
</div>
    {/* Register buttons */}
    <div className="text-center">
        <p><a href="#!">Registrati</a></p>
        <p>Accedi con:</p>
        
    </div>
    </form>
    )
}