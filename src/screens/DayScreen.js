import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { saveProgress } from "../utils/storage";
import { novenaData } from "../data/novenaData";
import { colors, globalStyles } from "../styles/globalStyles";

export default function DayScreen({ route, navigation }) {
  const { day, progress, onGoBack } = route.params;

  const handleComplete = async () => {
    await saveProgress(day.id);
    Alert.alert("¡Día Completado!", `Has completado ${day.title}`, [
      {
        text: "OK",
        onPress: () => {
          onGoBack && onGoBack();
          navigation.goBack();
        }
      }
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView
        style={globalStyles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.dayTitle}>{day.title}</Text>

        {/* Reflexión del día */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>📖 Reflexión del Día</Text>
          <Text style={styles.reflectionText}>{day.reflection}</Text>
        </View>

        {/* Oración inicial */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>
            🙏 Oración para Todos los Días
          </Text>
          <Text style={styles.prayerText}>
            {novenaData.commonPrayers.startPrayer}
          </Text>
        </View>

        {/* Oración a la Virgen */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>
            🌹 Oración a la Santísima Virgen
          </Text>
          <Text style={styles.prayerText}>
            {novenaData.commonPrayers.virginPrayer}
          </Text>
        </View>

        {/* Oración a San José */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>🕯️ Oración a San José</Text>
          <Text style={styles.prayerText}>
            {novenaData.commonPrayers.josePrayer}
          </Text>
        </View>

        {/* Gozos */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>🎵 Gozos al Niño Jesús</Text>
          <Text style={styles.gozosText}>{novenaData.commonPrayers.gozos}</Text>
        </View>

        {/* Oración final */}
        <View style={[styles.section, globalStyles.card]}>
          <Text style={styles.sectionTitle}>👼 Oración al Niño Jesús</Text>
          <Text style={styles.prayerText}>{novenaData.endPrayer}</Text>
        </View>

        {/* Espacio para botones */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Botones fijos en la parte inferior */}
      <View style={styles.buttonsContainer}>
        {!progress.includes(day.id) && (
          <TouchableOpacity
            style={[styles.button, globalStyles.button, styles.completeButton]}
            onPress={handleComplete}
          >
            <Text style={globalStyles.buttonText}>
              ✅ Marcar Día como Completado
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, globalStyles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.buttonText}>← Volver al Inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: colors.lightGreen,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary
  },
  section: {
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 10
  },
  reflectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textDark,
    fontStyle: "italic",
    textAlign: "center"
  },
  prayerText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textDark,
    textAlign: "justify"
  },
  gozosText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textDark,
    textAlign: "center",
    fontWeight: "500"
  },
  buttonsContainer: {
    padding: 15,
    backgroundColor: colors.background,
    borderTopWidth: 2,
    borderTopColor: colors.lightRed
  },
  button: {
    marginBottom: 10
  },
  completeButton: {
    backgroundColor: colors.secondary
  },
  backButton: {
    backgroundColor: colors.textLight
  },
  bottomSpacer: {
    height: 10
  }
});
