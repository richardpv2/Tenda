import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function InitialScreen({ setState }) {
  async function onPressAction() {
    setState(false);
  }

  return (
    <View style={style.container}>
      <Text style={style.texto}>
        En esta aplicaci&#243;n buscamos que los usuarios, sean turistas o
        locales, Est&#233;n informados sobre puntos de inter&#233;s sobre
        Corrientes Capital, desde eventos culturales y musicales, hasta
        restaurantes y boliches, consiguiendo beneficios exclusivos por usar
        nuestra aplicaci&#243;n.
      </Text>
      <Text></Text>
      <Text style={style.texto}>App desarrollada por Ricardo Orue.</Text>
      <Pressable style={style.bttn} onPress={onPressAction}>
        <Text style={style.bttnText}>CERRAR</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    zIndex: 10,
    opacity: 0.8,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
  },
  bttn: {
    backgroundColor: '#FF8C41',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 15,
  },
  bttnText: {
    color: 'white',
    fontWeight: 700,
  },
});
