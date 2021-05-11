import Orders from './Orders/Orders';
import { jayesh } from '../../Data/customers/customer-imdivisual-data'
const Profile = () => {
  return (
    <Orders userID={jayesh}/>
  );
};

export default Profile;
