import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Pressable,
  Easing,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import { useState, useRef } from 'react';
import CheckBox from 'react-native-bouncy-checkbox';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ItemsMapArr = {
  Restaurante: [
    {
      tag: ['Comida Mexicana'],
      nombre: "Taki's Tacos",
      subtitulo: 'Restaurante Mexicana',
      coordenadas: {
        latitude: -27.486884343274113,
        longitude: -58.80530430578027,
      },
      imgs: [],
    },
    {
      tag: ['Comida Japonesa'],
      nombre: 'Arigato Sushi',
      subtitulo: 'Restaurante Japonés',
      coordenadas: {
        latitude: -27.473186781984925,
        longitude: -58.838285339806966,
      },
      imgs: [],
    },
    {
      tag: ['Comida Japonesa'],
      nombre: 'Hattori Sushi Nikkei',
      subtitulo: 'Restaurante Japonés',
      coordenadas: {
        latitude: -27.47396806951732,
        longitude: -58.83995862911041,
      },
      imgs: [],
    },
    {
      tag: ['Comida Japonesa'],
      nombre: 'Hattori Sushi Nikkei',
      subtitulo: 'Restaurante Japonés',
      coordenadas: {
        latitude: -27.47396806951732,
        longitude: -58.83995862911041,
      },
      imgs: [],
    },
    {
      tag: ['Comida Italiana'],
      nombre: 'La Bella Italia',
      subtitulo: 'Restaurante Italiano',
      coordenadas: {
        latitude: -27.471424640517537,
        longitude: -58.84205688241199,
      },
      imgs: [],
    },
    {
      tag: ['Comida Italiana'],
      nombre: 'Fatto in Casa',
      subtitulo: 'Tienda de pasta',
      coordenadas: {
        latitude: -27.45869118899852,
        longitude: -58.82569276683519,
      },
      imgs: [],
    },
    {
      tag: ['Comida Arabica'],
      nombre: 'Tum Arabic Food',
      subtitulo: 'Cocina de medio oriente',
      coordenadas: {
        latitude: -27.46978975673686,
        longitude: -58.84797439273164,
      },
      imgs: [],
    },
    {
      tag: ['Comida Arabica'],
      nombre: 'Daf Lomitos Árabes',
      subtitulo: 'Cocina de medio oriente',
      coordenadas: {
        latitude: -27.467501281460223,
        longitude: -58.823735619055945,
      },
      imgs: [],
    },
    {
      tag: ['Gourmet'],
      nombre: 'Los Lapachos Restaurant',
      subtitulo: 'Restaurante de alta cocina',
      coordenadas: {
        latitude: -27.46388954297771,
        longitude: -58.84447748119452,
      },
      imgs: [],
    },
    {
      tag: ['Gourmet'],
      nombre: 'Timbó',
      subtitulo: 'Restaurante de alta cocina',
      coordenadas: {
        latitude: -27.46409509338871,
        longitude: -58.84516055203085,
      },
      imgs: [],
    },
  ],
  'Club Nocturno': [
    {
      tag: ['Rock', 'Musica en vivo'],
      nombre: 'Cave Club Rock Bar',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.46437879198406,
        longitude: -58.82471807853118,
      },
      imgs: [],
    },
    {
      tag: ['Musica en vivo'],
      nombre: 'Santo Domingo',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.475149976079475,
        longitude: -58.852087476762165,
      },
      imgs: [],
    },
    {
      tag: ['Musica en vivo'],
      nombre: 'Druzh',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.47486568289337,
        longitude: -58.83207770527697,
      },
      imgs: [],
    },
    {
      tag: ['Musica en vivo'],
      nombre: 'Don Joaquin',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.476238868942275,
        longitude: -58.847184949705124,
      },
      imgs: [],
    },
    {
      tag: ['Electronica'],
      nombre: 'Zavod',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.47934277780816,
        longitude: -58.85391267613027,
      },
      imgs: [],
    },
    {
      tag: ['Electronica'],
      nombre: 'After The Secret',
      subtitulo: 'Bar musical',
      coordenadas: {
        latitude: -27.467327523082762,
        longitude: -58.80956427481191,
      },
      imgs: [],
    },
  ],
  Cafeteria: [
    {
      tag: ['Lectura'],
      nombre: '"Capítulo 1" Libros - Café',
      subtitulo: 'Cafeteria',
      coordenadas: {
        latitude: -27.462696267936348,
        longitude: -58.83988360134216,
      },
      imgs: [],
    },
    {
      tag: ['Lectura'],
      nombre: 'Bookafé Corrientes',
      subtitulo: 'Cafeteria',
      coordenadas: {
        latitude: -27.469806171603473,
        longitude: -58.82583287698443,
      },
      imgs: [],
    },
    {
      tag: ['Lectura'],
      nombre: 'Bibliobar Cafe',
      subtitulo: 'Cafeteria',
      coordenadas: {
        latitude: -27.466576198681842,
        longitude: -58.83428646715288,
      },
      imgs: [],
    },
    {
      tag: ['Saludable'],
      nombre: 'Cafe Bar Saludable',
      subtitulo: 'Cafeteria',
      coordenadas: {
        latitude: -27.47033348128012,
        longitude: -58.83599366341134,
      },
      imgs: [],
    },
    {
      tag: ['Moderno', 'Familiar'],
      nombre: 'La Felipa',
      subtitulo: 'Cafeteria',
      coordenadas: {
        latitude: -27.462767931018792,
        longitude: -58.838988848258765,
      },
      imgs: [],
    },
    {
      tag: ['Moderno', 'Aire Libre'],
      nombre: 'Lo de Pepe',
      subtitulo: 'Café de especialidad',
      coordenadas: {
        latitude: -27.46902823327087,
        longitude: -58.83684873691984,
      },
      imgs: [],
    },
    {
      tag: ['Moderno', 'Aire Libre'],
      nombre: 'Maiori',
      subtitulo: 'Café Bar',
      coordenadas: {
        latitude: -27.466709779492106,
        longitude: -58.8340726327397,
      },
      imgs: [],
    },
  ],
};

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const TransXAnim = useRef(new Animated.Value(0)).current;

  const MapRef = useRef(null);

  const [stateButtonItems, setButtonItems] = useState(CreateStateButtons());
  const [stateButton, setButton] = useState(false);

  const [stateShadowMenu, setShadowMenu] = useState(false);
  const [stateInfoItem, setInfoItem] = useState(false);
  const [stateSelectedItem, setSelectedItem] = useState();

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.09;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const INITIAL_POSITION = {
    latitude: -27.4844262,
    longitude: -58.8328003,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  function CreateStateButtons() {
    let state = {};
    for (const negocio in ItemsMapArr) {
      ItemsMapArr[negocio].forEach((item) => {
        item.tag.forEach((tag) => {
          state = {
            ...state,
            [negocio]: { ...state[negocio], [tag]: false },
          };
        });
      });
      state = {
        ...state,
        [negocio]: { ...state[negocio], active: false },
      };
    }
    return state;
  }
  const leftInterpolate = TransXAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-85%', '0%'],
  });
  const fadeInShadow = () => {
    setShadowMenu(true);
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutShadow = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShadowMenu(false));
  };
  const opacityIn = () => {
    setInfoItem(true);
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const opacityOut = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setInfoItem(false));
  };
  const deltaIn = (region) => {
    MapRef.current.getCamera().then((cam: Camera) => {
      MapRef.current.animateCamera(cam, 500);
      MapRef.current.animateToRegion(
        {
          ...region,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        },
        500
      );
    });
  };
  const deltaOut = () => {
    MapRef.current.getCamera().then((cam: Camera) => {
      MapRef.current.animateCamera(cam, 500);
      MapRef.current.animateToRegion(INITIAL_POSITION, 500);
    });
  };
  function bttnMenuClosePress() {
    if (!stateButton) {
      Animated.timing(TransXAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.exp),
      }).start();
      fadeInShadow();
    } else {
      Animated.timing(TransXAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.exp),
      }).start();
      fadeOutShadow();
    }
    setButton(!stateButton);
  }
  function bttnInfoItemClosePress() {
    deltaOut();
    opacityOut();
  }

  function CreateRenderButtonItems() {
    let items = [];
    function updateCheckboxState(tag, negocio) {
      setButtonItems((prevState) => ({
        ...prevState,
        [negocio]: {
          ...prevState[negocio],
          [tag]: !prevState[negocio][tag],
        },
      }));
    }
    function updateCheckboxTitle(negocio) {
      let ob = {};
      for (const tag in stateButtonItems[negocio]) {
        ob = { ...ob, [tag]: !stateButtonItems[negocio].active };
      }
      setButtonItems((prevState) => ({
        ...prevState,
        [negocio]: { ...ob },
      }));
    }

    for (const negocio in stateButtonItems) {
      items.push(
        <CheckBox
          isChecked={stateButtonItems[negocio].active}
          onPress={() => updateCheckboxTitle(negocio)}
          text={negocio}
          textStyle={{
            textDecorationLine: 'none',
            fontSize: 20,
            fontWeight: 600,
          }}
          style={{ height: 30, marginTop: 30, marginBottom: 5 }}
        />
      );
      for (const tag in stateButtonItems[negocio]) {
        if (tag !== 'active')
          items.push(
            <CheckBox
              isChecked={stateButtonItems[negocio][tag]}
              onPress={() => updateCheckboxState(tag, negocio)}
              text={tag}
              textStyle={{
                textDecorationLine: 'none',
              }}
              style={{ height: 30, marginLeft: 20, marginVertical: 2 }}
            />
          );
      }
    }
    return <>{items}</>;
  }

  const IconMarker = ({ negocio }) => {
    switch (negocio) {
      case 'Restaurante':
        return <Ionicons name={'fast-food'} color={'red'} size={35} />;
      case 'Club Nocturno':
        return <Entypo name={'drink'} color={'gold'} size={35} />;
      case 'Cafeteria':
        return <FontAwesome name={'coffee'} color={'blue'} size={35} />;
      default:
        return;
    }
  };

  const ItemsMap = () => {
    const Items = [];
    for (const negocio in ItemsMapArr) {
      ItemsMapArr[negocio].forEach((item, key) => {
        if (
          item.tag
            .map((tag) => stateButtonItems[negocio][tag] === true)
            .includes(true)
        )
          Items.push(
            <Marker
              key={key}
              coordinate={item.coordenadas}
              onPress={() => {
                deltaIn(item.coordenadas);
                opacityIn();
                setSelectedItem(item);
              }}>
              <IconMarker negocio={negocio} />
            </Marker>
          );
      });
    }
    return <>{Items}</>;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={MapRef}
        key={'AIzaSyDZH_Zi7K4b2B-hBhuHDt_rMRtaxTkZRnI'}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={INITIAL_POSITION}
        customMapStyle={MapStyle}
        toolbarEnabled={false}>
        <ItemsMap />
      </MapView>
      {stateShadowMenu && (
        <Animated.View style={[styles.shadowMenu, { opacity: fadeAnim }]} />
      )}
      <Pressable style={styles.bttnMenuItems} onPress={bttnMenuClosePress}>
        {(prop) =>
          prop.pressed ? (
            <Entypo name={'menu'} color={'white'} size={50} />
          ) : (
            <Entypo name={'menu'} color={'black'} size={50} />
          )
        }
      </Pressable>
      <Animated.View style={[styles.containerMenu, { left: leftInterpolate }]}>
        <Pressable style={styles.bttnMenuClose} onPress={bttnMenuClosePress}>
          <Entypo name={'squared-cross'} color={'black'} size={50} />
        </Pressable>
        <ScrollView>
          <CreateRenderButtonItems />
        </ScrollView>
      </Animated.View>
      {stateInfoItem && (
        <Animated.View
          style={[styles.infoItemMapContainer, { opacity: opacityAnim }]}>
          <View style={styles.infoItemMapShadow} />
          <ScrollView style={styles.infoItemMap}>
            <Pressable
              style={styles.bttnInfoItemMapClose}
              onPress={bttnInfoItemClosePress}>
              <Entypo name={'squared-cross'} color={'black'} size={50} />
            </Pressable>
            <Text
              style={{
                fontSize: 26,
                marginTop: 20,
                marginLeft: 30,
                fontWeight: 600,
              }}>
              {stateSelectedItem.nombre}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 0,
                marginLeft: 30,
                fontWeight: 400,
                position: 'relative',
                top: -3,
              }}>
              {stateSelectedItem.subtitulo}
              <View
                style={{ flexDirection: 'row', paddingLeft: 5, height: 12 }}>
                <FontAwesome name={'star'} color={'gold'} />
                <FontAwesome name={'star'} color={'gold'} />
                <FontAwesome name={'star'} color={'gold'} />
                <FontAwesome name={'star'} color={'gold'} />
                <FontAwesome name={'star'} color={'gold'} />
              </View>
            </Text>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'gray',
                marginTop: 5,
              }}
            />
            <Text style={{ marginTop: 15, marginLeft: 30, color: 'grey' }}>
              Tags:
            </Text>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 5,
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {stateSelectedItem.tag.map((tag) => (
                <Text
                  style={{
                    backgroundColor: 'grey',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    marginVertical: 1,
                  }}>
                  {tag}
                </Text>
              ))}
            </View>
            <Text style={{ marginTop: 5, marginLeft: 30, color: 'grey' }}>
              Ir:
            </Text>
            <View
              style={{
                paddingHorizontal: 30,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Pressable
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 50,
                  paddingHorizontal: 13,
                  paddingVertical: 8,
                }}>
                <Image
                  style={{ width: 15, height: 20, marginHorizontal: 3 }}
                  source={require('../assets/googleMapsIco.png')}
                />
                <Text>Abrir en Google Maps</Text>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 50,
                  paddingHorizontal: 13,
                  paddingVertical: 8,
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: 25, height: 10, marginHorizontal: 3 }}
                  source={require('../assets/uberIco.png')}
                />
                <Text>Abrir en Uber</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  containerMenu: {
    width: '85%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    paddingTop: 60,
    paddingLeft: 40,
    top: 0,
    zIndex: 5,
    overflow: 'scroll',
  },
  shadowMenu: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    zIndex: 4,
  },
  bttnMenuItems: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 45,
    left: 15,
    zIndex: 2,
    backgroundColor: '#FF8C41',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bttnMenuClose: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 45,
    right: 15,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoItemMapContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 4,
  },
  infoItemMapShadow: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.6,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  infoItemMap: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  bttnInfoItemMapClose: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100,
  },
});

const MapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
