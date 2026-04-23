import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../../components/Input";
import { technicianLogin } from "../../src/api/auth";
import { useAuth } from "../../src/context/AuthContext";
import { router } from "expo-router";

export default function ClientLoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Validation", "Email and password are required");
    }

    try {
      setLoading(true);

      const response = await clientLogin({
        email,
        password,
      });

      await login(response.token, "client");

      router.replace("/client/dashboard");
    } catch (error) {
      Alert.alert("Login Failed", "Invalid credentials or server issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Client Login
      </Text>

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        style={{
          backgroundColor: "#111",
          padding: 16,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          {loading ? "Please wait..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
