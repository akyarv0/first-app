import "./Main.css"

export const Main = () => {

    //? local veya global styling
const headerStyle = {
    color: "green",
    backgroundColor:"tomato"
}
    
  //! js alanı
  return (
    /*JSX alanı */
    <main>
      <h2 style={{ color: "red", backgroundColor: "gray" }}>MAIN SECTİON</h2>
      <h3 style={headerStyle}> Other Header</h3>

      <p className="par" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        atque minus reprehenderit asperiores exercitationem neque, voluptatibus
        mollitia eveniet sed. Ex molestias perspiciatis, nostrum cum suscipit
        placeat cumque quaerat debitis facere!
      </p>
      <p style={headerStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad assumenda animi aliquam? Id magni, voluptatibus atque neque at, omnis voluptates accusantium iste repellendus vero error distinctio illo, dolor quam.</p>
    </main>
  );
};
