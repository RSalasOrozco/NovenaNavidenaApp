import AsyncStorage from "@react-native-async-storage/async-storage";

const PROGRESS_KEY = "novena_progress";

export const saveProgress = async (dayId) => {
  try {
    const progress = await getProgress();
    const updatedProgress = [...progress, dayId];
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(updatedProgress));
    return updatedProgress;
  } catch (error) {
    console.error("Error guardando progreso:", error);
    return [];
  }
};

export const getProgress = async () => {
  try {
    const progress = await AsyncStorage.getItem(PROGRESS_KEY);
    return progress ? JSON.parse(progress) : [];
  } catch (error) {
    console.error("Error leyendo progreso:", error);
    return [];
  }
};

export const resetProgress = async () => {
  try {
    await AsyncStorage.removeItem(PROGRESS_KEY);
    return [];
  } catch (error) {
    console.error("Error reseteando progreso:", error);
    return [];
  }
};
