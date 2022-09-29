import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  //   console.log(props);

  if(!isLoggedIn){
    return <h1>Giriş yapmadınız</h1>
  }
  return (
    <>
      <h1>{`${name} ${surname} ${age}`}</h1>
      {address.title} {address.zip}
      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
    isLoggedIn: false,
}

//proptypes ile hangi türde veri kabul ettiğimizi belirliyoruz
// oneoftype ile birden fazla veri türü seçmek istediğimizde kullanıyoruz.
//isrequired ise alanın boş bırakılmaması için kullanılır.
//Shape objelerin içindeki verilerin türlerini belirlemek için kullanılır

export default User;
