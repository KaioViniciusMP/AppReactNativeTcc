import { ActivityIndicator, View } from "react-native";
import { useContext } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../context";

function Routes() {
    const {isAuthenticated } = useContext(AuthContext);
    const loading = true;

    if (!loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#5D5C96',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <ActivityIndicator size={60} color="#fff" />
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;