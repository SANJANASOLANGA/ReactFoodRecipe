import image from '../assets/backgroundImage.jpg'

function WelcomePage() {
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"contain" , height:'100%',width:'100%'}}>
      <h1>Welcome Page</h1>
    </div>
  );
}

export default WelcomePage;
