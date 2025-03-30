import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Eventos = [
  {
    titulo: 'Ricardo Arjona en Corrientes',
    subtitulo: 'Tour Blanco y Negro | Arjona Volver 2023',
    fecha: '3 de Diciembre',
    ubicacion: '',
    img: require('../assets/arjona.jpg'),
  },
  {
    titulo: 'Peña de las ciudades',
    subtitulo: 'Para disfrutar con toda la familia!',
    fecha: 'Todos los domingos',
    ubicacion: '',
    img: require('../assets/pe.jpg'),
  },
  {
    titulo: 'Feria de artesanos',
    subtitulo:
      'Productos manufacturados en cuero madera, tejido, dulces regionales, comidas típicas y floricultura.',
    fecha: 'Viernes, sábados, domingos y feriados',
    ubicacion: '',
    img: require('../assets/artesanos.jpg'),
  },
];

export default function EventosScreen() {
  return (
    <ScrollView style={styles.container}>
      {Eventos.map((evento) => (
        <View style={styles.containerItemEvento}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={evento.img}
          />
          <View
            style={{
              width: '100%',
              height: 100,
              position: 'absolute',
              bottom: 0,
              left: 0,
              backgroundColor: '#FF8C41',
              padding: 15,
              paddingLeft: 20,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              {evento.titulo}
            </Text>
            <Text>{evento.subtitulo}</Text>
            <Text>
              Fecha: <Text style={{ fontWeight: 500 }}>{evento.fecha}</Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#202124',
    padding: 10,
    flexDirection: 'column',
  },
  containerItemEvento: {
    width: '100%',
    height: 350,
    position: 'relative',
    marginBottom: 10,
  },
});
