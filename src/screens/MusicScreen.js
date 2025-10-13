import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Alert
} from "react-native";
import { colors, globalStyles } from "../styles/globalStyles";

export default function MusicScreen({ navigation }) {
  const openYouTubeSearch = () => {
    const searchQuery = "villancicos navideños tradicionales";
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      searchQuery
    )}`;

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert(
          "Error",
          "No se pudo abrir YouTube. ¿Tienes la app instalada?",
          [{ text: "OK" }]
        );
      }
    });
  };

  const openChristmasPlaylist = () => {
    // Enlace a una playlist popular de villancicos
    const url =
      "https://www.youtube.com/results?search_query=playlist+villancicos+navideños";

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir YouTube.", [{ text: "OK" }]);
      }
    });
  };

  const openCustomSearch = () => {
    // Esto abre la búsqueda en YouTube para que el usuario escriba lo que quiera
    const url = "https://www.youtube.com/";

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir YouTube.", [{ text: "OK" }]);
      }
    });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView
        style={globalStyles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={globalStyles.title}>🎵 Música Navideña</Text>
        <Text style={globalStyles.subtitle}>
          Elige una opción para escuchar villancicos en YouTube
        </Text>

        <View style={styles.optionsContainer}>
          {/* Opción 1: Búsqueda de villancicos */}
          <TouchableOpacity
            style={[styles.optionButton, globalStyles.card]}
            onPress={openYouTubeSearch}
          >
            <Text style={styles.optionIcon}>🎄</Text>
            <Text style={styles.optionTitle}>Villancicos Tradicionales</Text>
            <Text style={styles.optionDescription}>
              Buscar villancicos navideños clásicos
            </Text>
          </TouchableOpacity>

          {/* Opción 2: Playlist navideña */}
          <TouchableOpacity
            style={[styles.optionButton, globalStyles.card]}
            onPress={openChristmasPlaylist}
          >
            <Text style={styles.optionIcon}>🎵</Text>
            <Text style={styles.optionTitle}>Playlist Navideña</Text>
            <Text style={styles.optionDescription}>
              Explorar playlists de música navideña
            </Text>
          </TouchableOpacity>

          {/* Opción 3: Buscar libremente */}
          <TouchableOpacity
            style={[styles.optionButton, globalStyles.card]}
            onPress={openCustomSearch}
          >
            <Text style={styles.optionIcon}>🔍</Text>
            <Text style={styles.optionTitle}>Buscar en YouTube</Text>
            <Text style={styles.optionDescription}>
              Abrir YouTube para buscar cualquier canción
            </Text>
          </TouchableOpacity>
        </View>

        {/* Información adicional */}
        <View style={[styles.infoCard, globalStyles.card]}>
          <Text style={styles.infoTitle}>💡 ¿Cómo funciona?</Text>
          <Text style={styles.infoText}>
            • Toca cualquier opción para abrir YouTube{"\n"}• La app de YouTube
            se abrirá automáticamente{"\n"}• Puedes buscar cualquier villancico
            que te guste{"\n"}• ¡Disfruta de la música navideña!
          </Text>
        </View>

        {/* Botón fijo en la parte inferior */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.backButton, globalStyles.button]}
            onPress={() => navigation.goBack()}
          >
            <Text style={globalStyles.buttonText}>← Volver al Inicio</Text>
          </TouchableOpacity>
        </View>

        {/* Espacio extra */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#dc2626",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
    lineHeight: 22
  },
  optionsContainer: {
    marginBottom: 25
  },
  optionButton: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#dc2626",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  optionIcon: {
    fontSize: 32,
    marginBottom: 10
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 5,
    textAlign: "center"
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 18
  },
  infoCard: {
    backgroundColor: "#e8f5e8",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#16a34a"
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8
  },
  infoText: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20
  },
  backButton: {
    backgroundColor: "#4a7c59",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
