import React, { useState } from 'react';


function ModalForm() {

  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);




  return (
    <>

      <button className='modalbtn' onClick={() => {
        setShowModal(!showModal);
      }} disabled={showModal}>Open Modal</button>


      {showModal && (
        <div className="modal">

          <div className="modal-content">


            <span className="close" onClick={() => {
              setShowModal(!showModal);
            }}>×</span>


            {isLogin ? (
              <div>

                <h3>Login</h3>

                <form>

                  <label>Email:</label>
                  <input type="email" required />

                  <label>Password:</label>
                  <input type="password" required />

                  <button type="submit">Login</button>

                </form>


                <p onClick={()=> {setIsLogin(false)}}>Don't have an account? Register</p>

              </div>

            ) : (   //ELSE PART

              <div>

                <h3>Register</h3>

                <form>

                  <label>Email:</label>
                  <input type="email" required />

                  <label>Password:</label>
                  <input type="password" required />

                  <label>Confirm Password:</label>
                  <input type="password" required />

                  <button type="submit">Register</button>

                </form>

                <p onClick={()=> { setIsLogin(true)}}>Already have an account? Login</p>

              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
}

export default ModalForm;
