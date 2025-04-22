import { ActivityIndicator, View, Text, Platform } from 'react-native';
import color from '../constants/color';

export const FullScreenLoader = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.25)', // fondo difuminado
    }}>
      
        <ActivityIndicator
          size="large"
          color={color.primary}
        />
        <Text style={{
          marginTop: 12,
          fontSize: 16,
          color: '#333',
          fontWeight: '500',
        }}>
          Cargando...
        </Text>
    </View>
  );
};
