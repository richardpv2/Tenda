import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Boton = (props) => (
  <Pressable style={style.bttn}>
    <Text style={{ fontWeight: 600 }} {...props}>
      {props.children}
    </Text>
  </Pressable>
);

export default function AccoutScreen() {
  return (
    <View style={style.container}>
      <View style={style.userIconContainer}>
        <FontAwesome5 name={'user-alt'} size={90} color={'white'} />
      </View>
      <Text style={style.userName}>Usuario</Text>
      <Boton>Cambiar Nombre</Boton>
      <Boton>Cambiar Foto</Boton>
      <Boton>Cerrar Sesion</Boton>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userIconContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
  },
  userName: {
    marginVertical: 10,
    fontSize: 30,
  },
  bttn: {
    backgroundColor: '#9E9E9E',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 250,
    height: 40,
    marginVertical: 5,
  },
});
