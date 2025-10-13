import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from "react-native";
import { novenaData } from "../data/novenaData";
import { getProgress, resetProgress } from "../utils/storage";
import { colors, globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const savedProgress = await getProgress();
    setProgress(savedProgress);
  };

  const handleDayPress = (day) => {
    navigation.navigate("Day", { day, progress, onGoBack: loadProgress });
  };

  const handleReset = () => {
    Alert.alert(
      "Reiniciar Progreso",
      "¿Estás seguro de que quieres reiniciar todo el progreso?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sí, reiniciar",
          onPress: async () => {
            await resetProgress();
            loadProgress();
          }
        }
      ]
    );
  };

  const getDayIcon = (dayId) => {
    const icons = ["🌟", "👼", "🌹", "🕯️", "🚶", "⭐", "🐑", "👑", "🎄"];
    return icons[dayId - 1] || "📖";
  };

  const getDayColor = (dayId) => {
    if (progress.includes(dayId)) {
      return { bg: colors.lightGreen, border: colors.secondary };
    }

    const colorsArray = [
      { bg: colors.lightRed, border: colors.primary },
      { bg: colors.lightGreen, border: colors.secondary },
      { bg: colors.lightGold, border: colors.accent },
      { bg: "#e6f2ff", border: "#4d94ff" }, // Azul pastel
      { bg: "#f0e6ff", border: "#8c66ff" }, // Púrpura pastel
      { bg: "#ffe6f2", border: "#ff66a3" }, // Rosa pastel
      { bg: "#e6fff2", border: "#00cc66" }, // Verde menta
      { bg: "#fff2e6", border: "#ff9933" }, // Naranja pastel
      { bg: "#f0f0ff", border: "#6666ff" } // Lila pastel
    ];

    return (
      colorsArray[dayId - 1] || { bg: colors.card, border: colors.primary }
    );
  };

  const completedCount = progress.length;
  const totalDays = novenaData.days.length;

  return (
    <View style={globalStyles.container}>
      <ScrollView
        style={globalStyles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={[styles.header, globalStyles.card]}>
          <Text style={globalStyles.title}>🎄 Novena de Aguinaldos</Text>
          <Text style={globalStyles.subtitle}>
            Prepara tu corazón para el Niño Jesús
          </Text>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(completedCount / totalDays) * 100}%` }
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {completedCount} de {totalDays} días completados
            </Text>
          </View>
        </View>

        {/* Grid de Días */}
        <View style={styles.daysGrid}>
          {novenaData.days.map((day) => {
            const dayColors = getDayColor(day.id);
            return (
              <TouchableOpacity
                key={day.id}
                style={[
                  styles.dayCard,
                  {
                    backgroundColor: dayColors.bg,
                    borderColor: dayColors.border
                  }
                ]}
                onPress={() => handleDayPress(day)}
              >
                <Text style={styles.dayIcon}>{getDayIcon(day.id)}</Text>
                <Text style={styles.dayNumber}>Día {day.id}</Text>
                <Text style={styles.dayTitle}>{day.title.split(" - ")[1]}</Text>
                <Text
                  style={[
                    styles.dayStatus,
                    {
                      color: progress.includes(day.id)
                        ? colors.secondary
                        : colors.textLight
                    }
                  ]}
                >
                  {progress.includes(day.id) ? "Completado ✓" : "Por leer"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Botones de Acción */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.musicButton, globalStyles.card]}
            onPress={() => navigation.navigate("Music")}
          >
            <Text style={styles.musicIcon}>🎵</Text>
            <Text style={styles.musicButtonText}>Villancicos Navideños</Text>
            <Text style={styles.musicSubtext}>Escuchar en YouTube</Text>
          </TouchableOpacity>

          {completedCount > 0 && (
            <TouchableOpacity
              style={[styles.resetButton, globalStyles.card]}
              onPress={handleReset}
            >
              <Text style={styles.resetIcon}>🔄</Text>
              <Text style={styles.resetButtonText}>Reiniciar Progreso</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Mensaje Inspirador */}
        <View style={[styles.inspirationCard, globalStyles.card]}>
          <Text style={styles.inspirationIcon}>✨</Text>
          <Text style={styles.inspirationText}>
            "Ven, Señor Jesús, ven a nuestro corazón en esta Navidad"
          </Text>
        </View>

        {/* Espacio extra al final para asegurar que todo se vea */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30 // Espacio extra al final
  },
  bottomSpacer: {
    height: 20 // Espacio adicional para asegurar visibilidad
  },
  header: {
    alignItems: "center"
  },
  progressContainer: {
    width: "100%",
    alignItems: "center"
  },
  progressBar: {
    width: "100%",
    height: 12,
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: 10
  },
  progressText: {
    fontSize: 14,
    color: colors.textLight,
    fontWeight: "500"
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  dayCard: {
    width: "48%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  dayIcon: {
    fontSize: 24,
    marginBottom: 5
  },
  dayNumber: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textLight,
    marginBottom: 2
  },
  dayTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 5,
    lineHeight: 16
  },
  dayStatus: {
    fontSize: 11,
    fontWeight: "600"
  },
  actionsContainer: {
    marginBottom: 20
  },
  musicButton: {
    alignItems: "center",
    borderColor: colors.secondary
  },
  musicIcon: {
    fontSize: 32,
    marginBottom: 8
  },
  musicButtonText: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  musicSubtext: {
    color: colors.textLight,
    fontSize: 14
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.accent
  },
  resetIcon: {
    fontSize: 20,
    marginRight: 8
  },
  resetButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: "bold"
  },
  inspirationCard: {
    alignItems: "center",
    borderColor: "#8c66ff" // Púrpura pastel
  },
  inspirationIcon: {
    fontSize: 24,
    marginBottom: 8
  },
  inspirationText: {
    fontSize: 14,
    color: colors.textDark,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 20
  }
});
