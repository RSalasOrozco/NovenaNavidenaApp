export const colors = {
  // Paleta navideña pastel
  background: "#fff0f0", // Rojo pastel muy claro
  primary: "#ff6b6b", // Rojo pastel
  secondary: "#87d37c", // Verde pastel
  accent: "#ffd166", // Dorado pastel
  lightGreen: "#c8f4c5", // Verde muy claro
  lightRed: "#ffc8c8", // Rojo muy claro
  lightGold: "#ffecb3", // Dorado muy claro
  textDark: "#2c5530", // Verde oscuro para texto
  textLight: "#666", // Gris para texto secundario
  white: "#ffffff",
  card: "rgba(255, 255, 255, 0.95)"
};

export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollContainer: {
    flex: 1,
    padding: 15
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.textLight,
    marginBottom: 20,
    fontWeight: "500"
  },
  card: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold"
  }
};
