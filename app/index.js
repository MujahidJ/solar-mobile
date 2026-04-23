import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Solar Maintenance App
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/login/technician")}
        style={{
          backgroundColor: "#111",
          padding: 16,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Login as Technician
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/login/client")}
        style={{
          backgroundColor: "#111",
          padding: 16,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Login as Client
        </Text>
      </TouchableOpacity>
    </View>
  );
}