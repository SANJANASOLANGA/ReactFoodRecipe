import image from '../../assets/backgroundImage.svg'

function SignUp() {
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundPosition: "center",backgroundRepeat:"no-repeat", backgroundSize:'cover' , height:'100vh',width:'100%', }}>

      {/* <h1>Welcome Page</h1> */}
    </div>
  );
}

export default SignUp;