import ShopIntro from "./introduction/introduction";
import Main from "./main/main";
const Shop = (username) => {
  return (
    <>
      <ShopIntro name={username.props} />
      <Main name={username.props} />
    </>
  );
};

export default Shop;