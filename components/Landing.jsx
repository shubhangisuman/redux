import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest, removeUser } from "../redux/actionCreator";

export default function CompA() {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  const removeOneUser = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <View>
        {users.map((user) => {
          return <Text>{user.name}</Text>;
        })}
      </View>
      <Button title="Remove" onPress={removeOneUser} />
    </>
  );
}
