import Card from "../UI/Card";

import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
