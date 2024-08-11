interface LabelledInputType {
    label: string,
    placeholder: string,
    type?: string
}

function LabelledInput({label,placeholder,type} : LabelledInputType ){
    return (
        <div>
            <label>{label}</label>
            <input type={type || "text"} placeholder={placeholder} required/>
        </div>
    )
}

export default function Signin() {
  return (
    <div>
      <div>Sign in</div> <br />
      <div>
        <LabelledInput label="Username" placeholder="yashjain30102000@gmail.com"/> <br />
        <LabelledInput label="Password" placeholder="12345678"/><br />
        <button>Sign in</button>
      </div>
    </div>
  );
}
