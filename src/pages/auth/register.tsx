// src/pages/auth/register.tsx

export default function RegisterPage() {
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      // Handle registration logic here
    }
  
    return (
      <div>
        <h1>Registration Page</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    )
  }
  